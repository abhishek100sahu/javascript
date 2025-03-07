btn = document.querySelector("button")
inp = document.querySelector("input")
ul = document.querySelector("ul")

btn.addEventListener("click", function () {
    let item = document.createElement("li")
    item.textContent = inp.value

    delBtn = document.createElement("button")
    delBtn.textContent = "delete"
    delBtn.classList.add("delete")
    item.appendChild(delBtn)
    ul.appendChild(item)

    inp.value = ""
})

ul.addEventListener("click", function (e) {
    if (e.target.nodeName === "BUTTON") {
        e.target.parentElement.remove()
    }
})

// let delBtns = document.querySelectorAll(".delete");

// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let parent = this.parentElement;
//         console.log(parent)
//         parent.remove()
//     })
// }