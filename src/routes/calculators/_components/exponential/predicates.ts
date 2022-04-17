export const isNotPositivArray = (array: number[]) => array.every(el => el === 0)

export const isPositivArray = (array: number[]) => array.every(el => el !== 0)
