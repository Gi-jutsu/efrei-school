
const fs = require('fs')
const path = require('path')

const args = process.argv.slice(2)

function parseArgs(args) {
  return args
    .join('')
    .replace(/\-/g, '')
}

function readDirectoryRecursively(source, files = []) {
  const directoryFiles = fs.readdirSync(source)

  directoryFiles.forEach(filename => {
    const currentSource = path.join(source, filename)

    if (fs.lstatSync(currentSource).isDirectory()) {
      files.push(`${filename}/`)
      readDirectoryRecursively(currentSource, files)
    } else {
      files.push(filename)
    }
  })

  return files
}

function readDirectory(
  source,
  options = {
    showHiddenFiles: false,
    reverse: false,
    withFileTypes: false,
    recursive: false,
  },
) {
  let files = []

  // Check -R option is enabled, if true enable recursivity
  if (options.recursive) {
    files = readDirectoryRecursively(source)
  } else {
    files = fs.readdirSync(source)
  }

  // Check -a option is not enabled, If true remove File starting with .
  if (!options.showHiddenFiles) {
    files = files.filter(filename => !filename.startsWith('.'))
  }

  // Check -r option is enabled, If true reverse file list
  if (options.reverse) {
    files = files.reverse()
  }

  // Check -p is enabled, Add File Type character
  if (options.withFileTypes && !options.recursive) {
    files = files.map(filename => {
      const filePath = path.join(source, filename)

      if (fs.lstatSync(filePath).isDirectory()) {
        return filename + '/'
      } else {
        return filename
      }
    })
  }

  return files
}

function myls(args) {
  const options = parseArgs(args)
  const currentDirectory = process.cwd()

  const files = readDirectory(currentDirectory, {
    showHiddenFiles: options.includes('a'),
    reverse: options.includes('r'),
    withFileTypes: options.includes('p'),
    recursive: options.includes('R'),
  })

  console.log(files.join('  '))
}

myls(args)