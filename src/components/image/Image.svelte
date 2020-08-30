<script>
  export let alt: string
  export let caption: string
  export let height: string
  export let src: string
  export let width: string

  export let onCaptionClick: () => void
  export let onClick: () => void

  import { onMount } from 'svelte'

  import { isNoEmptyAlt } from './Image.utils'

  import './Image.scss'

  onMount(() => {
    isNoEmptyAlt(alt)
  })
</script>

<figure>
  <img on:click="{onClick}" {alt} {height} {src} {width} />

  {#if caption}
    <figcaption on:click="{onCaptionClick}">{caption}</figcaption>
  {/if}
</figure>
