function setActiveLink() {
    const navLinks = document.getElementsByClassName("nav-link")
    for (const link of navLinks) {
        if (link.children[1].innerHTML === "EXPERIENCE") {
            link.children[0].style = "display: unset"
            break;
        }
    }
}

setActiveLink();