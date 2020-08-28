<script context="module">
  export async function preload() {}
</script>

<script>
  export let segment: string

  import { tabs } from '../helpers/tab.helper'

  import Nav from '../components/navbar/Nav.svelte'

  import '../styles/layout.scss'
</script>

<script context="module">
  export const preload = () => {}
</script>

<Nav {segment} {tabs} />

<main>
  <slot />
</main>
