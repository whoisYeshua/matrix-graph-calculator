<script lang="ts">
  import SEO from '../_components/SEO.svelte'
  import MatrixInput from './_components/MatrixInput.svelte'
  import MatrixPast from './_components/MatrixPast.svelte'

  let selectedRowSize: number
  let selectedColumnSize: number

  let matrix: number[][]

  let showContent = 'input'

  const changeMatrixElementValue = (i: number, j: number, event: Event) => {
    const inputValue = parseInt((event.target as HTMLInputElement).value)
    matrix[i][j] = inputValue
    matrix = matrix
  }

  const handleReset = () => {
    matrix = matrix.map(row => row.map(el => (el = 0)))
  }
</script>

<SEO title="Matrix Exponential" desc="Calculate Matrix Exponential" />

<div class="prose w-full max-w-4xl flex-grow">
  <h1>Matrix Exponential</h1>

  <h2>Calculator</h2>
  selectedRowSize = {selectedRowSize}
  selectedColumnSize = {selectedColumnSize}
  matrix: {matrix}
  <div>
    <div class="tabs">
      <button
        class="tab tab-lifted"
        class:tab-active={showContent === 'input'}
        on:click={() => (showContent = 'input')}>Input</button>
      <button
        class="tab tab-lifted"
        class:tab-active={showContent === 'past'}
        on:click={() => (showContent = 'past')}>Past</button>
    </div>
    <!-- sm -->
    {#if showContent === 'input'}
      <MatrixInput bind:selectedColumnSize bind:selectedRowSize bind:matrix />
    {/if}
    {#if showContent === 'past'}
      <MatrixPast bind:matrix />
    {/if}
    <br />

    <form>
      <div
        class="flex w-fit flex-col gap-2 rounded-[0.5rem/1.5rem] border-2 border-x-current border-y-transparent p-2"
        aria-label="Matrix">
        {#if matrix}
          {#each matrix as row, i}
            <div class="flex gap-2" aria-label={`Row ${i + 1}`}>
              {#each row as elementValue, j}
                {@const element = `a${i + 1}_${j + 1}`}
                <input
                  type="number"
                  class="input input-bordered input-sm w-full max-w-[4rem]"
                  inputmode="numeric"
                  min="0"
                  aria-label={element}
                  title={element}
                  name={element}
                  bind:value={elementValue} />
              {/each}
            </div>
          {/each}
        {/if}
      </div>
      <button type="button" class="btn btn-active btn-secondary btn-sm mt-2" on:click={handleReset}>
        Reset
      </button>
    </form>
    <br />
  </div>
</div>
