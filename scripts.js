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
const bravo = document.getElementById("carte");
bravo.classList.add('cache');
let temp = 0;
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  temp++;


if (temp == 6){
  //Carte bravo
  bravo.classList.remove('cache');
  bravo.classList.add('affiche');
  bravo.classList.add('z-index');
  

  // Confettis
  const conteneurConfettis = document.getElementById('conteneur-confettis');
  conteneurConfettis.classList.add('z-index');
  const AfficherConfettis = () => {
  const confetti = document.createElement('div');
  confetti.textContent = '✨';
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * innerWidth + 'px';
  conteneurConfettis.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  };

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
 * Pour afficher le dialog à la suite d'une clé: 
 * localStorage.removeItem("modalCacher");
 */

if(localStorage.getItem('modalCacher') !== 'false'){
  modal.showModal();
}else{
  modal.close();
}

/**
 * Lorsque click sur Ne plus afficher la fenêtre, elle va créer une clé
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






 



///// Confetti 2
/*const canva = document.getElementById("confetti");
const contexte = canvas.getContext('2d');
const pieces = [];
let nbPieces = 50;


function MiseAJour(){

  setTimeout(Update, 1);
}


function Dessiner(){

  requestAnimationFrame(Dessiner);
}


function Piece (x, y){

  this.x = x;
  this.y = y;
  this.taille = (Math.random() * 0.5 + 0.75) * 15;
  this.gravite = (Math.random() * 0.5 + 0.75) * 0.01;
  this.rotation = (Math.PI * 2) * Math.random();
  this.rotationVitesse = (Math.PI * 2) * Math.random() * 0.001;
}

while (pieces.length < nbPieces){
  pieces.push(new Piece(Math.random() * canvas.width, Math.random() * canvas.height));
}


MiseAJour();
Dessiner();*/