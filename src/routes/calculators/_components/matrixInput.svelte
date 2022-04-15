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

  matrix = createMatrix(selectedRowSize, createMatrixRow(selectedColumnSize))
</script>

<div class="w-full max-w-sm">
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
    class="select select-bordered select-sm ml-1 w-full max-w-[4rem]"
    bind:value={selectedColumnSize}
    on:change={calculateColumnSizeChange}>
    {#each acceptableColumnSizes as size}
      <option>{size}</option>
    {/each}
  </select>
</div>
