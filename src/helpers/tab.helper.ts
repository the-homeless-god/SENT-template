import type ITab from '../interfaces/tab.interface'

export const tabs: ITab[] = [
  {
    segment: undefined,
    href: '.',
    title: 'home',
    prefetch: false,
  },
  {
    segment: 'about',
    href: 'about',
    title: 'about',
    prefetch: false,
  },
  {
    segment: 'blog',
    href: 'blog',
    title: 'blog',
    prefetch: true,
  },
]
