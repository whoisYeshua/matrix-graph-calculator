<script lang="ts">
  import SEO from '../_components/SEO.svelte'
  import { formateInputArguments } from './_components/frobenius/formateInputArguments'
  import { calculateFrobenius } from './_components/frobenius/calculateFrobenius'

  let answer: string = ''
  let frobeniusInputArguments: string
  let errorMessage: string = ''
  let stepByStepMessage: string = ''

  const handleSubmission = () => {
    try {
      const formattedArguments = formateInputArguments(frobeniusInputArguments)

      if (formattedArguments.length < 2) throw Error('You should past minimum 2 arguments')

      const { result, message } = calculateFrobenius(formattedArguments, stepByStepMessage)
      answer = result.toString()
      stepByStepMessage = message

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

  <h2>Calculator</h2>
  <form class="not-prose" autocomplete="off" on:submit|preventDefault={handleSubmission}>
    <div class="flex max-w-sm gap-1">
      <label class="italic" for="frobenius-input">F</label>(
      <input
        class="input input-bordered input-sm w-full"
        id="frobenius-input"
        type="text"
        inputmode="decimal"
        placeholder="Past here arguments with comma"
        title="Fill this field. Example: 2, 3"
        required
        bind:value={frobeniusInputArguments}
        on:change={() => (answer = '')} />
      ) <button class="btn btn-primary btn-sm" type="submit">=</button>
      <output class="min-w-[1.5rem] text-center font-semibold">{answer}</output>
    </div>
    {#if errorMessage}
      <div class="alert alert-warning mt-4 max-w-sm shadow-lg">
        <div>
          <svg
            class="h-6 w-6 flex-shrink-0 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
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
      class="not-prose collapse-arrow collapse rounded-box mt-6 max-w-sm border border-base-300 bg-base-100"
      tabindex="0">
      <div class="collapse-title text-xl font-medium">Step by step</div>
      <div class="collapse-content">
        <p class="whitespace-pre-line">{stepByStepMessage}</p>
      </div>
    </div>
  {/if}

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
</div>
