function repeat(str = '', timesopt = 1) {
  let result = ''

  for (let i = timesopt; i > 0; i--) {
    result += str
  }

  return result
}

console.log(repeat('w', 3))
// => www
console.log(repeat('gomu', 0))
// =>