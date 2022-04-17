<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  import ErrorAlert from '../ErrorAlert.svelte'
  import MatrixHtml from './MatrixHtml.svelte'

  import { checkMatrixSize, parseStringToMatix } from './matrixPastHelper'
  import type { Matrix } from './Model'

  export let matrix: Matrix

  let value: string = ''
  let errorMessage: string = ''
  const dispatch = createEventDispatcher()

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

  const handleChange = () => {
    matrix = [[]]
    dispatch('matrixChange')
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
        on:change={handleChange} />
    </fieldset>
    <div class="flex justify-end">
      <button class="btn btn-primary btn-sm" type="submit">Apply</button>
    </div>
    <ErrorAlert {errorMessage} />
  </form>

  <MatrixHtml {matrix} />
</div>
