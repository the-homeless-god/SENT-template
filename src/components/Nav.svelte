<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  /* clearfix */
  ul::after {
    content: '';
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: flex;
    align-items: center;
  }

  .selected::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: flex;
    align-items: center;
  }
</style>

<script lang="ts">
  import type ITab from '../interfaces/tab.interface'
  import { logger } from '../helpers/logger.helper'

  import NavLink from './NavLink.svelte'

  export let segment: string = ''
  export let tabs: ITab[] = []

  const showSegment = (segment: string) => {
    logger(segment)
  }

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
