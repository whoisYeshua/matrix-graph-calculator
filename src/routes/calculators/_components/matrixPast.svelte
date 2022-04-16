<script lang="ts">
  import ErrorAlert from './ErrorAlert.svelte'

  export let matrix: number[][]

  let value: string = ''
  let errorMessage: string = ''

  matrix = [[]]

  const checkColumnSize = (matrix: number[][]) => {
    const firstColumnSize = matrix[0].length
    matrix.forEach((row, index) => {
      const currentColumnSize = row.length
      if (currentColumnSize < 2) {
        throw new Error(
          `The column size should be 2 or greater, problem row is ${index + 1}: [${row.toString()}]`
        )
      }
      if (currentColumnSize > 10) {
        throw new Error(
          `The column size should be 10 or smaller, problem row is ${
            index + 1
          }: [${row.toString()}]`
        )
      }
      if (currentColumnSize !== firstColumnSize)
        throw new Error(
          `The column size should be identical for all rows, problem row is ${
            index + 1
          }: [${row.toString()}] not equal to the first row size`
        )
    })
    return true
  }

  const checkMatrixSize = (matrix: number[][]) => {
    const rowSize = matrix.length
    if (rowSize < 2)
      throw new Error(`The row size should be 2 or greater, current size is ${rowSize}`)
    if (rowSize > 10)
      throw new Error(`The row size should be 10 or smaller, current size is ${rowSize}`)
    checkColumnSize(matrix)
    return true
  }

  const handleSubmission = () => {
    try {
      let temperaryMatrix = value
        .split('\n')
        .filter(row => row.length > 0)
        .map(row =>
          row
            .split(',')
            .filter(el => !el.match(/^\s*$/))
            .map(el => {
              const integer = parseInt(el)
              if (Number.isNaN(integer))
                throw new Error(`You should use only numbers, problem part "${el}"`)
              return integer
            })
        )

      console.log(temperaryMatrix)

      if (checkMatrixSize(temperaryMatrix)) matrix = temperaryMatrix
      errorMessage = ''
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message
      }
    }
  }
</script>

<div class="rounded-box max-w-sm border border-base-300 bg-base-200 p-4">
  <form on:submit|preventDefault={handleSubmission} class="flex flex-col gap-2">
    <fieldset class="form-control">
      <label class="label w-fit" for="matrix-past">
        <span class="label-text">Past adjacency matrix</span>
      </label>
      <textarea
        id="matrix-past"
        class="textarea textarea-bordered placeholder:text-base-content/50"
        placeholder="Example:
  0, 1, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1,"
        rows="5"
        cols="20"
        required
        bind:value
        on:change={() => (matrix = [[]])} />
    </fieldset>
    <div class="flex justify-end">
      <button class="btn btn-primary btn-sm" type="submit">Apply</button>
    </div>
    <ErrorAlert {errorMessage} />
  </form>
  <div
    class="mt-4 flex w-fit flex-col gap-2 rounded-[0.5rem/1.5rem] border-2 border-x-current border-y-transparent p-2"
    aria-label="Matrix">
    {#if matrix}
      {#each matrix as row, i}
        <div class="flex gap-2" aria-label={`Row ${i + 1}`}>
          {#each row as elementValue, j}
            {@const element = `a${i + 1}_${j + 1}`}
            <span class="w-4 text-center" aria-label={element} title={element}>{elementValue}</span>
          {/each}
        </div>
      {/each}
    {/if}
  </div>
</div>
