import {
  commonCombinationMessage,
  combinationStepMessage,
  finalCombinationMessage
} from './messages'

export const combinationSum = function (candidates: number[], target: number) {
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

type ComnbinationsParams = {
  argsArr: number[]
  targetValue: number
  message: string
}

export const createCombinations = ({ argsArr, targetValue, message }: ComnbinationsParams) => {
  message += commonCombinationMessage(argsArr, targetValue)

  const minArgument = Math.min(...argsArr)
  for (targetValue; targetValue >= minArgument; targetValue--) {
    const combinationArr = combinationSum(argsArr, targetValue)
    const shortestCombination = combinationArr.sort((a, b) => a.length - b.length)[0]

    if (shortestCombination && shortestCombination.length > 0) {
      message += combinationStepMessage(shortestCombination, targetValue)
    } else break
  }

  message += finalCombinationMessage(argsArr, targetValue)

  return { targetValue, passedMessage: message }
}
