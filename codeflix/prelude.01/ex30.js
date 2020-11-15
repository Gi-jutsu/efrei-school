function isEmpty(str = '') {
  let i = 0

  while (str[i] !== undefined) {
    i++
  }

  return i <= 0
}

console.log(isEmpty(''))
// => true
console.log(isEmpty('  '))
// => false
console.log(isEmpty('ch0pper'))
// => false