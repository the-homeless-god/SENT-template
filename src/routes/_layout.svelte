<script lang="ts">
  import Nav from '../components/navbar/Nav.svelte'

  import { tabs } from '../helpers/tab.helper'

  import './layout.scss'

  export let segment: string
</script>

<Nav {segment} {tabs} />

<main>
  <slot />
</main>
