// Modules - encapsulated code (only share the minimum)
//common js, every file is a module (by default)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade') //when you import a module, you actually invoke it
// console.log(names)
// console.log(data)

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)