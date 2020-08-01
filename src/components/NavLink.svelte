<style>
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
  export let selected: boolean = false
  export let prefetch: boolean = false
  export let href: string
  export let title: string
</script>

{#if prefetch}
  <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
      the blog data when we hover over the link or tap it on a touchscreen -->
  <a class:selected rel="{prefetch}" {href}>{title}</a>
{:else}
  <a class:selected {href}>{title}</a>
{/if}
