


    //#SELECT elements//
//##SELECT buttons
    //###Home buttons
const buttonH1 = document.querySelectorAll("button.home.add1");
const buttonH2 = document.querySelectorAll("button.home.add2");
const buttonH3 = document.querySelectorAll("button.home.add3");
    //###Guest buttons
const buttonG1 = document.querySelectorAll("button.guest.add1");
const buttonG2 = document.querySelectorAll("button.guest.add2");
const buttonG3 = document.querySelectorAll("button.guest.add3");


//##SELECT displayed score
const displayPointsH = document.querySelector(".display_points_text.H");
const displayPointsG = document.querySelector(".display_points_text.G");


//#GLOBAL variable
let scoreG = 0;
let scoreH = 0;



buttonH1.forEach(buttonH1 => buttonH1.addEventListener('click',() => {
     scoreH ++ ;
     displayPointsH.textContent = scoreH;
 }));

 buttonH2.forEach(buttonH2 => buttonH2.addEventListener('click',() => {
     console.log(buttonH2)
     scoreH += 2;
     displayPointsH.textContent = scoreH;
 }));

buttonH3.forEach(buttonH3 => buttonH3.addEventListener('click',() => {
    scoreH += 3;
    displayPointsH.textContent = scoreH;
}));


 buttonG1.forEach(buttonG1 => buttonG1.addEventListener('click',() => {
     scoreG ++ ;
     displayPointsG.textContent = scoreG;
 }));

 buttonG2.forEach(buttonG2 => buttonG2.addEventListener('click',() => {
     scoreG += 2;
     displayPointsG.textContent = scoreG;
 }));

buttonG3.forEach(buttonG3 => buttonG3.addEventListener('click',() => {
     scoreG += 3;
     displayPointsG.textContent = scoreG;
 }));





