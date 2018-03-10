// traverse to parent element
const li = document.querySelector('li')
const ul = li.parentNode

// traverse to previous/next sibling
<div>
  <h1>Welcome!</h1>
  <p>Hello, world!</p>
  <input type="text" />
</div>
const paragraph = document.getElementsByTagName('p')[0]
const header1 = paragraph.previousElementSibling
const inputField = paragraph.nextElementSibling

// insert a html element before a html element
const firstParagraph = document.createElement('p')
firstParagraph.textContent = "First paragraph!"
const div = paragraph.parentNode
div.insertBefore(firstParagraph, paragraph)
<div>
  <h1>Welcome!</h1>
  <p>First paragraph!</p>
  <p>Hello, world!</p>
  <input type="text" />
</div>

// getting all children node
div.children // => [h1, p, p, input]

// getting first/last child element
div.firstElementChild // => h1
div.lastElementChild // => input
