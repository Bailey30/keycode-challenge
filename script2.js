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
    intro.style.height = "7" + "vh"
    
    const keykey = event.key
    const keycode = event.code
    const keywhich = event.which

    key.innerHTML = keykey
    key2.innerHTML = keykey
    code.innerHTML = keycode
    which.textContent = keywhich
    which2.innerHTML = keywhich

})