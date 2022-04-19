<script lang="ts">
  import type { log } from 'mathjs'
  import type { Matrix } from './Model'
  export let matrix: Matrix
</script>

<div
  class="mt-2 flex w-fit flex-col gap-2 rounded-[0.5rem/1.5rem] border-2 border-x-current border-y-transparent p-2"
  aria-label="Matrix">
  {#if matrix}
    {#each matrix as row, i}
      <div class="flex gap-2" aria-label={`Row ${i + 1}`}>
        {#each row as elementValue, j}
          {@const element = `a${i + 1}_${j + 1}`}
          <span class="element" aria-label={element} title={element}>{elementValue}</span>
        {/each}
      </div>
    {/each}
  {/if}
</div>

<style>
  .element {
    @apply w-4 truncate text-center;
  }
</style>
