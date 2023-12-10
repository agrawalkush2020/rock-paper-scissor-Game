let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIndex=Math.floor(Math.random() * 3);
    return options[randIndex];
}

const drawGame=()=>{
    msg.innerText="Game was Drawn, Play again !!";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock" && compChoice==="paper") userWin=false;
        else if(userChoice==="paper" && compChoice==="scissor") userWin=false;
        else if(userChoice==="scissor" && compChoice==="rock") userWin=false;
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})