<script lang="ts">
  export let alt: string
  export let caption: string
  export let height: string
  export let src: string
  export let width: string

  import './Image.scss'
</script>

<figure>
  <img {alt} {height} {src} {width} />

  {#if caption}
    <figcaption>{caption}</figcaption>
  {/if}
</figure>
