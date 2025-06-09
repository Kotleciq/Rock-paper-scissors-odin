
startButton = document.querySelector('#start')
let humanScore  = 0
let computerScore = 0
let humanScoreDisplay = document.getElementById('hScore')
let computerScoreDisplay = document.getElementById('cScore')


// gets random number from math.random from 1-3 and then assigns rock paper scissors
function getComputerChoice(){
    let rand = Math.floor(Math.random()*3)+1
    if(rand == 1)pcChoice = 'rock'
    if(rand == 2)pcChoice = 'paper'
    if(rand == 3)pcChoice = 'scissors'
    
    return pcChoice
}

function handleClick(){
    
    if(!gameOver())playRound()
}

function isGameover(){
    if (humanScore === 5||computerScore === 5) return true;
    else return false
}

//gets a choice from user by prompt
function getHumanChoice(){
    let humanChoice
    let keepGoing = true
    humanChoice = prompt("What do you choose ? \n (rock, paper, scissors)").toLowerCase()
    if (humanChoice =='rock'||humanChoice =='paper'||humanChoice =='scissors') {
            keepGoing = false
        }

    while (keepGoing) {
        
        if (humanChoice !='rock'||humanChoice !='paper'||humanChoice !='scissors') {
            humanChoice = prompt("You need to pick one of these: rock, paper, scissors").toLowerCase() 
            
        }
        if(humanChoice =='rock'||humanChoice =='paper'||humanChoice =='scissors'){
            
            keepGoing = false
        }
    }
    return humanChoice
}

function gameOver(){

}


function playRound(){
    
    

        let hc = getHumanChoice()//human choice
        let cc = getComputerChoice()//computer choice 
        let result
        
        if((hc == 'rock' && cc =='rock') || (hc == 'paper' && cc =='paper')|| (hc == 'scissors' && cc =='scissors'))
        {
            result = "tie"
        }
        
        if((hc == 'rock' && cc =='scissors')||(hc == 'paper' && cc =='rock')||(hc == 'scissors' && cc =='paper'))
        {
            result = "human"
        }
        if((hc == 'rock' && cc =='paper')||(hc == 'paper' && cc =='scissors')||(hc == 'scissors' && cc =='rock'))
        {
            result = "computer"
        }


        if(result == 'human')    
        {

            humanScoreDisplay.textContent = parseInt(humanScoreDisplay.textContent) + 1
            humanScore = parseInt(humanScoreDisplay.textContent)
        }
        if(result == 'computer')
        {
            computerScoreDisplay.textContent = parseInt(computerScoreDisplay.textContent) +1
            computerScore = parseInt(computerScoreDisplay.textContent)
        }
        if(result == 'tie'){
            alert('its a tie !!!')
        }
        if(isGameover()){
            if(humanScore == 5)alert('you won')
            else alert('you lost')
        document.querySelector('.gameover').style.display = 'block'
        humanScoreDisplay.textContent = 0
        computerScoreDisplay.textContent = 0
        console.log(humanScore+computerScore);
        
        }
    
    
    
}


startButton.addEventListener("click", handleClick)
