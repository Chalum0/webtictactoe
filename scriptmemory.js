// script.js
document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('gameBoard');
    const symbols = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
    let selectedCards = [];
    let matchedCount = 0;

    // Shuffle function
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Initialize the game
    function init() {
        shuffle(symbols);
        symbols.forEach(symbol => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.textContent = symbol;
            card.addEventListener('click', () => flipCard(card));
            board.appendChild(card);
        });
    }

    function flipCard(card) {
        if (card.classList.contains('flipped') || selectedCards.length === 2) {
            return;
        }

        card.classList.add('flipped');
        selectedCards.push(card);

        if (selectedCards.length === 2) {
            checkMatch();
        }
    }

    function checkMatch() {
        const [firstCard, secondCard] = selectedCards;

        if (firstCard.textContent === secondCard.textContent) {
            matchedCount += 2;
            selectedCards = [];
            if (matchedCount === symbols.length) {
                alert("You win!");
                flipCard()
            }
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                selectedCards = [];
            }, 1000);
        }
    }

    init();
});
