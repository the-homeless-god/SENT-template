<script lang="ts">
  import Nav from '../components/Nav.svelte'

  import type ITab from '../interfaces/tab.interface'

  import './layout.scss'

  export let segment: string

  const tabs: ITab[] = [
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
</script>

<Nav {segment} {tabs} />

<main>
  <slot />
</main>
