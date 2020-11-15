function isBlank(str = '') {
  let i = 0

  while(str[i] !== undefined) {
    if (str[i] !== ' ') {
      return false
    }

    i++
  }

  return true
}

console.log(isBlank(''))
// => true
console.log(isBlank('  '))
// => true
console.log(isBlank('Ch0pper!'))
// => false