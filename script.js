// === Page 2 popup ===
setTimeout(() => {
    document.getElementById("popup").classList.remove("hidden");
  }, 2000);
  
  document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("popup").classList.add("hidden");
  
    // Hide Page 1, show Page 3
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page3").classList.add("active");
  
    // Animate Page 3 text
    setTimeout(() => {
      document.getElementById("centerText").classList.add("active");
    }, 300);
  
    // Move automatically to Page 4 after animation
    setTimeout(() => {
      document.getElementById("page3").classList.remove("active");
      document.getElementById("page4").classList.add("active");
      document.getElementById("moveLetters").classList.add("active");
    }, 3000);
  
    // Then automatically to Page 5
    setTimeout(() => {
      document.getElementById("page4").classList.remove("active");
      document.getElementById("page5").classList.add("active");
    }, 5500);
  });