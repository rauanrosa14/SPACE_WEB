/*const navbar = document.querySelector("navbar");
const button = document.querySelector("mobile-menu");
const closeButton =  document.querySelector('line-1')

button.addEventListener('click', () => {
        navbar.classList.toggle("active")
});



class MobileNavBar {
    constructor(mobileMenu,NavLinks,NavList){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(NavList);
        this.NavLinks = document.querySelectorAll(NavLinks);
        console.log(mobileMenu);
        console.log(NavList);
        console.log(NavLinks);
        this.activeClass = "active";
        this.handleClick() = this.handleClick().bind(this);
    }

    handleClick(){
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addeventListener("click", this.handleClick());
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
            console.log("Ola");
        }
        return this;
    }

}

const menu = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);*/