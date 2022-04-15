import { initiateStepByStepMessage } from './messages'
import { createCombinations } from './combination'

export const calculateFrobenius = (argsArr: number[], message: string) => {
  const [l1, l2] = argsArr

  let result = l1 * l2 - l1 - l2
  message = initiateStepByStepMessage(l1, l2, result)

  if (argsArr.length === 2) {
    return { result, message }
  } else {
    const { targetValue, passedMessage } = createCombinations({
      argsArr,
      targetValue: result,
      message
    })

    message = passedMessage
    result = targetValue

    return { result, message }
  }
}
