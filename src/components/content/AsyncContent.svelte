<script lang="ts">
  export let action: () => Promise<any[]>
</script>

{#await action()}
  ...
{:then items}
  <slot {items} />
{/await}
