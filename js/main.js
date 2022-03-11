// get input email
const inputEmail = document.querySelector(".email");

const btnSubmit = document.querySelector(".submit");

const imgError = document.querySelector(".img-error");

btnSubmit.addEventListener("click", function (e) {
  showError();
});

inputEmail.addEventListener("keyup", function (e) {
  if (e.code === "Backspace") {
    imgError.classList.remove("active");
    inputEmail.classList.remove("active");
  } else if (e.code === "Enter") {
    showError();
  }
});

function showError() {
  if (!/\w+@[a-z]+[.][a-z]{2,10}/gi.test(inputEmail.value)) {
    imgError.classList.add("active");
    inputEmail.classList.add("active");
  }
}
