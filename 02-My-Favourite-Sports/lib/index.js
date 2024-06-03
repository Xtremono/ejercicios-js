// TODO: write your code here!
const buttons = document.querySelectorAll(".clickable");

buttons.forEach((button) =>{
  button.addEventListener("click", () =>{
   button.classList.toggle("active");
  })
})
