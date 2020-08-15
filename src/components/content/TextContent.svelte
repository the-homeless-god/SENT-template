<script>
  export let text: string

  export let center: boolean = false
  export let strong: boolean = false

  import SlotContent from './SlotContent.svelte'
</script>

<SlotContent>
  <p class:center>
    {#if strong}
      <strong>{text}</strong>
    {:else}{text}{/if}
  </p>
</SlotContent>
