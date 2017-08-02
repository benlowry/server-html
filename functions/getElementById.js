module.exports = getparentById

function getparentById (parent, targetid) {
  if (!parent || !targetid) {
    return null
  }
  if (parent.attr && parent.attr.id === targetid) {
    return parent
  }
  if (parent.child && parent.child.length) {
    for (let i = 0, len = parent.child.length; i < len; i++) {
      const element = parent.child[i]
      if (!element || (element.attr && element.attr.node === 'text')) {
        continue
      }
      if (element.attr && element.attr.id === targetid) {
        return element
      }
      if (!element.child || !element.child.length) {
        continue
      }
      if (element.tag === 'template' || element.tag === 'iframe') {
        continue
      }
      const nested = getparentById(element, targetid)
      if (nested) {
        return nested
      }
    }
  }
}
