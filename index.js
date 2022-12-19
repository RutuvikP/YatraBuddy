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
    if(counter == 3) counter=0;
    slideDiv()
};
const goPrev = () => {
    counter--
    if(counter < 0) counter=0;
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
    document.querySelector(".signup").classList.remove("showsignup");
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
let userData= JSON.parse(localStorage.getItem("userdata")) || [];
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
        // alert("Wrong Email/Password")
        heading.innerText="Wrong email/password";
        // window.location.href="/index.html";
    }
    });
})
// Sign up page
let signupBTN=document.getElementById('signupBTN');
signupBTN.addEventListener("click",()=>{
    document.querySelector(".signin").classList.remove("showsignin");
    document.querySelector(".signup").classList.add("showsignup");
})
let signupemail = document.getElementById("signupMail");
let signuppassword = document.getElementById("signupPass");
let joinBTN=document.getElementById("joinBTN");
joinBTN.addEventListener("click",()=>{
    // alert("Now Sign-In to your account from home-page");
    formData={
        email: signupemail.value,
        password: signuppassword.value
    }
    userData.push(formData);
    console.log(userData);
    localStorage.setItem("userdata",JSON.stringify(userData))
    document.querySelector(".signin").classList.add("showsignin");
    document.querySelector(".signup").classList.remove("showsignup");
})