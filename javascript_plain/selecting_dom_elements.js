// selecting html element using id
document.getElementById('id')

// returns a collection of html elements (array-like but not exactly an array)
// can't use array method such as .forEach but can use .length property
// can convert collection to a proper array by using Array.from(collection).forEach
document.getElementsByTagName('tag')
document.getElementsByClassName('class')
document.querySelectorAll('#id', '.class', 'tag')

// returns the first element in the collection
document.getElementsByTagName('tag')[0]
document.getElementsByClassName('class')[0]
document.querySelectorAll('#id', '.class', 'tag')[0]
document.querySelector('#id', '.class', 'tag')

// using pseudo-class selector
document.querySelectorAll('li:nth-child(even/odd), li:first-child')

// select elements based on parent with querySelector
const div = document.querySelector('div')
const ul = document.getElementsByTagName('ul')[0]
const class = document.querySelector('.class')
div.querySelector('ul')
ul.querySelectorAll('li:nth-child(even)')
class.querySelector('div')[0/1/2/3]
