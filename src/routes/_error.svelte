<script lang="ts">
  export let status: string
  export let error: Error

  import ErrorContent from '../components/content/ErrorContent.svelte'
  import GlobalHeader from '../components/header/GlobalHeader.svelte'
  import Header from '../components/header/Header.svelte'

  import '../styles/error.scss'
</script>

<GlobalHeader title="{status}" />

<Header title="{status}" />

<ErrorContent {error} />
