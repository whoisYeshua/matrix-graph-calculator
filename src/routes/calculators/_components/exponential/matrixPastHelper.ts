import type { Matrix } from './Model'

const checkColumnSize = (matrix: Matrix, rowSize: number) => {
  const firstColumnSize = matrix[0].length

  matrix.forEach((row, index) => {
    const currentColumnSize = row.length

    if (currentColumnSize !== rowSize) {
      throw new Error(
        `The column size should equal to row size (${rowSize}), problem row is ${
          index + 1
        }: [${row.toString()}]`
      )
    }
    if (currentColumnSize < 2) {
      throw new Error(
        `The column size should be 2 or greater, problem row is ${index + 1}: [${row.toString()}]`
      )
    }
    if (currentColumnSize > 10) {
      throw new Error(
        `The column size should be 10 or smaller, problem row is ${index + 1}: [${row.toString()}]`
      )
    }
    if (currentColumnSize !== firstColumnSize)
      throw new Error(
        `The column size should be identical for all rows, problem row is ${
          index + 1
        }: [${row.toString()}] not equal to the first row size`
      )
  })
}

export const checkMatrixSize = (matrix: Matrix) => {
  const rowSize = matrix.length

  if (rowSize < 2)
    throw new Error(`The row size should be 2 or greater, current size is ${rowSize}`)
  if (rowSize > 10)
    throw new Error(`The row size should be 10 or smaller, current size is ${rowSize}`)

  checkColumnSize(matrix, rowSize)
}

const notEmptyString = (str: string) => str.length > 0

const fullSpaceRegex = /^\s*$/

const notSpacesString = (str: string) => !str.match(fullSpaceRegex)

const stringToInteger = (str: string) => {
  const integer = parseInt(str)

  if (Number.isNaN(integer)) throw new Error(`You should use only numbers, problem part "${str}"`)

  return integer
}

const parseStringToRow = (rowString: string) =>
  rowString.split(',').filter(notSpacesString).map(stringToInteger)

export const parseStringToMatix = (matrixString: string) =>
  matrixString.split('\n').filter(notEmptyString).map(parseStringToRow)
