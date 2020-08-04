<script lang="ts">
  import NavLink from './NavLink.svelte'

  import type ITab from '../../interfaces/tab.interface'
  import { showSegment } from './Nav.utils'

  import './Nav.scss'

  export let segment: string = ''
  export let tabs: ITab[] = []

  showSegment(segment)
</script>

<nav>
  <ul>
    {#each tabs as tab}
      <li>
        <NavLink {...tab} selected="{segment === tab.segment}" />
      </li>
    {/each}
  </ul>
</nav>
