//Add a post
const postContainer = document.getElementById("new-post-main");
const floatingButton = document.getElementById("floating-btn");
const floatBtnIcon = document.getElementById("floating-btn-icon");
let floatBtn = false;
floatingButton.addEventListener("click", function (){
     floatBtn = !floatBtn;
     if(floatBtn){
        postContainer.style.display = "block";
        floatBtnIcon.classList.remove("fa-plus-circle");
        floatBtnIcon.classList.add("fa-arrow-circle-left");
     }
     else{
        postContainer.style.display = "none";
        floatBtnIcon.classList.add("fa-plus-circle");
        floatBtnIcon.classList.remove("fa-arrow-circle-left");
     }
});