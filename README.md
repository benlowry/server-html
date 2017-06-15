# Server HTML

This module lets you parse HTML and HTML files to use a DOM-like 
interface to prepare HTML on your server in a browser-like fashion.

A very small subset of the DOM is supported along with some additional
convenience methods, if you would like to contribute more update this 
list, tests and documentation and submit a pull request.

The module has a single dependency without additional dependencies.

## How to use
  const Page = require('page-html)
  const rawHTML = fs.readFileSync('./my-page.html')
  const document = Page.parse(rawHTML)

## Methods bound to the root element
  document.getElementById('a-child-id')
  document.getElementsByTagName('a')
  document.getFirstElementByTagName('a')
  document.appendChild(child)
  document.createElement('a')
  document.removeElementById('a-child-id')
  document.removeElementsById(['child1', 'child2', 'child3'])
  document.remove()
  document.setAttribute('disabled', true)
  document.setInnerText('this is the text')
  document.classList.contains('css-class)
  document.classList.add('css-class)
  document.classList.remove('css-class)
  document.classList.item(index)
  document.classList.toggle('css-class)s)

### Methods bound to elements
  const el = document.getElementById('an-id)
  el.getElementById('a-child-id')
  el.getElementsByTagName('a')
  el.getFirstElementByTagName('a')
  el.appendChild(child)
  el.removeElementById('a-child-id')
  el.removeElementsById(['child1', 'child2', 'child3'])
  el.remove()
  el.setAttribute('disabled', true)
  el.setInnerText('this is the text')
  el.classList.contains('css-class)
  el.classList.add('css-class)
  el.classList.remove('css-class)
  el.classList.item(index)
  el.classList.toggle('css-class)s)

## Contribute some of the DOM
- your contribution will be public domain
- your code must be formatted with [StandardJS](https://standardjs.com)