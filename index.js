// Carousel functionality
let slides = document.querySelectorAll(".slide");
let counter=0;
slides.forEach((slide,index)=>{
    slide.style.left = `${index*100}%`
});
const slideDiv = () => {
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}
const goNext = () => {
    counter++
    slideDiv()
};
const goPrev = () => {
    counter--
    slideDiv()
}
// Search bar functionality
function showSearch() {
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".submenu-searchbar").classList.add("showsubmenu");
}

function closeSearch() {
    document.querySelector(".overlay").classList.remove("showoverlay");
    document.querySelector(".submenu-searchbar").classList.remove("showsubmenu");
    document.querySelector(".banner").classList.remove("showbanner");
    document.querySelector(".signin").classList.remove("showsignin");
}
// Sign in btn functionality (Show sign in options banner)
let signinBTN=document.getElementById("sign-in");
signinBTN.addEventListener("click",()=>{
    document.querySelector(".overlay").classList.add("showoverlay");
    document.querySelector(".banner").classList.add("showbanner");
})
// Sign in page functionality
let emailOption=document.getElementById("emailOption");
emailOption.addEventListener("click",()=>{
    document.querySelector(".banner").classList.remove("showbanner");
    document.querySelector(".signin").classList.add("showsignin");
})
let heading=document.getElementById("heading");
let toIndex=document.getElementById("toIndex");
let userData= JSON.parse(localStorage.getItem("userdata"));
let email = document.getElementById("signinMail");
let password = document.getElementById("signinPass");
let signinNav=document.getElementById("sign-in");
let gotoMain=document.getElementById("gotoMain")
toIndex.addEventListener("click",()=>{
    userData.forEach((element,index) => {
    if(element.email==email.value && element.password==password.value){
        alert("Sign-In Successfull")
        gotoMain.href="/index.html";
    }
    else{
        alert("Wrong Email/Password")
        heading.innerText="Wrong email/password";
        window.location.href="/index.html";
    }
    });
})