import type {
  Matrix,
  MatrixMultiplyStep,
  ExpOneMatrixStepByStep,
  OneExpStepParameters
} from './Model'

export class ExpOneMatrixStepLogger implements ExpOneMatrixStepByStep {
  #stepsArray: MatrixMultiplyStep[] = []
  #initialMatrix: Matrix
  #previousStepMatrix: Matrix
  #initialDegree = 1
  #previousStepDegree = 1

  constructor(initialMatrix: Matrix) {
    this.#initialMatrix = initialMatrix
    this.#previousStepMatrix = initialMatrix
  }

  addStep({ resultMatrix, resultDegree }: OneExpStepParameters) {
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
