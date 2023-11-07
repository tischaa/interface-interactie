// // JavaScript Document

// Tutorial: https://www.youtube.com/watch?v=TXcjupbEst4
// Bron: https://stackoverflow.com/questions/15368733/how-to-toggle-two-images-onclick


const tvButton = document.getElementById("toggle-button");
const tvImage = document.getElementById("tv-uit-image");

var tvAan = false;
// const tvAanImage = document.getElementById("tv-aan-image");


tvButton.addEventListener("click", function() {
  
  // const tvUitVisible = window.getComputedStyle(tvUitImage).getPropertyValue("display") === "inline-block";

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

const modal = document.querySelector("#modal1");
const openModal = document.querySelector(".open-button1");
const closeModal = document.querySelector("#close-button");

openModal.addEventListener("click", () =>{
  modal.showModal();
});

closeModal.addEventListener("click", () =>{
  modal.close();
});



