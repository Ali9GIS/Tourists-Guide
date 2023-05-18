let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");



window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove ('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active')
}

searchBtn.addEventListener("click", () => {
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
});
menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});

const header = document.querySelector("header");
const hero = document.querySelector(".landing");

window.onscroll = () => {
    if (document.documentElement.scrollTop + 120 > hero?.scrollHeight) {
        header.style.backgroundColor = "rgba(0,0,0 ,.7)";
        document.querySelector(".search-bar-container").style.backgroundColor =
            "rgba(0,0,0 ,.7)";
    } else if (document.documentElement.scrollTop < hero?.scrollHeight) {
        header.style.backgroundColor = "transparent";
        document.querySelector(".logo").style.color = "#FFF";
        document.querySelector("#menu-bar").style.color = "#FFF";
        document.querySelector(".fa-search").style.color = "#FFF";
        document.querySelector(".search-bar-container").style.backgroundColor =
            "transparent";
    } else if (document.documentElement.scrollTop > 40) {
        header.style.backgroundColor = "rgba(0,0,0 ,.7)";
        document.querySelector(".logo").style.color = "#FFF";
        document.querySelector("#menu-bar").style.color = "#FFF";
        document.querySelector(".fa-search").style.color = "#FFF";
        document.querySelector(".navbar").style.color = "#FFF";
        document.querySelector(".search-bar-container").style.backgroundColor =
            "rgba(0,0,0 ,.7)";
    } else {
        header.style.backgroundColor = "transparent";
        document.querySelector(".logo").style.color = "#000";
        document.querySelector("#menu-bar").style.color = "#000";
        document.querySelector(".fa-search").style.color = "#000";
        document.querySelector(".navbar").style.color = "#000";
        document.querySelector(".search-bar-container").style.backgroundColor =
            "rgba(0,0,0 ,.7)";
    }
};

const btnDays = document.querySelectorAll(".tap-btn");
const btnsCont = document.querySelectorAll(".btn-cont");

window.onload = () => {
    document.querySelector(".defaultOpenBtn")?.click();
};

btnDays.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const tabcontent = document.getElementsByClassName("tabcontent");

        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        const tabBtns = document.getElementsByClassName("tap-btn");
        for (i = 0; i < tabBtns.length; i++) {
            tabBtns[i].classList.remove("active");
        }

        document.getElementById(
            e.currentTarget.dataset.targetContent
        ).style.display = "block";
        e.currentTarget.classList.add("active");
    });
});

btnsCont.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        document
            .querySelector(`.btn-${e.currentTarget.dataset.dayTarget}`)
            .click();

        document.querySelector(".tap")?.scrollIntoView();
    });
});




