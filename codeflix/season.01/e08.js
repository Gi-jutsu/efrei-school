const fs = require("fs")

module.exports = function(filename) {
  fs.access(filename, fs.constants.R_OK | fs.constants.W_OK,(error) => {
    if (error) {
      return console.log(`I don't have access to the file ${filename}`)
    }

    console.log(`I can read or write the file ${filename}`)
  })
}