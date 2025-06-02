function getComputerChoice(){
    let rand=Math.floor(Math.random()*3)+1
    let pcChoice
    switch (pcChoice) {
        case rand = 1:
            pcChoice = "Rock"
            break;
        case rand = 2:
            pcChoice = "Paper"
            break;
        case rand = 3:
            pcChoice = "Scissors"
        break;   
    }
    return pcChoice
}

