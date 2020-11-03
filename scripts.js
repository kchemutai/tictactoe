let game = ()=>{
    const container = document.querySelector('.container')
    let displayedPlayer = document.querySelector('#player')
    let winningMessage = document.querySelector('.winning-message')
    let winningMessageText = document.querySelector('.winning-message-text')
    let restartButton = document.querySelector('.restartbutton')
    let currentPlayer = 'x'
    let board 
    board = ['','','','','','','','','']
    let render = () => {
        //create 9 divs and append to the board
        for(let i=0; i<9; i++){
            let grid = document.createElement('div')
            container.appendChild(grid)
        }
        
    }
    render()
    const squares = document.querySelectorAll('.container div')

    let restartGame  = () =>{
        currentPlayer = "X";
        board = ["", "", "", "", "", "", "", "", ""];
        render()
    }

    let handleClick = () =>{
        console.log(squares)
        squares.forEach(square => {
            square.addEventListener('click', clickedIndex)
        })
    }
    let clickedIndex = (e)=>{
        let  squaresArray = Array.from(squares)
        let index = squaresArray.indexOf(e.target)
        console.log(index)
        changePlayer()
        console.log(currentPlayer)
        displayedPlayer.innerHTML = currentPlayer
        addImage(e.target)
        board[index]=currentPlayer
        console.log(board)
        let winner = checkWin()
        if(winner){
            let message
            message = winner==='X'||winner==='O'? `${winner} Won`: winner ==='Tie'? 'Its a Draw':''
            winningMessageText.textContent = message
            winningMessage.classList.add('show')
        }
    }
    handleClick()

    let changePlayer = () =>{
        if(currentPlayer==='X'){
            currentPlayer='O';
        }
        else{
            currentPlayer='X'
        }
        return currentPlayer
    }
    let addImage = (element) => {
        if(currentPlayer === 'O'){
            element.classList.add('O')
        }
        else{
            element.classList.add('X')
        }
    }

    let checkWin=()=>{
        let winner = null
        let winningCombinations=[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        winningCombinations.forEach(combination =>{
            if(board[combination[0]] && board[combination[0]]===board[combination[1]] && board[combination[0]]===board[combination[2]]){
                winner=board[combination[0]]
            }    
        })
        return winner = winner? winner : board.includes('')? null: 'Tie'
        console.log(winner)
    }


}
document.addEventListener('DOMContentLoaded', game)