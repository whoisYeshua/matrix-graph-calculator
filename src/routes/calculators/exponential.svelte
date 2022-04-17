<script lang="ts">
  import SEO from '../_components/SEO.svelte'
  import Matrix from './_components/exponential/Matrix.svelte'

  let matrixes = [
    {
      name: 'A',
      matrix: [[]]
    }
  ]

  const handleAddSecondMatrix = () => {
    matrixes.push({
      name: 'B',
      matrix: [[]]
    })
    matrixes = matrixes
  }

  const handleRemoveSecondMatrix = () => {
    matrixes = matrixes.slice(0, 1)
  }

  let matrix: number[][]
</script>

<SEO title="Matrix Exponential" desc="Calculate Matrix Exponential" />

<div class="prose w-full max-w-4xl flex-grow">
  <h1>Matrix Exponential</h1>

  <h2>Calculator</h2>
  matrixA: {matrixes[0].matrix}
  matrixB: {matrixes[1]?.matrix}
  {#each matrixes as { name, matrix } (name)}
    <Matrix matrixName={name} bind:matrix />
  {/each}

  <div class="divider max-w-sm" />

  <div class="not-prose flex gap-4">
    {#if !matrixes[1]}
      <button class="btn btn-primary btn-sm" on:click={handleAddSecondMatrix}>Add matrix B</button>
    {:else}
      <button class="btn btn-primary btn-sm">
        Exp &lbrace;{matrixes[0].name}, {matrixes[1].name}&rbrace;
      </button>
      <button class="btn btn-secondary btn-sm" on:click={handleRemoveSecondMatrix}>
        Remove matrix B
      </button>
    {/if}
  </div>
</div>
