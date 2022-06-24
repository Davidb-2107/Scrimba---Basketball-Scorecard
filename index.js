
const containerH = document.querySelector("#container-home"); //reference the div container
const containerG = document.querySelector("#container-guest")


containerH.addEventListener("click", (e) => {
    const displayPointsH = document.querySelector(".display_points_text.H");
    let scoreH = 0;
    let target = e.target.classList;
    const targetContH = target.contains("home");

    if (target.contains("add1") && targetContH) {
        scoreH ++ ;
    } else if (target.contains("add2") && targetContH) {
        scoreH += 2;
        
    } else if (target.contains("add3") && targetContH) {
        scoreH += 3;
        
    };
    displayPointsH.textContent = scoreH;
});

containerG.addEventListener("click", (e) => {
    const displayPointsG = document.querySelector(".display_points_text.G");
    let scoreG = 0;
    let target = e.target.classList;
    console.log(e.target)
    const targetContG = target.contains("guest");

    if (target.contains("add1") && targetContG) {
        scoreG ++ ;
    } else if (target.contains("add2") && targetContG) {
        scoreG += 2;
        
    } else if (target.contains("add3") && targetContG) {
        scoreG += 3;
        
    };
    displayPointsG.textContent = scoreG;
});





