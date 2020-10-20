const fs = require('fs')

module.exports = function(fileName) {
  fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
      console.error(error)
      return
    }

    console.log(data)
  })
}