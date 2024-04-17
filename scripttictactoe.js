let currentPlayer = 'X';
const board = document.getElementById('gameBoard');
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', function() {
        if (cell.textContent === '') {
            cell.textContent = currentPlayer;
            if (checkWin()) {

                setTimeout( alert(${currentPlayer} wins!), 2000 )
                resetBoard();
            } else if (isBoardFull()) {
                alert("It's a draw!");
                resetBoard();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWin() {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // lignes
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colones
        [0, 4, 8], [2, 4, 6]             // diagonales
    ];

    for (let i = 0; i < winCombinations.length; i++) {
        const [a, b, c] = winCombinations[i];
        if (cells[a].textContent === currentPlayer &&
            cells[b].textContent === currentPlayer &&
            cells[c].textContent === currentPlayer) {
            return true;
        }
    }
    return false;
}

function isBoardFull() {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === '') {
            return false;
        }
    }
    return true;
}

function resetBoard() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
    currentPlayer = 'X';
}