
    const container = document.querySelector('.container')
    let turnMessage = document.querySelector('#player')
    let winningMessage = document.querySelector('.winning-message')
    let winningMessageText = document.querySelector('.winning-message-text')
    let restartButton = document.querySelector('.restartbutton')
    let currentPlayer = 'X'
    let board 
    const squares = document.querySelectorAll('.container div')

    restartButton.addEventListener('click', startGame)
   
    function handleClick (e){
        squaresArray = [...squares]
        let index = squaresArray.indexOf(e.target)
        let div = squaresArray[index]

        //place mark
        placeMark(div, currentPlayer, index)

        //check for win
        let winner = check_Win_or_Draw()
        if(winner){
            showWinningMessage(winner)
        }
        else {
            // switch turns
            switchTurns()
        }



    }

    //places the mark on the board using index and adds an image to the div in the html
    function placeMark(element, currentPlayer, index){
        //place in UI
        element.classList.add(currentPlayer)

        //place in the board
        board[index] = currentPlayer

        console.log(board)
    }

    //changes players and updates the turns message
    function switchTurns(){
        currentPlayer = currentPlayer === 'X'? 'O':'X'
        turnMessage.innerHTML = `It is ${currentPlayer}'s Turn`
        return currentPlayer
    }

    //checks for a win and draw
    function check_Win_or_Draw(){
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
    }
    
    // shows the winning message in the UI
    function showWinningMessage(winner){
        let message
        message = winner==='X'||winner==='O'? `${winner} Won`: winner ==='Tie'? 'Its a Draw':''
        winningMessageText.textContent = message
        winningMessage.classList.add('show')
    }

    // starts the game and resets previous state
    function startGame(){
        board = ['','','','','','','','','']
        winningMessage.classList.remove('show')
        squares.forEach(square =>{
            square.classList.remove('O')
            square.classList.remove('X')
            square.removeEventListener('click', handleClick)
            square.addEventListener('click', handleClick, {once: true})
        })
    }
    
    startGame()
    