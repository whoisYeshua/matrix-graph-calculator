import type { Matrix, MatrixMultiplyPermutationsStep, ExpTwoMatrixStepByStep } from './Model'

export class ExpTwoMatrixStepLogger implements ExpTwoMatrixStepByStep {
  #stepsArray: MatrixMultiplyPermutationsStep[] = []
  #multipliableMatricesAcc: Matrix[] = []
  #multipliableNamesAcc: string[] = []

  addMatrixName(name: string) {
    this.#multipliableNamesAcc.push(name)
  }

  addMatrix(matrix: Matrix) {
    this.#multipliableMatricesAcc.push(matrix)
  }

  addResultMatrix(resultMatrix: Matrix) {
    const stepObject = this.#createStepObject(resultMatrix)
    this.#stepsArray.push(stepObject)
    this.#clearAccs()
  }

  #createStepObject(resultMatrix: Matrix): MatrixMultiplyPermutationsStep {
    return {
      multipliableNames: this.#multipliableNamesAcc,
      multipliableMatrices: this.#multipliableMatricesAcc,
      resultMatrix
    }
  }

  #clearAccs() {
    this.#multipliableNamesAcc = []
    this.#multipliableMatricesAcc = []
  }

  getStepsArray() {
    return this.#stepsArray
  }
}
