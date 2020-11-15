function slice(str = '', start, endopt = str.length) {
  let result = ''

  let i = start
  if (start < 0) {
    i = str.length + start
  }

  for (i; i < endopt; i++) {
    result += str[i]
  }

  return result
}

console.log(slice('ch0pper', 1))
// => h0pper
console.log(slice('ch0pper', -4))
// => pper
console.log(slice('ch0pper', 1, 4))
// => h0p