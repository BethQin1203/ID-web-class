// Get popup and big text elements
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const bigText = document.getElementById("bigText");

// Show popup with a delay after page load
window.addEventListener("load", () => {
  setTimeout(() => {
    popup.classList.remove("hidden");
  }, 1500); // popup appears after 3 seconds (adjust as needed)
});

// Close popup and trigger big text animation
closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");

  // After popup closes, slide in the big text
  setTimeout(() => {
    bigText.classList.add("active");
  }, 500);
});
