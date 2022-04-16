<script lang="ts">
  import {
    createMatrixRow,
    createMatrix,
    decreaseMatrix,
    increaseMatrix,
    setMatrixElementsToZero
  } from './matrixInputHelper'
  import type { Matrix } from './Model'

  export let matrix: Matrix
  export let selectedMatrixSize: number = 2

  let acceptableMatrixSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10]

  const calculateMatrixSizeChange = () => {
    const currentMatrixSize = matrix.length
    const sizeDiff = selectedMatrixSize - currentMatrixSize

    if (sizeDiff < 0) {
      matrix = decreaseMatrix(matrix, sizeDiff)
    } else {
      matrix = increaseMatrix(matrix, sizeDiff)
    }
  }

  const handleReset = () => {
    matrix = setMatrixElementsToZero(matrix)
  }

  matrix = createMatrix(selectedMatrixSize, createMatrixRow(selectedMatrixSize))
</script>

<div
  class="rounded-b-box rounded-tr-box  overflow-x-auto border border-base-300 bg-base-200 p-4 sm:w-96 sm:min-w-fit ">
  <div class="w-full">
    <label class="label w-fit" for="matrix-row-select">
      <span class="label-text">Pick matrix size:</span>
    </label>
    <select
      id="matrix-row-select"
      class="select select-bordered select-sm w-full max-w-[4rem]"
      bind:value={selectedMatrixSize}
      on:change={calculateMatrixSizeChange}>
      {#each acceptableMatrixSizes as size}
        <option>{size}</option>
      {/each}
    </select>
  </div>
  <form class="mt-8">
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
                class="input input-bordered input-sm w-full min-w-[2.5rem] max-w-[4rem]"
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
</div>
