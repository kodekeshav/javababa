const buttons = document.querySelectorAll(".box")
const body = document.querySelector("body");

buttons.forEach((button) => {
console.log(button)
button.addEventListener("click", (e) => {
   console.log(e)
   console.log(e.target)
   if (e.target.id === "red") {
    body.style.backgroundColor = "#ff595e";
   }
   if (e.target.id === "blue") {
    body.style.backgroundColor = "#1982c4";
   }
   if (e.target.id === "green") {
    body.style.backgroundColor = "#8ac926"
   }
   if (e.target.id === "yellow") {
    body.style.backgroundColor = "#ffca3a";
   }
   if (e.target.id === "purple") {
    body.style.backgroundColor = "#6a4c93";
   }
})})