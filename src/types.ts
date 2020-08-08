export type Post = {
  slug: string
  title: string
  html: string
}

export type Tab = {
  href: string
  title: string
  segment?: string
  prefetch: boolean
}
