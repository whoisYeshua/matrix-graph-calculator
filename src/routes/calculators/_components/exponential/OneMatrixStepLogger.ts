import type { Matrix, MatrixmultiplyStep, OneMatrixStepByStep, StepParameters } from './Model'

export class OneMatrixStepLogger implements OneMatrixStepByStep {
  #stepsArray: MatrixmultiplyStep[] = []
  #initialMatrix: Matrix
  #previousStepMatrix: Matrix
  #initialDegree = 1
  #previousStepDegree = 1

  constructor(initialMatrix: Matrix) {
    this.#initialMatrix = initialMatrix
    this.#previousStepMatrix = initialMatrix
  }

  addStep({ resultMatrix, resultDegree }: StepParameters) {
    if (resultDegree > 5) this.#deleteUnnecessaryStep()
    this.#stepsArray.push({
      result: {
        matrix: resultMatrix,
        degree: resultDegree
      },
      multiplier: {
        matrix: this.#previousStepMatrix,
        degree: this.#previousStepDegree
      },
      initial: {
        matrix: this.#initialMatrix,
        degree: this.#initialDegree
      }
    })
    this.#previousStepMatrix = resultMatrix
    this.#previousStepDegree = resultDegree
  }

  #deleteUnnecessaryStep() {
    this.#stepsArray.splice(2, 1)
  }

  getStepsArray() {
    return this.#stepsArray
  }
}
