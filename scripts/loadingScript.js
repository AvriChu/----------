let mask = document.querySelector(".loading");
window.addEventListener("load", () => {
  mask.classList.add("loadHide");
  setInterval(() => {
    mask.style.display = "none";
  }, 500);
});
