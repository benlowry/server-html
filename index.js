const fs = require('fs')
const html2json = require('html2json')
// methods
const appendChild = require('./functions/appendChild.js')
const createElement = require('./functions/createElement.js')
const getAttribute = require('./functions/getAttribute.js')
const getElementById = require('./functions/getElementById.js')
const getElementsByTagName = require('./functions/getElementsByTagName.js')
const getFirstElementByTagName = require('./functions/getFirstElementByTagName.js')
const getClassArray = require('./functions/getClassArray.js')
const removeElement = require('./functions/removeElement.js')
const removeElementById = require('./functions/removeElementById.js')
const removeElementsById = require('./functions/removeElementsById.js')
const setAttribute = require('./functions/setAttribute.js')
const setInnerText = require('./functions/setInnerText.js')
const classList = {
  add: require('./functions/classList/add.js'),
  contains: require('./functions/classList/contains.js'),
  item: require('./functions/classList/item.js'),
  remove: require('./functions/classList/remove.js'),
  toggle: require('./functions/classList/toggle.js')
}

module.exports = {parse, parseFile, toString}

function parseFile (filePath) {
  if (!fs.existsSync(filePath)) {
    return null
  }
  return parse(fs.readFileSync(filePath).toString('utf-8').trim())
}

function parse (html) {
  if (!html || !html.split || html.indexOf('<') === -1 || html.indexOf('>') === -1) {
    return null
  }
  // unnecessary line-breaks are stripped to avoid array+objects for each text node
  let doc = html2json.html2json(html)
  stripLineBreaks(doc)
  doc = html2json.html2json(html2json.json2html(doc))
  addDOMFunctions(doc)
  return doc
}

function toString (doc) {
  if (!doc) {
    return null
  }
  if (doc.substring) {
    return null
  }
  return html2json.json2html(doc)
}

function addDOMFunctions (el) {
  if (el.child) {
    for (const child of el.child) {
      if (child.node === 'element') {
        addDOMFunctions(child)
      }
    }
  }
  if (el.node === 'root') {
    el.createElement = (tag) => {
      const newElement = createElement(el, tag)
      addDOMFunctions(newElement)
      return newElement
    }
  }
  // misc
  el.getAttribute = (attribute) => {
    return getAttribute(el, attribute)
  }
  el.setAttribute = (attribute, value) => {
    return setAttribute(el, attribute, value)
  }
  el.setInnerText = (elementid, message) => {
    return setInnerText(el, elementid, message)
  }
  el.toString = () => {
    return toString(el)
  }
  // children
  el.getElementById = (elementid) => {
    return getElementById(el, elementid)
  }
  el.getElementsByTagName = (tag) => {
    return getElementsByTagName(el, tag)
  }
  el.getFirstElementByTagName = (tag) => {
    return getFirstElementByTagName(el, tag)
  }
  el.remove = () => {
    return removeElement(el)
  }
  el.removeElementById = (targetid) => {
    return removeElementById(el, targetid)
  }
  el.removeElementsById = (targetids) => {
    return removeElementsById(el, targetids)
  }
  el.appendChild = (child) => {
    return appendChild(el, child)
  }
  // css
  el.getClassArray = () => {
    return getClassArray(el)
  }
  el.classList = {
    contains: (className) => {
      return classList.contains(el, className)
    },
    add: (className) => {
      return classList.add(el, className)
    },
    remove: (className) => {
      return classList.remove(el, className)
    },
    toggle: (className) => {
      return classList.toggle(el, className)
    },
    item: (index) => {
      return classList.item(el, index)
    }
  }
}

function stripLineBreaks (element) {
  if (element.tag === 'script' || element.tag === 'textarea' || element.tag === 'pre' || element.tag === 'code') {
    return
  }
  if (element.child) {
    for (let i = element.child.length - 1; i > -1; i--) {
      const node = element.child[i]
      if (node.node === 'text') {
        if (node.text.trim() === '') {
          node.text = ''
        }
        node.text = node.text.split('\n').join(' ')
        while (node.text.indexOf('  ') > -1) {
          node.text = node.text.split('  ').join(' ')
        }
      } else if (node.tag && node.child && node.child.length) {
        stripLineBreaks(node)
      }
    }
  }
}
