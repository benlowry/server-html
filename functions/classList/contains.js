const getClassArray = require('../getClassArray.js')

module.exports = contains

function contains (element, className) {
  return getClassArray(element).indexOf(className) > -1
}
