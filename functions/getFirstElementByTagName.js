const getElementsByTagName = require('./getElementsByTagName.js')

module.exports = getFirstElementByTagName

function getFirstElementByTagName (element, targetTag) {
  const results = getElementsByTagName(element, targetTag, true)
  return results && results.length ? results[0] : null
}
