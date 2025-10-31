

let sel= document.querySelector("select");
let device=document.querySelector("#device");
sel.addEventListener("change",function(del)


{
   
    device.textContent= "Device Selected"
    device.textContent= `${del.target.value} device is selected` ;
}


);

