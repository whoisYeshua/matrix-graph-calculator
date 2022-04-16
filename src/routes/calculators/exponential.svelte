<script lang="ts">
  import SEO from '../_components/SEO.svelte'
  import MatrixInput from './_components/MatrixInput.svelte'
  import MatrixPast from './_components/MatrixPast.svelte'

  let selectedRowSize: number
  let selectedColumnSize: number

  let matrix: number[][]

  let showContent = 'input'

  // const changeMatrixElementValue = (i: number, j: number, event: Event) => {
  //   const inputValue = parseInt((event.target as HTMLInputElement).value)
  //   matrix[i][j] = inputValue
  //   matrix = matrix
  // }

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
    <div class="tabs -mb-px">
      <button
        class={`tab tab-lifted ${
          showContent === 'input'
            ? 'tab-active [--tab-bg:hsl(var(--b2))]'
            : '[--tab-border-color:transparent]'
        }`}
        on:click={() => (showContent = 'input')}>Input</button>
      <button
        class={`tab tab-lifted ${
          showContent === 'past' ? 'tab-active [--tab-bg:hsl(var(--b2))]' : ''
        }`}
        on:click={() => (showContent = 'past')}>Past</button>
      <div class="tab tab-lifted mr-6 flex-1 cursor-default [--tab-border-color:transparent]" />
    </div>
    <!-- sm -->
    {#if showContent === 'input'}
      <MatrixInput bind:selectedColumnSize bind:selectedRowSize bind:matrix />
    {/if}
    {#if showContent === 'past'}
      <MatrixPast bind:matrix />
    {/if}

    <br />
  </div>
</div>
