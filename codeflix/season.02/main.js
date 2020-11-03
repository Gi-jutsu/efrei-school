const { empty, withArgs } = require('./eventbox')
const { duplicate, transform } = require('./streambox')

console.log('----- Eventbox')
// eventbox
empty()
withArgs([
  'Luffy',
  'Zoro',
  'Usopp',
  'Robin',
  'Nami',
  'Sanji',
  'Ch0pper',
])

console.log('----- Streambox')
// streambox
duplicate('main.js')
transform(
  'eventbox.js',
  /[a-z]/g,
  (letter) => letter.toUpperCase(),
    false
)