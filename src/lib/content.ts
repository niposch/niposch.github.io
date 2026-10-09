import { getCollection } from 'astro:content';
export async function getProjects() {
  return (await getCollection('projects', ({ data }) => !data.draft || import.meta.env.DEV))
    .sort((a, b) => a.data.order - b.data.order);
}
export async function getNotes() {
  return (await getCollection('notes', ({ data }) => !data.draft || import.meta.env.DEV))
    .sort((a, b) => a.data.order - b.data.order);
}
