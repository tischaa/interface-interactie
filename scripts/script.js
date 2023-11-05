// JavaScript Document
console.log("Hello Kitty!");

// Tutorial: https://www.youtube.com/watch?v=TXcjupbEst4
// Bron: https://stackoverflow.com/questions/15368733/how-to-toggle-two-images-onclick

// Zoek de knop en de afbeeldingen
const toggleButton = document.getElementById("toggle-button");
const tvUitImage = document.getElementById("tv-uit-image");
const tvAanImage = document.getElementById("tv-aan-image");

// Voeg een eventlistener toe aan de knop om te reageren op klikgebeurtenissen
toggleButton.addEventListener("click", function() {
  // Controleer de huidige zichtbaarheid van de afbeeldingen
  const tvUitVisible = window.getComputedStyle(tvUitImage).getPropertyValue("opacity") === "1";
  
  // Wissel de zichtbaarheid van de afbeeldingen
  if (tvUitVisible) {
    tvUitImage.style.opacity = "0";
    tvAanImage.style.opacity = "1";
    toggleButton.querySelector("p").textContent = "TV Uit";
  } else {
    tvUitImage.style.opacity = "1";
    tvAanImage.style.opacity = "0";
    toggleButton.querySelector("p").textContent = "TV Aan";
  }
});