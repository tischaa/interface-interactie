// JavaScript Document
console.log("Hello Kitty!");

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
    // tv aanzet
    tvAan = true;
    tvButton.innerHTML = "TV uit";
    tvImage.src = "images/tv-aan.png";
  }


});
