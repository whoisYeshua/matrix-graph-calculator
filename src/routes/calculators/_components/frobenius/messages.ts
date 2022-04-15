export const initiateStepByStepMessage = (l1: number, l2: number, res: number) => {
  return `${l1} * ${l2} - ${l1} - ${l2} = ${res}\n\n`
}

export const commonCombinationMessage = (args: number[], current: number) => {
  return `Let's represent integers from ${current} in descending order as the sum of numbers ${args.join(
    ', '
  )} in various combinations:\n\n`
}

export const combinationStepMessage = (args: number[], current: number) => {
  return `${current} = ${args.join(' + ')}\n\n`
}

export const finalCombinationMessage = (args: number[], res: number) => {
  return `${res} does not unfold => F(${args.join(', ')}) = ${res}`
}
