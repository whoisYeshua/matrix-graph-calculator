<script lang="ts">
  import MatrixInput from './MatrixInput.svelte'
  import MatrixPast from './MatrixPast.svelte'
  import ExpOneOutput from './ExpOneOutput.svelte'

  import type { Matrix } from './Model'

  export let matrixName = 'A'
  export let matrix: Matrix

  let showContent = 'input'
  let outputComponent: ExpOneOutput

  const handleMatrixChange = () => {
    outputComponent.resetAnswer()
  }
</script>

<div>
  <h3>Matrix {matrixName}</h3>
  <div class="not-prose tabs -mb-px">
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

  {#if showContent === 'input'}
    <MatrixInput bind:matrix on:matrixChange={handleMatrixChange} />
  {/if}
  {#if showContent === 'past'}
    <MatrixPast bind:matrix on:matrixChange={handleMatrixChange} />
  {/if}
  <ExpOneOutput {matrixName} {matrix} bind:this={outputComponent} />
</div>
