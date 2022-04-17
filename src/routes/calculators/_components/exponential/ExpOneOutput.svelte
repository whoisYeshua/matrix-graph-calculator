<script lang="ts">
  import StepByStep from '../StepByStep.svelte'
  import Var from '../Var.svelte'
  import MatrixHtml from './MatrixHtml.svelte'

  import { isNotPositivArray } from './predicates'
  import { expOfOneMatrix } from './exp'

  import type { Matrix, MatrixmultiplyStep } from './Model'

  export let matrixName: string
  export let matrix: Matrix
  export const resetAnswer = () => {
    answer = ''
  }

  let answer: string = ''
  let stepByStepArray: MatrixmultiplyStep[]

  $: isNotAcceptableMatrix = isNotPositivArray(matrix.flat())

  const calculateExp = () => {
    const { degree, stepByStepArray: gettedArr } = expOfOneMatrix(matrix)

    if (degree === 100) answer = `>= 100 or = Infinit`
    else if (degree === Infinity) answer = `= Infinit`
    else answer = `= ${degree}`

    stepByStepArray = gettedArr
  }
</script>

<div class="mt-4 flex gap-1">
  <button
    class="btn btn-primary btn-sm"
    disabled={isNotAcceptableMatrix}
    title="Calculate Exp"
    on:click={calculateExp}>
    Exp {matrixName}
  </button>
  <output class="text-center font-semibold"> {answer} </output>
</div>

<StepByStep>
  {#if stepByStepArray}
    {#each stepByStepArray as { result, multiplier, initial }, i (i)}
      <span>
        <Var sup={result.degree}>{matrixName}</Var> =
        <Var sup={multiplier.degree}>{matrixName}</Var> ×
        <Var sup={initial.degree}>{matrixName}</Var>
      </span>

      <div class="mb-4 flex items-center gap-4 overflow-x-auto">
        <MatrixHtml matrix={result.matrix} />
        <span>=</span>
        <MatrixHtml matrix={multiplier.matrix} />
        <span>×</span>
        <MatrixHtml matrix={initial.matrix} />
      </div>
    {/each}
  {/if}
</StepByStep>
