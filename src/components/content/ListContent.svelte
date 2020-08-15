<script>
  export let attributeHref: string = 'href'
  export let attributeTitle: string = 'title'
  export let items: any[]

  import SlotContent from './SlotContent.svelte'
</script>

<SlotContent>
  <ul>
    {#each items as item}
      <!-- we're using the non-standard `rel=prefetch` attribute to
              tell Sapper to load the data for the page as soon as
              the user hovers over the link or taps it, instead of
              waiting for the 'click' event -->
      <li>
        <a rel="prefetch" href="blog/{item[attributeHref]}">{item[attributeTitle]}</a>
      </li>
    {/each}
  </ul>
</SlotContent>
