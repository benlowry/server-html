const removeElement = require('./removeElement.js')

module.exports = removeElementById

function removeElementById (element, targetid) {
  const target = element.getElementById(targetid)
  if (target) {
    return removeElement(target)
  }
  return null
}
