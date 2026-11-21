// Build-time lookups against the GitHub API. Every helper degrades to `null`
// so an offline build or a rate-limited CI run still produces the site.

export interface Release { tag: string; url: string; publishedAt: Date; }

const cache = new Map<string, Promise<Release | null>>();

/** `https://github.com/owner/repo` -> `owner/repo` */
export function repoSlug(url: string) {
  const match = /^https:\/\/github\.com\/([^/]+\/[^/#?]+)/.exec(url);
  return match ? match[1].replace(/\.git$/, '') : null;
}

export function getLatestRelease(repo: string): Promise<Release | null> {
  let pending = cache.get(repo);
  if (!pending) {
    pending = fetchLatestRelease(repo);
    cache.set(repo, pending);
  }
  return pending;
}

async function fetchLatestRelease(repo: string): Promise<Release | null> {
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json', 'User-Agent': 'niposch.de-build' };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, { headers, signal: AbortSignal.timeout(8000) });
    if (!response.ok) {
      console.warn(`[github] ${repo}: latest release lookup returned ${response.status}`);
      return null;
    }
    const data = await response.json() as { tag_name?: string; html_url?: string; published_at?: string };
    if (!data.tag_name || !data.html_url) return null;
    return { tag: data.tag_name, url: data.html_url, publishedAt: new Date(data.published_at ?? 0) };
  } catch (error) {
    console.warn(`[github] ${repo}: latest release lookup failed`, error);
    return null;
  }
}

const VERSION = /\bv\d+(?:\.\d+)+\b/;

/**
 * Statuses like "v0.0.1 released" get their version swapped for the latest
 * GitHub release tag, so the Markdown never needs touching after a release.
 */
export async function withLatestVersion(status: string, repository: string) {
  if (!VERSION.test(status)) return status;
  const slug = repoSlug(repository);
  const release = slug ? await getLatestRelease(slug) : null;
  return release ? status.replace(VERSION, release.tag) : status;
}
