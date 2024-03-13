const btnChangeColor = document.getElementById("btnChangeColor");
const heading = document.querySelector(".heading");

btnChangeColor.addEventListener("click", () => {
    let color = document.getElementById("colorPicker").value;
    let headingColor = "white";
    document.body.style.backgroundColor = color;
    heading.style.color = headingColor; 
});
