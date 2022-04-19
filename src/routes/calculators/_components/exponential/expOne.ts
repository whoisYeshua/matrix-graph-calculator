import { multiply, matrix as mathjsMatrix } from 'mathjs'
import { isPositivArray, isNotPositivArray } from './predicates'
import { ExpOneMatrixStepLogger } from './OneMatrixStepLogger'

import type { Matrix as MathjsMatrix } from 'mathjs'
import type { Matrix } from './Model'

interface OutputParameters {
  matrix: MathjsMatrix
  degree: number
  logger: ExpOneMatrixStepLogger
}

const maxDegree = 100

const toFlatArray = (matrix: MathjsMatrix) => matrix.toArray().flat()

const generateExpOfOneMatrixOutput = ({ matrix, degree, logger }: OutputParameters) => {
  const stepByStepArray = logger.getStepsArray()

  if (isNotPositivArray(toFlatArray(matrix))) return { degree: Infinity, stepByStepArray }
  else return { degree, stepByStepArray }
}

export const expOfOneMatrix = (matrixArr: Matrix) => {
  let currentDegree = 1
  const logger = new ExpOneMatrixStepLogger(matrixArr)

  const initialMatrix = mathjsMatrix(matrixArr)
  let prevMatrix = initialMatrix

  while (currentDegree < maxDegree) {
    prevMatrix = multiply(initialMatrix, prevMatrix)
    currentDegree += 1

    logger.addStep({
      resultMatrix: prevMatrix.toArray() as Matrix,
      resultDegree: currentDegree
    })

    const matrixFlatArray = toFlatArray(prevMatrix)
    if (isPositivArray(matrixFlatArray) || isNotPositivArray(matrixFlatArray)) break
  }

  return generateExpOfOneMatrixOutput({ matrix: prevMatrix, degree: currentDegree, logger })
}
