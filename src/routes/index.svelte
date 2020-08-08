<script lang="ts">
  import GlobalHeader from '../components/header/GlobalHeader.svelte'
  import Image from '../components/image/Image.svelte'
  import Title from '../components/title/Title.svelte'

  import { loggerWithDate } from '../helpers/logger.helper'

  loggerWithDate('Started:')
</script>

<GlobalHeader title="Home" />

<Image width="100%" alt="logo" src="assets/img/logo.png" />

<Title text="Try editing this file (src/routes/index.svelte) to test live reloading." />
