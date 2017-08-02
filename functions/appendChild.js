module.exports = appendChild

function appendChild (element, child) {
  if (!element) {
    return null
  }
  if (!element.child) {
    element.child = [child]
    return
  }
  return element.child.push(child)
}
