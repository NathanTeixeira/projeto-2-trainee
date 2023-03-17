const nav = document.querySelector(".nav");
const btnmenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

function handlebButtonClick(event){
    if (event.type === "touchstart") event.preventdefault();
    event.stopPropagation();
    nav.classList.toggle("active")
    handleClickOutside(menu, ()=> {
        nav.classList.remove("active");
        setAria();
    });
    setAria();
}

function handleClickOutside(targetElement, callback){
    const html = document.documentElement;

    function handleHTMLClick(event){
        if (!targetElement.contains(event.target)){
            html.removeEventlist("click", handleHTMLClick);
            html.removeEventlist("touchstart", handleHTMLClick);
            callback();
        }
    }

    if (!targetElement.hasAttribute("data-target")){
        html.addEventListener("click", handleHTMLClick);
        html.addEventListener("touchstart", handleHTMLClick);
        targetElement.setAttribute("data-target", "")
    }

}

function setAria(){
    const isActive = nav.classList.contains("active");
    btnmenu.setAttribute("aria-expanded", isActive);
    if (isActive) {
        btnmenu.setAttribute("aria-label", "Fechar Menu")
    } else {
        btnmenu.setAttribute("aria-label", "Abrir Menu")
    }
}

btnmenu.addEventListener("click", handlebButtonClick);

btnmenu.addEventListener("touchstart", handlebButtonClick);