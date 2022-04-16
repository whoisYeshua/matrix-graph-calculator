import type { Matrix } from './Model'

export const createMatrixRow = (columnSize: number, fillValue = 0): number[] =>
  new Array(columnSize).fill(fillValue)
export const createMatrix = (rowSize: number, row: number[]): Matrix =>
  [...new Array(rowSize)].map(() => [...row])

export const increaseMatrix = (matrix: Matrix, increaseSize: number) => {
  const newMatrixSize = matrix.length + increaseSize

  return matrix
    .map(row => row.concat(createMatrixRow(increaseSize)))
    .concat(createMatrix(increaseSize, createMatrixRow(newMatrixSize)))
}

export const decreaseMatrix = (matrix: Matrix, decreaseSize: number) =>
  matrix.slice(0, decreaseSize).map(row => row.slice(0, decreaseSize))

export const setMatrixElementsToZero = (matrix: Matrix) => matrix.map(row => row.map(() => 0))
