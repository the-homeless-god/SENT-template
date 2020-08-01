<script>
  import Nav from '../components/Nav.svelte'

  import 'layout.scss'

  export let segment
</script>

<Nav segment="segment" />

<main>
  <slot />
</main>
