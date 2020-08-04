<script lang="ts">
  export let alt: string
  export let src: string
  export let caption: string

  import './Image.scss'
</script>

<figure>
  <img {alt} {src} />
  <figcaption>{caption}</figcaption>
</figure>
