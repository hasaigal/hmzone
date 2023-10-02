

const navbtn = document.querySelector('#nav-icon')
const navbar = document.querySelector('#navbar')
const navul = document.querySelector('#navbar ul')
const header = document.querySelector("header")



navbtn.addEventListener('click', () => {
    navbar.classList.toggle('hidden')
})


window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
        header.classList.add("bg-teal-800")
        navul.classList.add("bg-teal-800")
    } else {
        header.classList.remove("bg-teal-800")
        navul.classList.remove("bg-teal-800")
    }

})

