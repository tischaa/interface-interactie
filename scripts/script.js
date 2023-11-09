// // JavaScript Document

// Tutorial: https://www.youtube.com/watch?v=TXcjupbEst4
// Bron: https://stackoverflow.com/questions/15368733/how-to-toggle-two-images-onclick


const tvButton = document.getElementById("toggle-button");
const tvImage = document.getElementById("tv-uit-image");

var tvAan = false;

tvButton.addEventListener("click", function() {

  if (tvAan == true) {
    // tv uitzetten
    tvAan = false;
    tvButton.innerHTML = "TV aan";
    tvImage.src = "images/tv-uit.png";
  }
  else {
    // tv aanzetten
    tvAan = true;
    tvButton.innerHTML = "TV uit";
    tvImage.src = "images/tv-aan.png";
  }
});

// Modal 1

const firstModal = document.querySelector("#modal1");
const openFirstModal = document.querySelector(".open-button1");
const closeFirstModal = document.querySelector("#close-button1");

openFirstModal.addEventListener("click", () =>{
  firstModal.showModal();
});

closeFirstModal.addEventListener("click", () =>{
  firstModal.close();
});

// Modal 2

const secondModal = document.querySelector("#modal2");
const openSecondModal = document.querySelector(".open-button2");
const closeSecondModal = document.querySelector("#close-button2");

openSecondModal.addEventListener("click", () =>{
  secondModal.showModal();
});

closeSecondModal.addEventListener("click", () =>{
  secondModal.close();
});

// Modal 3

const thirdModal = document.querySelector("#modal3");
const openThirdModal = document.querySelector(".open-button3");
const closeThirdModal = document.querySelector("#close-button3");

openThirdModal.addEventListener("click", () =>{
  thirdModal.showModal();
});

closeThirdModal.addEventListener("click", () =>{
  thirdModal.close();
});

// Modal 4

const fourthModal = document.querySelector("#modal4");
const openFourthModal = document.querySelector(".open-button4");
const closeFourthModal = document.querySelector("#close-button4");

openFourthModal.addEventListener("click", () =>{
  fourthModal.showModal();
});

closeFourthModal.addEventListener("click", () =>{
  fourthModal.close();
});

// Modal 5

const fifthModal = document.querySelector("#modal5");
const openFifthModal = document.querySelector(".open-button5");
const closeFifthModal = document.querySelector("#close-button5");

openFifthModal.addEventListener("click", () =>{
  fifthModal.showModal();
});

closeFifthModal.addEventListener("click", () =>{
  fifthModal.close();
});

// Modal 6

const sixthModal = document.querySelector("#modal6");
const openSixthModal = document.querySelector(".open-button6");
const closeSixthModal = document.querySelector("#close-button6");

openSixthModal.addEventListener("click", () =>{
  sixthModal.showModal();
});

closeSixthModal.addEventListener("click", () =>{
  sixthModal.close();
});

const hiddenModal = document.querySelector("#hiddenModal");
const openHiddenModal = document.querySelector(".open-button7");
const closeHiddenModal = document.querySelector("#close-button7");

openHiddenModal.addEventListener("click", () =>{
  hiddenModal.showModal();
});

closeHiddenModal.addEventListener("click", () =>{
  hiddenModal.close();
});

//Hide/show tutorial: https://bobbyhadz.com/blog/javascript-hide-element-after-few-seconds
const hiddenButton = document.getElementById('hiddenButton');

setTimeout(() => {
  hiddenButton.style.display = 'block';

}, 10000);


//Jumpscare tutorial (aangepast): https://www.youtube.com/watch?v=dkICY007oa0

// Het selecteren van de knop met behulp van de id
var button = document.getElementById('scaryButton');

// Het selecteren van de jumpscare-afbeelding en audio
var jumpscare = document.getElementById("jumpscare");
// var audio = document.getElementById("scream");

// Een eventlistener toevoegen om te reageren op de knopklik
button.addEventListener('click', function() {
   console.log("Scary button clicked");
   jumpscare.style.visibility = "visible"; // Laat de jumpscare-afbeelding zien
});
