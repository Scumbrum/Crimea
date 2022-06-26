const toggler = document.querySelector(".header__toggler")
const navigators = document.querySelectorAll(".header__navitem")
const popupTogglers = document.querySelectorAll(".popup__toggler")
const popups = document.querySelectorAll(".popup, .popup--right, .popup--large")
const moreLoaders = document.querySelectorAll(".details__toggler, .preview__toggler")
const switchers = document.querySelectorAll(".popup__switch")

window.addEventListener("DOMContentLoaded", () => {
    moreLoaders.forEach(loader => {
        const id = loader.getAttribute("target")
        const target = document.getElementById(id)
        if(target.childElementCount <= target.getAttribute("max-items")) {
            loader.classList.add("hidden")
        }
    })
})

document.addEventListener("click", (e) => {
    
    popups.forEach(popup => {
        if(!popup.classList.contains("hidden") && !popup.contains(e.target)) {
            for(let toggler of popupTogglers) {
                if(toggler.contains(e.target)) {
                    return
                }
            }
            popup.classList.add("hidden")
            document.body.removeAttribute("limited")
        }
    })
})

navigators.forEach((nav) => {
    nav.addEventListener("click", ()=> {
        const target = document.getElementById("navbar")
        const cover = document.querySelector(".cover")
        cover.classList.remove("show")
        target.classList.remove("show")
        toggler.classList.remove("active")
    })
})

toggler.addEventListener("click", ()=> {
    const id = toggler.getAttribute("target")
    const target = document.getElementById(id)
    const cover = document.querySelector(".cover")
    cover.classList.toggle("show")
    target.classList.toggle("show")
    toggler.classList.toggle("active")
})

moreLoaders.forEach(loader => {
    loader.addEventListener("click", () => {
        const id = loader.getAttribute("target")
        const target = document.getElementById(id)
        target.toggleAttribute("limited")
        loader.classList.toggle("active")
    })
})

popupTogglers.forEach(toggler => {
    toggler.addEventListener("click", ()=> {
        const id = toggler.getAttribute("target")
        const target = document.getElementById(id)
        popups.forEach(popup => {
            if(popup.id === id) {
                return
            }
            if(!popup.classList.contains("hidden")) {
                document.body.removeAttribute("limited")
                popup.classList.add("hidden")
            }
        })
        document.body.toggleAttribute("limited")
        target.classList.toggle("hidden")
    })
})

switchers.forEach(switcher => {
    switcher.addEventListener("click", () => {
        if(switcher.classList.contains("active")) {
            return
        }
        let id
        let target
        switchers.forEach(other => {
            if(other.getAttribute("name") === switcher.getAttribute("name")) {
                id = other.getAttribute("target")
                target = document.getElementById(id)
                target.classList.add("hidden")
            }
            other.classList.remove("active")
        })
        switcher.classList.add("active")
        id = switcher.getAttribute("target")
        target=document.getElementById(id)
        target.classList.remove("hidden")
    })
})

popups.forEach(popup => {
    const closer = popup.querySelector(".popup__closer, .popup__closer--border")
    closer.addEventListener("click", () => {
        popup.classList.add("hidden")
        document.body.removeAttribute("limited")
    })
})