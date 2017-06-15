module.exports = getClassArray

function getClassArray (element) {
  if (!element) {
    return null
  }
  if (!element.attr || !element.attr.class) {
    return []
  }
  const classOrList = element.attr.class
  if (classOrList.pop) {
    return classOrList
  }
  return [classOrList]
}
