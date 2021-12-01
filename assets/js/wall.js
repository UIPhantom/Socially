//Add a post
const postContainer = document.getElementById("new-post-container");
const floatingButton = document.getElementById("floating-btn");
const floatBtnIcon = document.getElementById("floating-btn-icon");
let floatBtn = false;
floatingButton.addEventListener("click", () => {
      floatBtn = !floatBtn;
      if (floatBtn) {
         postContainer.style.display = "block";
         floatBtnIcon.classList.remove("fa-plus-circle");
         floatBtnIcon.classList.add("fa-arrow-circle-left");
      }
      else {
         postContainer.style.display = "none";
         floatBtnIcon.classList.add("fa-plus-circle");
         floatBtnIcon.classList.remove("fa-arrow-circle-left");
      }
   });

//Post Icons
const iconHand = document.getElementsByClassName("icon-hand");
let handIcon = false;
window.onload = () => {
   for(let i=0; i<iconHand.length; i++){
      iconHand[i].addEventListener("click", () => {
         handIcon = !handIcon;
         if(handIcon){
            iconHand[i].classList.remove("far");
            iconHand[i].classList.add("fas");
         }
         else{
            iconHand[i].classList.add("far");
            iconHand[i].classList.remove("fas");
         }
      });
      iconHand[i].addEventListener("mouseenter", () => {
         iconHand[i].style.color = "blueviolet";
      });
      iconHand[i].addEventListener("mouseleave" , () => {
         iconHand[i].style.color = "blueviolet";
      });
   }
}


//New post icons
const addPost = document.getElementById("add-post-icon");

addPost.addEventListener("mouseenter" , () => {
   addPost.textContent = "send";
});

addPost.addEventListener("mouseleave" , () => {
   addPost.textContent = "post_add";
});


