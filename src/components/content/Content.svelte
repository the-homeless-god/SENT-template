<script lang="ts">
  export let html: string

  import SlotContent from './SlotContent.svelte'

  import './Content.scss'
</script>

<SlotContent>
  {@html html}
</SlotContent>
