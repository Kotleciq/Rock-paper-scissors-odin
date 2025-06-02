
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

    switch (result) {
        case hc == 'rock' && cc =='rock':
            break;
    
        case hc == 'rock' && cc =='paper':
            result = "computer"
            break;
        case hc == 'rock' && cc =='scissors':
            result = "human"
            break;
        case hc == 'paper' && cc =='rock':
            result = "human"
            break;
        case hc == 'paper' && cc =='paper':
            break;
        case hc == 'paper' && cc =='scissors':
            result = "computer"
            break;
        case hc == 'scissors' && cc =='rock':
            result = "computer"
            break;
        case hc == 'scissors' && cc =='paper':
            result = "human"
            break;
        case hc == 'scissors' && cc =='scissors':
            
            break;
    }
    
// wziac value z humanscore ktore jest w stringu zparsowac do inta dodac 1 nastepnie zparsowac do stringa i przypisac

    if(result = 'human')    
    {
           
        humanscore.textContent = toString(parseInt(humanscore.textContent) +1)
        

    }
    else if(result = 'computer')
    {
        
        computerscore.textContent = toString(parseInt(computerscore.textContent) +1)
    }
    else{
        alert('its a tie !!!')
    }
}


startButton.addEventListener("click", playTheGame)
