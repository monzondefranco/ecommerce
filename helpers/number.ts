export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)

export const formatNumberWithCommas = (value: number) =>
  new Intl.NumberFormat('en-US').format(value)

export const formatPhoneNumber = (number: string): string => {
  const numericOnly = number.replace(/\D/g, '')

  const hasDialingCode =
    numericOnly.length === 11 && numericOnly.startsWith('1')

  if (hasDialingCode) {
    return `+1 (${numericOnly.substring(1, 4)}) ${numericOnly.substring(
      4,
      7,
    )}-${numericOnly.substring(7)}`
  }

  if (numericOnly.length === 10) {
    return `+1 (${numericOnly.substring(0, 3)}) ${numericOnly.substring(
      3,
      6,
    )}-${numericOnly.substring(6)}`
  }

  return number
}

export const sortNumberOrString =
  (isAscending?: boolean) => (a: number | string, b: number | string) =>
    isAscending
      ? +a < +b
        ? -1
        : +a > +b
        ? 1
        : 0
      : +a > +b
      ? -1
      : +a < +b
      ? 1
      : 0
