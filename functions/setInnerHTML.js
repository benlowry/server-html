const html2json = require('html2json')

module.exports = setInnerHTML

function setInnerHTML (element, html) {
  if (!element) {
    return null
  }

  element.child = [html2json.html2json(html)]
}
