<script lang="ts">
  import SEO from '../_components/SEO.svelte'
  import Matrix from './_components/exponential/Matrix.svelte'

  import ExpTwoOutput from './_components/exponential/ExpTwoOutput.svelte'
  import type { MatrixObject } from './_components/exponential/Model'

  let matrixes: MatrixObject[] = [
    {
      name: 'A',
      matrix: [[]]
    }
  ]

  let outputComponent: ExpTwoOutput

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

  const handleMatrixChange = () => {
    outputComponent.resetAnswer()
  }
</script>

<SEO title="Matrix Exponential" desc="Calculate Matrix Exponential" />

<div class="prose w-full max-w-4xl flex-grow">
  <h1>Matrix Exponential</h1>

  <h2>Calculator</h2>
  {#each matrixes as { name, matrix } (name)}
    <Matrix matrixName={name} bind:matrix on:matrixChange={handleMatrixChange} />
  {/each}

  <div class="not-prose mt-8">
    {#if !matrixes[1]}
      <button class="btn btn-primary btn-sm" on:click={handleAddSecondMatrix}>Add matrix B</button>
    {:else}
      <button class="btn btn-error btn-sm" on:click={handleRemoveSecondMatrix}>
        Remove matrix B
      </button>
      <div class="divider max-w-sm" />
      <ExpTwoOutput {matrixes} bind:this={outputComponent} />
    {/if}
  </div>
</div>
