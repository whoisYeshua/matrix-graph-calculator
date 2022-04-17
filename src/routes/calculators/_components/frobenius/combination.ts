import type { FrobeniusMessage } from './FrobeniusMessage'

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
  messageObject: FrobeniusMessage
}

export const createCombinations = ({
  argsArr,
  targetValue,
  messageObject
}: ComnbinationsParams) => {
  messageObject.initCombination(argsArr, targetValue)

  const minArgument = Math.min(...argsArr)
  for (targetValue; targetValue >= minArgument; targetValue--) {
    const combinationArr = combinationSum(argsArr, targetValue)
    const shortestCombination = combinationArr.sort((a, b) => a.length - b.length)[0]

    if (shortestCombination && shortestCombination.length > 0) {
      messageObject.stepCombination(shortestCombination, targetValue)
    } else break
  }

  messageObject.finalCombination(argsArr, targetValue)

  return { targetValue, message: messageObject.getMessage() }
}
