module.exports = getAttribute

function getAttribute (doc, elementid, attribute) {
  if (!doc || !elementid || !attribute) {
    return null
  }
  const element = doc.getElementById(elementid)
  if (!element) {
    return null
  }
  if (!element.attr) {
    return null
  }
  return element.attr[attribute]
}
