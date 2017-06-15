const removeElementById = require('./removeElementById.js')

module.exports = removeElementsById

function removeElementsById (element, targetids) {
  for (const targetid of targetids) {
    removeElementById(element, targetid)
  }
}
