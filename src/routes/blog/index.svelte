<script>
  import type { Post } from '../../types'

  import Request from '../../classes/request'
  import { HOST } from '../../helpers/environment.helper'

  import AsyncContent from '../../components/content/AsyncContent.svelte'
  import GlobalHeader from '../../components/header/GlobalHeader.svelte'
  import Header from '../../components/header/Header.svelte'
  import ListContent from '../../components/content/ListContent.svelte'

  const getPosts = async (): Promise<Post[]> => await Request.get<Post[]>(`${HOST}/blog.json`)
</script>

<GlobalHeader title="Blog" />

<Header title="Recent posts" />

<AsyncContent let:items action="{getPosts}">
  <ListContent attributeHref="slug" {items} />
</AsyncContent>
