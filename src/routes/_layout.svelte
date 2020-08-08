<script lang="ts">
  export let segment: string

  import { tabs } from '../helpers/tab.helper'

  import Nav from '../components/navbar/Nav.svelte'

  import '../styles/layout.scss'
</script>

<Nav {segment} {tabs} />

<main>
  <slot />
</main>
