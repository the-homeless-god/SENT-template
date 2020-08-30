<script>
  export let segment: string = ''
  export let tabs: Tab[] = []

  import type { Tab } from '../../interfaces/tab.interface'
  import { showSegment } from './Nav.utils'

  import NavLink from './NavLink.svelte'

  import './Nav.scss'

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
