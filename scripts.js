const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}
// Mon code pour activer les confettis et la carte lorsque le jeu prend fin
// Prend la carte depuis mon html
const bravo = document.getElementById("carte");
// Ajoute la classe cache, pour le cacher pendant le temps de jeu
bravo.classList.add('cache');
// Ajoute variable pour compter combien de match cartes ont rester retourner
let temp = 0;

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  // Ajoute 1 au temp lorsque 2 cartes matchs
  temp++;

// Lorsque temp est égale à 6, donc lorsque toutes le cartes sont retournées
if (temp == 6){
  //Carte bravo, enlève classe cache
  bravo.classList.remove('cache');
  // Met la carte en avant plan seulement lorsque c'est la fin du jeu
  bravo.classList.add('z-index');
  

  // Confettis
  const conteneurConfettis = document.getElementById('conteneur-confettis');
  // Met les confettis en avant plan lorsque fin du jeu
  conteneurConfettis.classList.add('z-index');
  /**
   * Fonction pour afficher les confettis
   */
  const AfficherConfettis = () => {
  // Création d'une div
  const confetti = document.createElement('div');
  // Met en forme de texte un emoji
  confetti.textContent = '✨';
  // Ajoute au confetti la classe confetti
  confetti.classList.add('confetti');
  // Met un chiffre aléatoire 
  confetti.style.left = Math.random() * innerWidth + 'px';
  //
  conteneurConfettis.appendChild(confetti);

  // Temps d'affichage des confettis
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  };

  // Temps d'affichage des confettis
  setInterval(() => {
    AfficherConfettis();
  }, 400);

}
  resetBoard();
}



function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));


// MON CODE AJOUTER

// Variables
const modal = document.getElementById("modal");
const boutonFermer = document.getElementById("bouton");
const texteClick = document.getElementById('nonFenetre');

/**
 * Affiche le dialogue si pas de clé, si une clé n'affiche pas
*/

if(localStorage.getItem('modalCacher') !== 'false'){
  modal.showModal();
}else{
  modal.close();
}

// if(window.Close){
//  localStorage.removeItem("modalCacher");
//}

/**
 * Lorsque click sur Ne plus afficher la fenêtre, elle va créer une clé
 * donc le dialogue ne se réaffichera pas, jusqu'à la fermeture de la fenêtre
 */
texteClick.addEventListener('click', () => {
  localStorage.setItem('modalCacher', 'false');
  modal.close();
});

/**
 * Lorsque le bouton est clicker, le dialogue se ferme
 */
boutonFermer.addEventListener('click', () => {
  modal.close();
});