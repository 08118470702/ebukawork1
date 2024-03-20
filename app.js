'use strict'

// // let dec = document.querySelector('.dec');
// // let h1 = document.querySelector('h1');
// // let inc = document.querySelector('.inc')

// // dec.addEventListener('click',function(){
// //     h1.innerText = "Steff"
// // })


// // line 6
// function bodyChanger(){
    
//     document.body.style.backgroundColor = "red"
// }

// // inc.addEventListener('click',bodyChanger)

// let dec = document.querySelector('.dec');
// let h1 = document.querySelector('h1');
// // decrement 
// function decremental(){
//     h1.innerText--;
// }
// dec.addEventListener("click",decremental);

// let Inc = document.querySelector('.inc');
// let head = document.querySelector('h1');
// // increment 
// function incremental(){
//     head.innerText++;
// }
// Inc.addEventListener("click",incremental);

// // reset
// let res = document.querySelector('.res');
// let header = document.querySelector('h1');
// function reset(){
//    header. innerText=0;
// }
// res.addEventListener("click",reset);






























let dec = document.querySelector('.dec');
let inc = document.querySelector('.inc');
let res = document.querySelector('.res');
let h1 = document.querySelector("h1");


//function to update background color based on value
function updatebackgroundcolor() {
  if(parseInt(h1.innerText) < 0){
    document.body.style.backgroundColor= "red";

  }else if (parseInt(h1.innerText)===0){
    document.body.style.backgroundColor= "yellow";
    
  }else {
    document.body.style.backgroundColor= "green";
}
}
//decrease
function decremental(){
  h1.innerText--;
  updatebackgroundcolor();

}
dec.addEventListener("click", decremental);

//increase

function incremental(){
  h1.innerText++;;
  updatebackgroundcolor();

}
inc.addEventListener("click", incremental);

//reset
function reset(){
  h1.innerText=0;
  updatebackgroundcolor();
}
res.addEventListener("click", reset);