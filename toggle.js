const button = document.querySelector("#button");
const heading = document.querySelector("h1")
button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    heading.classList.toggle("yellow");
    // toggle equal to turn on and off switch
});