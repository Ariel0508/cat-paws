export function currency (num) {
  const n = parseInt(num, 10)
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`
}

export function date (time) {
  const localDate = new Date(time * 1000)
  return localDate.toLocaleDateString()
}

export function numberToCurrencyNo (value) {
  if (!value) return 0
  const intPart = Math.trunc(value)
  const intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  let floatPart = ''
  const valueArray = value.toString().split('.')
  if (valueArray.length === 2) {
    floatPart = valueArray[1].toString()
    return intPartFormat + '.' + floatPart
  }
  return intPartFormat + floatPart
}
