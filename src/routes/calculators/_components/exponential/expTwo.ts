import { multiply, matrix as mathjsMatrix } from 'mathjs'
import { permutationsWithRepetitions } from './permutationsWithRepetitions'
import { isPositivArray } from './predicates'
import { ExpTwoMatrixStepLogger } from './TwoMatrixStepLogger'

import type { Matrix as MathjsMatrix } from 'mathjs'
import type { Matrix, MatrixObject } from './Model'

const maxPermutationLength = 5

const toFlatArray = (matrix: MathjsMatrix) => matrix.toArray().flat()

const createPermutations = (matrixes: MatrixObject[]) => {
  const permutationsArray: MatrixObject[][][] = []

  for (
    let permutationsLength = 2;
    permutationsLength <= maxPermutationLength;
    permutationsLength++
  ) {
    permutationsArray.push(permutationsWithRepetitions(matrixes, permutationsLength))
  }
  return permutationsArray.flat()
}

const permutatinsMultiply = (
  permutationsArray: MatrixObject[][],
  logger: ExpTwoMatrixStepLogger
) => {
  let permutationLength = null

  for (const permutation of permutationsArray) {
    const [initialMatrix, ...restMatrixes] = permutation.map(matrixObject => {
      logger.addMatrixName(matrixObject.name)
      logger.addMatrix(matrixObject.matrix)
      return mathjsMatrix(matrixObject.matrix)
    })

    const multiplyResult = restMatrixes.reduce(
      (acc, current) => multiply(acc, current),
      initialMatrix
    )

    logger.addResultMatrix(multiplyResult.toArray() as Matrix)

    const matrixFlatResultArray = toFlatArray(multiplyResult)
    if (isPositivArray(matrixFlatResultArray)) {
      permutationLength = permutation.length
      break
    }
  }

  return {
    logger,
    permutationLength
  }
}

export const expOfTwoMatrix = (matrixes: MatrixObject[]) => {
  const logger = new ExpTwoMatrixStepLogger()
  const permutationsArray = createPermutations(matrixes)
  const { logger: stepByStepArray, permutationLength: expResult } = permutatinsMultiply(
    permutationsArray,
    logger
  )

  const loggerResult = stepByStepArray.getStepsArray()

  if (expResult) {
    return {
      stepByStepArray: loggerResult,
      expResult
    }
  } else {
    return {
      stepByStepArray: loggerResult,
      expResult: Infinity
    }
  }
}
