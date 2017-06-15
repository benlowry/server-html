const getClassArray = require('../getClassArray.js')
const setAttribute = require('../setAttribute.js')

module.exports = remove

function remove (element, className) {
  const classArray = getClassArray(element)
  const index = classArray.indexOf(className)
  if (index > -1) {
    classArray.splice(index, 1)
  }
  setAttribute(element, 'class', classArray)
}
