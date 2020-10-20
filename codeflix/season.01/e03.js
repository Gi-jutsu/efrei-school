const fs = require('fs')

module.exports = function(fileName) {
  const content = fs.readFileSync(fileName)

  console.log(content)
}