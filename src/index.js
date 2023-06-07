const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // TODO: write some code here

      let counterPairsClicked = memoryGame.pairsClicked;
      let counterPairsGuessed = memoryGame.pairsGuessed;

      //push card
      memoryGame.pickedCards.push(card);

      /// add new class --> now we have the image facing forward
      card.classList.add("turned");

      // If it's pair ...
      if (memoryGame.pickedCards.length === 2) {
        // Check if pair
        let pairCheck = memoryGame.checkIfPair(
          memoryGame.pickedCards[0],
          memoryGame.pickedCards[1]
        );

        if (pairCheck === true) {
          memoryGame.pickedCards.forEach((card) =>
            card.classList.add("blocked")
          );
          memoryGame.checkIfFinished();
        } else {
          card.classList.remove("turned");
          memoryGame.pickedCards = [];
        }
      }
      // if (
      //   memoryGame.checkIfPair(
      //     memoryGame.pickedCards[0],
      //     memoryGame.pickedCards[1]
      //   ) === true
      // ) {
      //   // Add class blocked
      //   card.classList.add("blocked");

      //   //Check if Finished
      //   memoryGame.checkIfFinished();
      // } else {
      //   //remove turned
      //   card.classList.remove("turned");
      //   memoryGame.pickedCards = [];
      // }

      // Check

      //Update score
      let pairsClicked = document.querySelector("#pairs-clicked");
      pairsClicked.textContent = `${counterPairsClicked}`;

      let pairsGuessed = document.querySelector("#pairs-guessed");
      pairsGuessed.textContent = `${counterPairsGuessed}`;

      console.log(`Card clicked: ${card}`);
    });
  });
});
