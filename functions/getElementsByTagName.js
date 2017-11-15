module.exports = getElementsByTagName

function getElementsByTagName (element, targetTag, stopOnFirst, results) {
  if (!element || !targetTag) {
    return null
  }
  results = results || []
  if (element.tag && element.tag === targetTag) {
    results.push(element)
    if (stopOnFirst && results.length) {
      return results
    }
  }
  if (element.child && element.child.length) {
    for (let i = 0, len = element.child.length; i < len; i++) {
      const child = element.child[i]
      if (element.tag === 'template') {
        continue
      }
      getElementsByTagName(child, targetTag, stopOnFirst, results)
      if (stopOnFirst && results.length) {
        return results
      }
    }
  }
  return results
}
