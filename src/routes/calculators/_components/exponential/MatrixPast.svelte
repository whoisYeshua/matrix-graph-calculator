<script lang="ts">
  import ErrorAlert from '../ErrorAlert.svelte'

  import { checkMatrixSize, parseStringToMatix } from './matrixPastHelper'
  import type { Matrix } from './Model'

  export let matrix: Matrix

  let value: string = ''
  let errorMessage: string = ''

  matrix = [[]]

  const handleSubmission = () => {
    try {
      let temperaryMatrix = parseStringToMatix(value)
      checkMatrixSize(temperaryMatrix)

      matrix = temperaryMatrix
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
