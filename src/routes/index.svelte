<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<script>
  import './index.scss'

  console.log('Started:', new Date())
</script>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="container">
  <h1 class="container-header">Great success!</h1>
</div>

<figure>
  <img alt="Borat" src="assets/img/great-success.png" />
  <figcaption>HIGH FIVE!</figcaption>
</figure>

<p>
  <strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong>
</p>
