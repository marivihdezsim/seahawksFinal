// 1. MOBILE NAV TOGGLE
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("is-open");
    });
  }

  // 2. RADIO BUTTON TOGGLE
  const radioBtn = document.querySelector(".radio-pill");
  let isLive = false;

  if (radioBtn) {
    radioBtn.addEventListener("click", () => {
      isLive = !isLive;

      if (isLive) {
        radioBtn.textContent = "LIVE";
        radioBtn.style.backgroundColor = "#002346";
        radioBtn.style.color = "#ffffff";
      } else {
        radioBtn.textContent = "RADIO";
        radioBtn.style.backgroundColor = "#69BE28";
        radioBtn.style.color = "#002346";
      }
    });
  }
});
