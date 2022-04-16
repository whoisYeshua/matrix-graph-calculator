<script lang="ts">
  export let matrix: number[][]
  export let selectedRowSize: number = 2
  export let selectedColumnSize: number = 2

  let acceptableRowSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10]
  let acceptableColumnSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10]

  const createMatrixRow = (columnSize: number, fillValue: number = 0): number[] =>
    new Array(columnSize).fill(fillValue)
  const createMatrix = (rowSize: number, row: number[]): number[][] =>
    [...new Array(rowSize)].map(_ => [...row])

  const calculateRowSizeChange = () => {
    const rowDiff = selectedRowSize - matrix.length
    if (rowDiff < 0) {
      matrix = matrix.slice(0, rowDiff)
    } else {
      matrix = matrix.concat(createMatrix(rowDiff, createMatrixRow(selectedColumnSize)))
    }
  }

  const calculateColumnSizeChange = () => {
    const columnDiff = selectedColumnSize - matrix[0].length
    if (columnDiff < 0) {
      matrix = matrix.map(row => row.slice(0, columnDiff))
    } else {
      matrix = matrix.map(row => row.concat(createMatrixRow(columnDiff)))
    }
  }

  const handleReset = () => {
    matrix = matrix.map(row => row.map(el => (el = 0)))
  }

  matrix = createMatrix(selectedRowSize, createMatrixRow(selectedColumnSize))
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
      bind:value={selectedRowSize}
      on:change={calculateRowSizeChange}>
      {#each acceptableRowSizes as size}
        <option>{size}</option>
      {/each}
    </select>
    ×
    <select
      class="select select-bordered select-sm ml-1 w-full max-w-[4rem] "
      bind:value={selectedColumnSize}
      on:change={calculateColumnSizeChange}>
      {#each acceptableColumnSizes as size}
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
