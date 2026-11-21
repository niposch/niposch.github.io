export interface LiveProject {
  title: string;
  kind: string;
  description: string;
  href: string;
  source: string;
  detail: string;
  action: string;
  image?: { src: string; alt: string; width: number; height: number };
}

// Direct browser entry points. Keep the destination and any demo limits here.
export const liveProjects: LiveProject[] = [
  {
    title: 'Parking Practice', kind: 'Game · Prototype',
    description: 'First-person parallel and bay parking practice from the driver’s seat, with working mirrors, cameras, and optional hints.',
    href: '/parking-trainer/', source: 'https://github.com/niposch/parking-trainer',
    detail: 'Works with controller, keyboard, or touch. Experimental web build, so the first load takes a moment.',
    action: 'Start parking',
    image: {
      src: '/images/parking-trainer/approach-parallel.png',
      alt: 'Driver-seat view in Parking Practice lining up next to parked cars, showing the wing mirror, rear-view mirror, and backup camera.',
      width: 1440,
      height: 900,
    },
  },
  {
    title: 'Cyberpunk 2077 save editor', kind: 'Tool',
    description: 'Edit attributes, perk points, level, street cred, eddies, and life path, or get your one-time attribute reset back.',
    href: '/cp2077-save-editor/', source: 'https://github.com/niposch/cp2077-save-editor',
    detail: 'Runs completely locally in WebAssembly (nothing gets uploaded) and ships with an example save. Still, back up your saves first.',
    action: 'Open editor',
    image: {
      src: '/images/cp2077-save-editor/character.png',
      alt: 'Cyberpunk 2077 save editor showing attributes, level, eddies, and the restore-attribute-reset button.',
      width: 1440,
      height: 900,
    },
  },
  {
    title: 'Button & Timber', kind: 'Game',
    description: 'Build wooden trains, bears, and other toys, stock the shelves, and run the till in a cozy little shop on Alder Lane.',
    href: '/button-and-timber/', source: 'https://github.com/niposch/button-and-timber',
    detail: 'Best on desktop with a keyboard. Saves straight to your browser.',
    action: 'Play Button & Timber',
  },
  {
    title: 'Unturned kit selector', kind: 'Tool',
    description: 'Browser interface for picking Unturned items and putting together a server kit.',
    href: 'https://kit-selector.niposch.de/', source: 'https://github.com/niposch/unturned-kit-selector',
    detail: 'Opens as a standalone web app.',
    action: 'Open kit selector',
  },
  {
    title: 'A Living Place in Limited Space', kind: 'Game · Ludum Dare 54',
    description: 'Our team entry for Ludum Dare 54, built around the theme “Limited Space”.',
    href: '/ludum-dare-54/', source: 'https://github.com/niposch/ludum-dare-54',
    detail: 'Jam team project, hosted from my fork.',
    action: 'Play game',
  },
  {
    title: 'Footlong Flight', kind: 'Game · Ludum Dare 55',
    description: 'Feed hungry wizards in our Ludum Dare 55 game for the theme “Summoning”.',
    href: '/ludum-dare-55/', source: 'https://github.com/niposch/ludum-dare-55',
    detail: 'Jam team project, hosted from my fork.',
    action: 'Play game',
  },
  {
    title: 'Potion-brewing prototype', kind: 'Game · Ludum Dare 56',
    description: 'Toss tiny creatures into a witch’s cauldron for the Ludum Dare 56 theme “Tiny Creatures”.',
    href: '/ludum-dare-56/', source: 'https://github.com/niposch/ludum-dare-56',
    detail: 'Unfinished jam prototype. We ran out of time before the deadline, but you can pick a level and poke around.',
    action: 'Play prototype',
  },
  {
    title: 'Wake-on-LAN Web Manager', kind: 'Demo',
    description: 'UI demo of a self-hosted dashboard for keeping track of machines on a local network and waking them up.',
    href: '/wake-on-lan-web/', source: 'https://github.com/niposch/wake-on-lan-web',
    detail: 'Static demo only. Actually waking PCs needs the self-hosted backend.',
    action: 'Explore demo',
  },
  {
    title: 'RustCar / RustEdit converter', kind: 'Tool',
    description: 'A small browser converter I made for a friend to edit custom RustCar vehicle parts in RustEdit and merge them back.',
    href: '/rustedit-rustcars-converter/', source: 'https://github.com/niposch/rustedit-rustcars-converter',
    detail: 'Runs locally in the browser with a basic 3D prop preview.',
    action: 'Open converter',
  },
];
