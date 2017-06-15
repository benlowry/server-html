const getClassArray = require('../getClassArray.js')
const setAttribute = require('../setAttribute.js')

module.exports = add

function add (element, className) {
  if (!element || !className) {
    return null
  }
  const classArray = getClassArray(element)
  if (classArray.indexOf(element) === -1) {
    classArray.push(className)
  }
  setAttribute(element, 'class', classArray)
}
