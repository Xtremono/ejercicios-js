// TODO: Write your gambling application here.
const cards = document.querySelectorAll("li.scratchcard")

cards.forEach((card) =>{
  card.addEventListener("click",() => {
    card.dataset.scratched = "true";
    card.innerText = card.dataset.amount;
  })
})
