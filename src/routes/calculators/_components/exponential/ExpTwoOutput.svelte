<script lang="ts">
  import StepByStep from '../StepByStep.svelte'
  import Var from '../Var.svelte'
  import { isNotPositivArray } from './predicates'
  import MatrixHtml from './MatrixHtml.svelte'

  import { expOfTwoMatrix } from './expTwo'

  import type { MatrixObject, MatrixMultiplyPermutationsStep } from './Model'

  export let matrixes: MatrixObject[]
  export const resetAnswer = () => {
    answer = ''
  }

  let answer: string = ''
  let stepByStepArray: MatrixMultiplyPermutationsStep[]

  $: isNotAcceptableMatrixes = matrixes.some(matrixObject =>
    isNotPositivArray(matrixObject.matrix.flat())
  )

  const calculateExp = () => {
    const { stepByStepArray: gettedArr, expResult } = expOfTwoMatrix(matrixes)
    if (expResult === Infinity) answer = `>5 or =Infinity`
    else answer = `= ${expResult}`
    console.log('RES:', expResult)
    console.log('Array:\n', stepByStepArray)
    stepByStepArray = gettedArr
  }
</script>

<div class="mt-4 flex gap-1">
  <button
    class="btn btn-primary btn-sm"
    disabled={isNotAcceptableMatrixes}
    title="Calculate Exp"
    on:click={calculateExp}>
    Exp &lbrace;{matrixes[0].name}, {matrixes[1].name}&rbrace;
  </button>
  <output class="text-center font-semibold"> {answer} </output>
</div>

{#if answer}
  <StepByStep>
    {#if stepByStepArray}
      {#each stepByStepArray as { multipliableMatrices, multipliableNames, resultMatrix }, i (i)}
        <span>
          {#each multipliableNames as matrixName, i (i)}
            <Var>{matrixName}</Var>
            {#if i + 1 !== multipliableNames.length}<span>×&nbsp;</span>{/if}
          {/each}
        </span>
        <div class="mb-4 flex items-center gap-4 overflow-x-auto">
          <MatrixHtml matrix={resultMatrix} />
          <span>=</span>
          {#each multipliableMatrices as matrix, i (i)}
            <MatrixHtml {matrix} />
            {#if i + 1 !== multipliableMatrices.length}<span>×</span>{/if}
          {/each}
        </div>
      {/each}
    {/if}
  </StepByStep>
{/if}
