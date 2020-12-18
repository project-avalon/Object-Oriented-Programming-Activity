const section = document.querySelector('section');

let para1 = document.createElement('h2');
let para2 = document.createElement('h1');

let motherInfo = `The Mother Called`;
let kittenInfo ='';

fetch("./sample.json")
.then(function (resp){
  return resp.json();
})
.then(function(data){
  console.log(data);
});


function displayCatInfo(catString) {
  let total = 0;
  let male = 0;


  
// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
 
}
section.appendChild(para1);
section.appendChild(para2);



