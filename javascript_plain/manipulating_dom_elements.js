// getting and setting html or text in html elements
const paragraph = document.getElementById('main-paragraph')
const li = document.querySelectorAll('li:last-child')
paragraph.innerHTML = "<em>Hello, world!</em>"
li.textContent = "Fruits"

// changing attributes of html elements
const inputField = document.getElementsByClassName('main-input')[0]
inputField.title = "Input"
inputField.type = "checkbox"
inputField.value = "" / "Please type something"

// changing style and class of html elements
paragraph.style.color = "blue"
paragraph.style.backgroundColor = "magenta"
paragraph.style.display = "none" / "block"
paragraph.className = "main-article"

// creating new dom elements
const newLi = document.createElement('li')
newLi.textContent = "Animals"
newLi.innerHTML = "Animals <button>Click me!</button>"

// appending html elements to nodes
const ul = document.querySelector('.main-ul')
ul.appendChild(newLi)

// removing html elements from nodes
const lastLi = document.querySelector('.main-ul li:last-child')
ul.removeChild(lastLi)
