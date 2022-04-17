interface InitialMessageParameters {
  l1: number
  l2: number
  result: number
  manyArguments?: boolean
}

interface Message {
  message: string
  getMessage(): string
  initCombination(args: number[], current: number): void
  stepCombination(args: number[], current: number): void
  finalCombination(args: number[], result: number): void
}

export class FrobeniusMessage implements Message {
  message = ''

  constructor({ l1, l2, result, manyArguments }: InitialMessageParameters) {
    if (manyArguments) this.message = `${l1} * ${l2} - ${l1} - ${l2} = ${result}\n\n`
    else this.message = `F = ${l1} * ${l2} - ${l1} - ${l2} = ${result}`
  }

  initCombination(args: number[], current: number) {
    this.message += `Let's represent integers from ${current} in descending order as the sum of numbers ${args.join(
      ', '
    )} in various combinations:\n\n`
  }

  stepCombination(args: number[], current: number) {
    this.message += `${current} = ${args.join(' + ')}\n\n`
  }

  finalCombination(args: number[], result: number) {
    this.message += `${result} does not unfold => F(${args.join(', ')}) = ${result}`
  }

  getMessage() {
    return this.message
  }
}
