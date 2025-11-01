
const btn = document.getElementById("btn");
const colorName = document.getElementById("colorName");

const colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange", "cyan", "teal", "violet"];

btn.addEventListener("click", function() {
 
  const randomIndex = Math.floor(Math.random() * colors.length);


  const selectedColor = colors[randomIndex];


  document.body.style.backgroundColor = selectedColor;
  colorName.textContent = selectedColor;
});
