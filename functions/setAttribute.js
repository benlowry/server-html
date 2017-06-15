module.exports = setAttribute

function setAttribute (element, attribute, value) {
  if (!element) {
    return null
  }
  element.attr = element.attr || {}
  if (!value) {
    if (element.attr[attribute]) {
      delete (element.attr[attribute])
    }
    return
  }
  element.attr[attribute] = value
}
