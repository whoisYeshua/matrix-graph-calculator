<script lang="ts">
  import SEO from '../_components/SEO.svelte'

  let answer: string = ''
  let frobeniusInputArguments: string
  let errorMessage: string = ''
  let stepByStepMessage: string = ''

  const initiateStepByStepMessage = (l1: number, l2: number, res: number) => {
    stepByStepMessage = `${l1} * ${l2} - ${l1} - ${l2} = ${res}\n\n`
  }

  const addCommonCombinationMessage = (args: number[], current: number) => {
    stepByStepMessage += `Let's represent integers from ${current} in descending order as the sum of numbers ${args.join(
      ', '
    )} in various combinations:\n\n`
  }

  const addSCombinationStepMessage = (args: number[], current: number) => {
    stepByStepMessage += `${current} = ${args.join(' + ')}\n\n`
  }

  const addFinalCombinationMessage = (args: number[], res: number) => {
    stepByStepMessage += `${res} does not unfold => F(${args.join(', ')}) = ${res}`
  }

  const combinationSum = function (candidates: number[], target: number) {
    const combos: number[][] = []
    const buffer: number[] = []

    const helper = (i: number, residualTarget: number) => {
      if (residualTarget === 0) {
        // the sum of the elements in our buffer amount to the original target
        combos.push([...buffer])
        return
      }
      // the sum of the elements in our buffer exceed the original target or we've exhausted our candidates
      if (residualTarget < 0 || i === candidates.length) return

      buffer.push(candidates[i])
      helper(i, residualTarget - candidates[i])
      buffer.pop()
      helper(i + 1, residualTarget)
    }

    helper(0, target)

    return combos
  }

  const createCombinations = (argsArr: number[], initialValue: number) => {
    addCommonCombinationMessage(argsArr, initialValue)

    const minArgument = Math.min(...argsArr)
    for (initialValue; initialValue >= minArgument; initialValue--) {
      const combinationArr = combinationSum(argsArr, initialValue)
      const shortestCombination = combinationArr.sort((a, b) => a.length - b.length)[0]

      if (shortestCombination && shortestCombination.length > 0) {
        addSCombinationStepMessage(shortestCombination, initialValue)
      } else break
    }

    addFinalCombinationMessage(argsArr, initialValue)

    return initialValue
  }

  const calculateFrobenius = (argsArr: number[]) => {
    const [l1, l2] = argsArr

    const res = l1 * l2 - l1 - l2
    initiateStepByStepMessage(l1, l2, res)

    if (argsArr.length === 2) {
      return res
    } else {
      return createCombinations(argsArr, res)
    }
  }

  const handleSubmission = () => {
    try {
      const formattedArguments = frobeniusInputArguments
        .split(',')
        .filter(el => !el.match(/^\s*$/))
        .map(argument => {
          let integer = parseInt(argument)
          if (Number.isNaN(integer)) throw Error(`Argrument "${argument.trim()}" is not a number`)
          return integer
        })
        .sort((a, b) => a - b)

      if (formattedArguments.length < 2) throw Error('You should past minimum 2 arguments')

      answer = calculateFrobenius(formattedArguments).toString()
      errorMessage = ''
    } catch (error) {
      if (error instanceof Error) errorMessage = error.message
    }
  }
</script>

<SEO title="Frobenius" desc="Calculate Frobenius number" />

<div class="prose w-full max-w-4xl flex-grow">
  <h1>Frobenius</h1>
  <p>
    Calculate Frobenius number
    <br />
    <var>F</var>(<var>l<sub>1</sub></var>, <var>l<sub>2</sub></var>)=<var>l<sub>1</sub></var><var
      >l<sub>2</sub></var>
    - <var>l<sub>1</sub></var>
    - <var>l<sub>2</sub></var>
  </p>

  <h2>Example with 2 arguments</h2>
  <p><var>F</var>(2, 3)=2*3 - 2 - 3 = 1</p>

  <h2>Example with 3 and more arguments</h2>
  <p>
    <var>F</var>(4, 5, 6)
    <br />
    4*5 - 4 - 5 = 11
    <br />
    Let's represent integers from 11 in descending order as the sum of numbers 4, 5, 6 in various combinations:
    <br />
    11 = 5 + 6
    <br />
    10 = 4 + 6
    <br />
    9 = 4 + 5
    <br />
    8 = 4 + 4
    <br />
    7 does not unfold => F(4, 5, 6) = 7
  </p>

  <h2>Calculator</h2>
  <form autocomplete="off" on:submit|preventDefault={handleSubmission} class="not-prose">
    <div class="flex gap-1 max-w-sm">
      <label for="frobenius-input" class="italic">F</label>(
      <input
        id="frobenius-input"
        bind:value={frobeniusInputArguments}
        on:change={() => (answer = '')}
        type="text"
        required
        input-mode="number"
        placeholder="Past here arguments with comma"
        title="Fill this field. Example: 2, 3"
        class="input input-bordered input-sm w-full" />
      ) <button class="btn btn-sm btn-primary" type="submit">=</button>
      <output class="font-semibold min-w-[1.5rem] text-center">{answer}</output>
    </div>
    {#if errorMessage}
      <div class="alert alert-warning shadow-lg mt-4 max-w-sm">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{errorMessage}</span>
        </div>
      </div>
    {/if}
  </form>

  {#if answer}
    <div
      tabindex="0"
      class="mt-6 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box max-w-sm not-prose">
      <div class="collapse-title text-xl font-medium">Step by step</div>
      <div class="collapse-content">
        <p class="whitespace-pre-line">{stepByStepMessage}</p>
      </div>
    </div>
  {/if}
</div>
