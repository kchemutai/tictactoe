let game = ()=>{
    const board = document.querySelector('.container')
    let displayedPlayer = document.querySelector('#player')
    let currentPlayer = 'x'
    let render = () => {
        //create 9 divs and append to the board
        for(let i=0; i<9; i++){
            let grid = document.createElement('div')
            board.appendChild(grid)
        }
        
    }
    render()
    const squares = document.querySelectorAll('.container div')

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

    

}
document.addEventListener('DOMContentLoaded', game)