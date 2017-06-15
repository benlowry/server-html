module.exports = setInnerText

function setInnerText (element, message) {
  if (!element) {
    return null
  }
  element.child = [{
    node: 'text',
    text: message || ''
  }]
}
