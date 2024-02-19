const buttonLen = document.querySelector(".change-len-button");
const listLen = document.querySelector(".change-all-len");
let haveThisClass = true;

buttonLen.addEventListener("click", () => {
  const haveThisClass = listLen.classList.contains("hide");
  if (haveThisClass) {
    listLen.classList.remove("hide");
  } else {
    listLen.classList.add("fadeOut");
    setTimeout(() => {
      listLen.classList.add("hide");
      listLen.classList.remove("fadeOut");
    }, 500);
  }
  console.log("click");
});
