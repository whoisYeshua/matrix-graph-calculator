<script lang="ts">
  export let sup: number | string = ''
  export let sub: number | string = ''
</script>

<var>
  <slot />{#if sup}<sup>{sup}</sup>{/if}{#if sub}<sub>{sub}</sub>{/if}
</var>
