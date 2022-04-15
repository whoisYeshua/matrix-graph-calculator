export const formateInputArguments = (inputArguments: string) =>
  inputArguments
    .split(',')
    .filter(argument => !argument.match(/^\s*$/))
    .map(argument => {
      const integer = parseInt(argument)
      if (Number.isNaN(integer)) throw Error(`Argrument "${argument.trim()}" is not a number`)
      return integer
    })
    .sort((a, b) => a - b)
