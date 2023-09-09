const btnRating = document.querySelectorAll(".btn-rating");
let selectedRating;
const score = document.querySelector(".score");

// RATING BUTTONS
btnRating.forEach((btn) =>
  btn.addEventListener("click", function () {
    document.querySelector(".selected").classList.remove("selected");
    btn.classList.add("selected");
    selectedRating = document.querySelector(".selected").textContent;
    score.textContent = selectedRating;
  })
);

// SUBMIT BUTTON
const btnSubmit = document.querySelector(".btn-submit");
const boxRequest = document.querySelector(".box--request");
const boxGratitude = document.querySelector(".box--gratitude ");

btnSubmit.addEventListener("click", function () {
  boxRequest.classList.add("hidden");
  boxGratitude.classList.remove("hidden");
});
