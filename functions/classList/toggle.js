const getClassArray = require('../getClassArray.js')
const setAttribute = require('../setAttribute.js')

module.exports = toggle

function toggle (element, className) {
  if (!element || !className) {
    return null
  }
  const classArray = getClassArray(element)
  const index = classArray.indexOf(className)
  if (index > -1) {
    classArray.splice(index, 1)
  } else {
    classArray.push(className)
  }
  setAttribute(element, 'class', classArray)
}
