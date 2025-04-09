btn = document.querySelector("button")
inp = document.querySelector("input")
ul = document.querySelector("ul")

// This function will add a new item to the list when the button is clicked
// and will also create a delete button for that item
// The delete button will remove the item from the list when clicked
// The input field will be cleared after adding the item
btn.addEventListener("click", function () {
    let item = document.createElement("li")
    item.textContent = inp.value

    delBtn = document.createElement("button")
    delBtn.textContent = "delete"
    delBtn.classList.add("delete")
    item.appendChild(delBtn)
    ul.appendChild(item)

    changeColor(item)

    inp.value = ""
})

// This function will change the color of the last item in the list
// It will randomly select a color from the colors array
// and apply it to the last item in the list
function changeColor(item) {
    // This function will change the color of the list items to a random color
    let colors = ["red", "blue", "green", "yellow", "purple"]
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    item.lastChild.style.color = randomColor
}

// This function will remove the item from the list when the delete button is clicked
// It uses event delegation to listen for clicks on the delete button
// and remove the parent element (the list item) from the list
ul.addEventListener("click", function (e) {
    if (e.target.nodeName === "BUTTON") {
        e.target.parentElement.remove()
    }
})

// This function will log the value of the input field when the user presses enter
inp.addEventListener("change", function () {
    console.log(inp.value)
    inp.value = ""
})

// This function will log the value of the input field when the user presses any key
inp.addEventListener("keypress", function (e) {
    console.log(e.key)
})