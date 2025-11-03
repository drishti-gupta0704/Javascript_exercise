

let countDisplay = document.getElementById("count");
let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");

let count = 0; 


increaseBtn.addEventListener("click", function() {
  count++;
  countDisplay.textContent = count;
  updateColor();
});


decreaseBtn.addEventListener("click", function() {
  count--;
  countDisplay.textContent = count;
  updateColor();
});


resetBtn.addEventListener("click", function() {
  count = 0;
  countDisplay.textContent = count;
  updateColor();
});

function updateColor() {
  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "#268b92";
  }
}
