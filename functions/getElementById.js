module.exports = getElementById

function getElementById (element, targetid) {
  if (!element || !targetid) {
    return null
  }
  if (element.attr && element.attr.id === targetid) {
    return element
  }
  if (element.child && element.child.length) {
    for (let i = 0, len = element.child.length; i < len; i++) {
      const child = element.child[i]
      if (child && child.attr && child.attr.id === targetid) {
        return child
      }
      if (child && child.child && child.child.length > 0) {
        const nested = getElementById(child, targetid)
        if (nested) {
          return nested
        }
      }
    }
  }
}
