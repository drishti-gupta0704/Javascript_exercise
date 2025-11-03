

let button= document.querySelector("button");

button.addEventListener("click",function(){

let x = document.getElementById("numb").value;
 
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input is valid";
  }
  document.getElementById("demo").innerHTML = text;



})
