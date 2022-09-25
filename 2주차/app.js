const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    /* const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;


    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    } */
    h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);
/*
function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
 title.onclick = handleTitleClick; 이렇게도 가능함

window.addEventListener("resize", handleWindowResize);

*/