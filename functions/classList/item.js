const getClassArray = require('../getClassArray.js')

module.exports = item

function item (element, index) {
  const classArray = getClassArray(element)
  if (classArray.length >= index) {
    return null
  }
  return classArray[index]
}
