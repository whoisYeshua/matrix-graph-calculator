export type Matrix = number[][]

export interface MatrixObject {
  name: string
  matrix: Matrix
}

export interface MatrixMultiplyStep {
  result: {
    matrix: Matrix
    degree: number
  }
  multiplier: {
    matrix: Matrix
    degree: number
  }
  initial: {
    matrix: Matrix
    degree: number
  }
}

export interface OneExpStepParameters {
  resultMatrix: Matrix
  resultDegree: number
}

export interface ExpOneMatrixStepByStep {
  addStep({ resultMatrix, resultDegree }: OneExpStepParameters): void
  getStepsArray(): MatrixMultiplyStep[]
}

export interface MatrixMultiplyPermutationsStep {
  multipliableNames: string[]
  multipliableMatrices: Matrix[]
  resultMatrix: Matrix
}

export interface ExpTwoMatrixStepByStep {
  addMatrixName(name: string): void
  addMatrix(matrix: Matrix): void
  addResultMatrix(resultMatrix: Matrix): void
  getStepsArray(): MatrixMultiplyPermutationsStep[]
}
