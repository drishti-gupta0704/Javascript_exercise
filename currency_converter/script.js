
// const BASE_URL = "https://api.frankfurter.app/latest?amount=100&from=USD&to=INR";

const dropdowns = document.querySelectorAll(".dropdown select ");

const btn = document.querySelector("form button");
const fromcurr= document.querySelector(".from select");
const tocurr= document.querySelector(".to select");
const msg = document.querySelector(".msg");



// for(code in countryList){
//     console.log(code,CountryList[code]);
// }

//adding all the country name in the dropdown list
// for in loop is used to get indexes
// for of loop is used to get values

for(let select of dropdowns){
    for(let currcode in countryList){
        let newoption = document.createElement("option");
        newoption.innerText = currcode;
        newoption.value = currcode;
        if(select.name === "from" && currcode ==="USD"){
            newoption.selected = "selected";
        }
        else if (select.name === "to" && currcode === "INR"){
            newoption.selected = "selected"; 
        }

        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
    updateflag(evt.target); //to get selected option from select dropdown
}
);
}

// select.addEventListener("chnage",(evt)=>{
//     updateflag(evt.target); 
// );

const updateflag = (element)=> {
    let currcode= element.value;
    // console.log(currcode);
    let countrycode= countryList[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
};

btn.addEventListener("click",async(evt)=>
 { evt.preventDefault();
let amount = document.querySelector(".amount input");
let amtval= amount.value;
if(amtval === "" || amtval <1){
     amtval = 1;
    amount.value = "1";
}
//API works in lower case only...so make it into lower case
const URL = `https://api.frankfurter.app/latest?amount=${amtval}&from=${fromcurr.value.toLowerCase()}&to=${tocurr.value.toLowerCase()}` ;
let response = await fetch(URL);
// console.log(response);
let data = await response.json();
let rate = data.rates[tocurr.value];
// let rate = data[tocurr.value.toLowerCase()];
let finalAmount = amtval * rate ;
msg.innerText = `${amtval}  ${fromcurr.value} = ${finalAmount} ${tocurr.value}`;


 }
);
 


