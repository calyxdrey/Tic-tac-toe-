let currentPlayer = 'X';
let gameBoard = Array(9).fill('');
let gameOver = false;

document.querySelectorAll('.cell').forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameOver || gameBoard[index] !== '') return;

        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;

        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
});

document.getElementById('reset-button').addEventListener('click', resetGame);

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const condition of winConditions) {
        if (gameBoard[condition[0]] === gameBoard[condition[1]] && gameBoard[condition[1]] === gameBoard[condition[2]] && gameBoard[condition[0]] !== '') {
            alert(`Player ${gameBoard[condition[0]]} wins!`);
            gameOver = true;
            return;
        }
    }

    if (!gameBoard.includes('')) {
        alert('It\'s a tie!');
        gameOver = true;
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = Array(9).fill('');
    gameOver = false;

    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}

