const button = document.querySelector("#boton");
const button2 = document.querySelector("#boton2")
// A partir de ahora es un NODO => objetos

button.addEventListener("click",()=>{
  button.innerText = "JT";
  button.disabled = true;
  button.classList.remove("btn-primary");
  button.classList.add("btn-success");
})
// click me, desabilita, color verde
 //html boton nuevo negro y queda desactivado
button2.addEventListener("click",()=>{
  button.disabled = false;
  button.classList.remove("btn-success");
  button.classList.add("btn-primary");
  button.innerText = "Click me"
})
