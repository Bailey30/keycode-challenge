//@ts-check

//append p to div
const code = document.getElementById("code")
const which = document.getElementById("which")
const key = document.getElementById("key")
const key2 = document.getElementById("key2")
const which2 = document.getElementById("which2")
const vanish = document.getElementById("vanish")
const p = document.querySelectorAll("p")
const intro = document.getElementById("intro")

document.addEventListener("keydown", (event) => {
    // vanish.classList.add("vanish")
    intro.style.height = "7" + "vh"
    // intro.style.opacity = "0"
    const keykey = event.key
    let keyp = document.createElement("p")
    key.innerHTML = keykey
    // key.appendChild(keyp)
    key2.innerHTML = keykey

    const keycode = event.code
    let codep = document.createElement("p")
    code.innerHTML = keycode
    // code.appendChild(codep)


    const keywhich = event.which
    let whichp = document.createElement("p")
    which.textContent = keywhich
    // ff


    which2.innerHTML = keywhich


    intro.style.color = "red"


})