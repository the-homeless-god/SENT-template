<script context="module" lang="ts">
  import Request from '../../classes/request'
  import { loggerWithDate } from '../../helpers/logger.helper'

  import Content from '../../components/content/Content.svelte'
  import GlobalHeader from '../../components/header/GlobalHeader.svelte'
  import Header from '../../components/header/Header.svelte'

  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    try {
      const post = await Request.get<Post>(`/blog/${params.slug}.json`)

      return { post }
    } catch (err) {
      loggerWithDate(err)
    }
  }
</script>

<script lang="ts">
  import type { Post } from '../../types'

  export let post: Post
</script>

{#if post}
  <GlobalHeader title="{post.title}" />

  <Header title="{post.title}" />

  <Content html="{post.html}" />
{:else}...{/if}
