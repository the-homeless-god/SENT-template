<script lang="ts">
  export let text: string
  export let strong: boolean = false

  import SlotContent from './SlotContent.svelte'
</script>

<SlotContent>
  <p>
    {#if strong}
      <strong>{text}</strong>
    {:else}{text}{/if}
  </p>
</SlotContent>
