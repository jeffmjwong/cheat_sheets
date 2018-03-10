// add event listener
const ul = document.getElementsByTagName('ul')[1]
ul.addEventListener('click' / 'mouseover' / 'mouseout', () => {
  // do something
})

// add event listener to parent node using event bubbling and event delegation
ul.addEventListener('click', (evt) => {
  if (evt.target.tagName === "LI") {
    evt.target.style.color = "red"
    evt.target.title = "Clicked!"
    evt.target.textContent = evt.target.textContent.toUpperCase()
  }
  if (evt.target.tagName === "BUTTON") {
    const buttonParent = evt.target.parentNode
    ul.removeChild(buttonParent)
  }
})
