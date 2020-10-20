const fs = require('fs')

module.exports = function(filename) {
  fs.stat(filename, (error, stats) => {
    if (error) {
      return console.error(error)
    }

    if (stats.isFile()) {
      console.log(`The argument [ ${filename} ] is a file`)
    } else if (stats.isDirectory()) {
      console.log(`The argument [ ${filename} ] is a directory`)
    } else {
      console.log(`The argument [ ${filename} ] is another unix things`)
    }
  })
}