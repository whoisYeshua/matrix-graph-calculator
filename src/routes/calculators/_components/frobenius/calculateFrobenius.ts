import { FrobeniusMessage } from './FrobeniusMessage'
import { createCombinations } from './combination'

export const calculateFrobenius = (argsArr: number[]) => {
  const [l1, l2] = argsArr

  const result = l1 * l2 - l1 - l2

  if (argsArr.length === 2) {
    const message = new FrobeniusMessage({ l1, l2, result }).getMessage()
    return { result, message }
  } else {
    const messageObject = new FrobeniusMessage({ l1, l2, result, manyArguments: true })
    const { targetValue, message } = createCombinations({
      argsArr,
      targetValue: result,
      messageObject
    })

    return { result: targetValue, message }
  }
}
