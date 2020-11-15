function endsWith(str = '', end, positionopt = str.length) {
  let x = end.length - 1

  for (let i = str.length - 1; i > 0; i--) {
    if (x <= 0) {
      return true
    }

    if (i < positionopt && str[i] !== end[x]) {
      return false
    }

    x--
  }
}

console.log(endsWith('Tony Tony Ch0pper', 'Ch0pper'))
// => true
console.log(endsWith('Tony Tony Ch0pper', 'Tony'))
// => false
console.log(endsWith('Ch0pper', 'h0', 3))
// => true