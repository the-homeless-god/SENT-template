<script>
  export let error: Error

  import { isDevelopment } from '../../helpers/environment.helper'

  import SlotContent from './SlotContent.svelte'
  import TextContent from './TextContent.svelte'
</script>

<SlotContent>
  <TextContent text="{error.message}" />

  {#if isDevelopment && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</SlotContent>
