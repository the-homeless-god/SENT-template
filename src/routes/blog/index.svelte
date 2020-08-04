<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
    padding: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  li {
    display: block;
    float: left;
    width: 100%;
  }

  /* clearfix */

  ul::after {
    content: '';
    clear: both;
  }
</style>

<script context="module">
  export function preload() {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts }
      })
  }
</script>

<script>
  export let posts
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>
