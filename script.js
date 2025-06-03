
startButton = document.getElementById('start')

// gets random number from math.random from 1-3 and then assigns rock paper scissors
function getComputerChoice(){
    let rand = Math.floor(Math.random()*3)+1
    if(rand == 1)pcChoice = 'rock'
    if(rand == 2)pcChoice = 'paper'
    if(rand == 3)pcChoice = 'scissors'
    
    return pcChoice
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

function playTheGame(){
    let hc = getHumanChoice()//human choice
    let cc = getComputerChoice()//computer choice 
    let result = 'tie'
    

    

    let humanscore = document.getElementById('hScore')
    let computerscore = document.getElementById('cScore')

    
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
        humanscore.textContent = parseInt(humanscore.textContent) + 1
    }
    if(result == 'computer')
    {
        computerscore.textContent = parseInt(computerscore.textContent) +1
    }
    else{
        alert('its a tie !!!')
    }
}


startButton.addEventListener("click", playTheGame)
