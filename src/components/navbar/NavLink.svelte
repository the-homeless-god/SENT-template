<script>
  export let selected: boolean = false
  export let prefetch: boolean = false
  export let href: string
  export let title: string

  import './NavLink.scss'
</script>

{#if prefetch}
  <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
      the blog data when we hover over the link or tap it on a touchscreen -->
  <a class:selected rel="{`${prefetch}`}" {href}>{title}</a>
{:else}
  <a class:selected {href}>{title}</a>
{/if}
