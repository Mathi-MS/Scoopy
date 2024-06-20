var navigateone = document.querySelector(".navigate__one")
var navigatetwo = document.querySelector(".navigate__two")
var navigatethree = document.querySelector(".navigate__three")
var bannerone = document.querySelector(".banner__one")
var overlay = document.querySelector(".overlay_one")
var bannerimg = document.querySelector(".bannerimg")


navigatetwo.addEventListener("click",()=>{
    bannerone.style.backgroundColor=("#ff677d")
    overlay.style.backgroundColor=("#fcb3beec")
    bannerimg.setAttribute("src","Assests/images/banner-1.png")
    bannerimg.classList.add("anime")
    navigatetwo.style.opacity=(".5")
    navigateone.style.opacity=("1")
    navigatethree.style.opacity=("1")
    setTimeout(function(){
        bannerimg.classList.remove("anime")
    }, 1000);
})

navigateone.addEventListener("click",()=>{
    bannerone.style.backgroundColor=("#7B4B41")
    overlay.style.backgroundColor=("#ce9184")
    bannerimg.setAttribute("src","Assests/images/banner-2.png")
    bannerimg.classList.add("anime")
    navigateone.style.opacity=(".5")
    navigatetwo.style.opacity=("1")
    navigatethree.style.opacity=("1")
    setTimeout(function(){
        bannerimg.classList.remove("anime")
    }, 1000);
})

navigatethree.addEventListener("click",()=>{
    bannerone.style.backgroundColor=("#446F25")
    overlay.style.backgroundColor=("#498b19")
    bannerimg.setAttribute("src","Assests/images/banner-3.png")
    bannerimg.classList.add("anime")
    navigatethree.style.opacity=(".5")
    navigateone.style.opacity=("1")
    navigatetwo.style.opacity=("1")
    setTimeout(function(){
        bannerimg.classList.remove("anime")
    }, 1000);

})

// Navbar 
var mobnav = document.getElementById("mobnav")
var closebar = document.querySelector(".closebar")
var togglebar = document.querySelector(".togglebar")
var navlink = document.querySelectorAll(".nav__link")

togglebar.addEventListener("click", () =>{
    mobnav.style.display="flex"
})
closebar.addEventListener("click", () =>{
    mobnav.style.display="none"
})
navlink.forEach((element)=>{
    element.addEventListener("click",()=>{
        mobnav.style.display="none"
    })
})


