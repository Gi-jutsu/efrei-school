const fs = require('fs')

module.exports = function() {
  fs.writeFile(filename, content, () => {
    console.log(`File ${filename} successfully created!`)
  })
}