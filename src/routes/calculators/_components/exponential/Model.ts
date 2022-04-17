export type Matrix = number[][]

export interface MatrixmultiplyStep {
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

export interface StepParameters {
  resultMatrix: Matrix
  resultDegree: number
}

export interface OneMatrixStepByStep {
  addStep({ resultMatrix, resultDegree }: StepParameters): void
  getStepsArray(): MatrixmultiplyStep[]
}
