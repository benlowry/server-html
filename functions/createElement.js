module.exports = createElement

function createElement (element, tag) {
  if (!element || !tag) {
    return null
  }
  return {
    node: 'element',
    tag: tag,
    attr: {},
    child: []
  }
}
