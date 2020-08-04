<script lang="ts">
  import GlobalHeader from '../components/header/GlobalHeader.svelte'
  import Header from '../components/header/Header.svelte'
  import Image from '../components/image/Image.svelte'
  import Title from '../components/title/Title.svelte'

  import { loggerWithDate } from '../helpers/logger.helper'

  import './index.scss'

  loggerWithDate('Started:')
</script>

<GlobalHeader title="Sapper project template" />

<Header title="{'Great success!'}" />

<Image caption="{'HIGH FIVE!'}" alt="borat" src="assets/img/great-success.png" />

<Title text="Try editing this file (src/routes/index.svelte) to test live reloading." />
