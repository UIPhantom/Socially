//Add a post
const postContainer = document.getElementById("new-post-main");
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
const iconHand = document.getElementById("icon-hand");
let handIcon = false;
iconHand.addEventListener("click", () => {
   handIcon = !handIcon;
   if(handIcon){
      iconHand.classList.remove("far");
      iconHand.classList.add("fas");
      iconHand.style.color = "blueviolet";
   }
   else{
      iconHand.classList.add("far");
      iconHand.classList.remove("fas");
      iconHand.style.color = "black";
   }
});

iconHand.addEventListener("mouseenter", () => {
   iconHand.style.color = "blueviolet";
});
iconHand.addEventListener("mouseleave" , () => {
   iconHand.style.color = "black";
});