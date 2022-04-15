<script lang="ts">
  import ErrorAlert from './ErrorAlert.svelte'

  export let matrix: number[][]

  let value: string = ''
  let errorMessage: string = ''

  const handleSubmission = () => {
    try {
      matrix = value.split('\n').map(row =>
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
      console.log(matrix)
    } catch (error) {
      if (error instanceof Error) errorMessage = error.message
    }
  }
</script>

<form on:submit|preventDefault={handleSubmission} class="flex max-w-sm flex-col gap-2">
  <fieldset class="form-control">
    <label class="label w-fit" for="matrix-past">
      <span class="label-text">Past adjacency matrix</span>
    </label>
    <textarea
      id="matrix-past"
      class="textarea textarea-bordered"
      placeholder="Example:
0, 1, 0, 0,
0, 1, 0, 0,
0, 0, 1, 0,
0, 0, 0, 1,"
      rows="5"
      cols="20"
      required
      bind:value />
  </fieldset>
  <div class="flex justify-end">
    <button class="btn btn-primary btn-sm" type="submit">Apply</button>
  </div>
  <ErrorAlert {errorMessage} />
</form>
