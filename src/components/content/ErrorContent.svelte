<script>
  export let error: Error

  import SlotContent from './SlotContent.svelte'
  import TextContent from './TextContent.svelte'

  const dev = process.env.NODE_ENV === 'development'
</script>

<SlotContent>
  <TextContent text="{error.message}" />

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</SlotContent>
