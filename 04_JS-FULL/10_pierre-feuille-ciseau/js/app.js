
// on a attendu le chargement de la page
document.addEventListener("DOMContentLoaded", function() {

  let playerScore = 0;
  let computerScore = 0;
  const SCORE = document.getElementById("score");
  const CHOICES = document.querySelectorAll(".choice");
  const PLAYER_RESULT = document.getElementById("playerResult");
  const COMPUTER_RESULT = document.getElementById("computerResult");
  const MESSAGE = document.getElementById("message");

  // choix
  const choices = ["pierre", "feuille", "ciseaux"];
  const choiceIcons = {
    pierre : "fas fa-hand-rock",
    feuille : "fas fa-hand-paper",
    ciseaux : "fas fa-hand-scissors",
  };

  function getComputerChoice() { // il me retourne l'icon du choix

    const randomIndex = Math.floor(Math.random() * choices.length );
    return choices[randomIndex]; // ça vous renvoit pierrre - feuille ou ciseaux

  }

  function determineWinner(playerChoice, computerChoice) {

    if(playerChoice == computerChoice) {
      return "Egalité !";
    }

    if(
      (playerChoice == "pierre" && computerChoice == "ciseaux") ||
      (playerChoice == "feuille" && computerChoice == "pierre") ||
      (playerChoice == "ciseaux" && computerChoice == "feuille")
    ) {

      playerScore++;
      return "Tu gagnes !";

    } else {
      computerScore++;
      return "L'ordinateur gagne !";
    }

  }

  function updateScore() {

    SCORE.textContent = `Score : Joeur ${playerScore} - Ordinateur ${computerScore}`;

  }

  // capter l'événement click sur mes icons choice

  CHOICES.forEach(function(choice){

    choice.addEventListener("click", function() {

      const playerChoice = this.getAttribute("data-choice"); // pierre feuille ciseaux
      const computerChoice = getComputerChoice();

      PLAYER_RESULT.innerHTML = `<i class='${choiceIcons[playerChoice]}'> </i>`; // ici je récupère le code de l'icon / dans playerChoice j'ia pierre feuille ou cieau
      COMPUTER_RESULT.innerHTML = `<i class='${choiceIcons[computerChoice]}'> </i>`;

      setTimeout(function() {
        const resultMessage = determineWinner(playerChoice, computerChoice);
        MESSAGE.textContent = resultMessage;
        updateScore();
      }, 1000);

    });

  });

});