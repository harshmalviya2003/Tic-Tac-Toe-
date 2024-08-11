let boxes = document.querySelectorAll(".box")

let resetbtn = document.querySelector("#reset")

let newGame = document.querySelector("#new-game")

let msgCon = document.querySelector(".msg-con")
let msg = document.querySelector("#msg")


let turn0 = true; // playerX,playerY

const winPattens =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame =()=>{
    turn0=true
    enableBox()
    msgCon.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("this is click");
        if (turn0){
            box.innerText="O";
            
            turn0 = false;

        }else{
            box.innerText="X";
            turn0 = true;
        }
        box.disabled =true;
        checkWinner();
    })

})


const disablebox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBox =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText =""
    }
}



const showWinner =(Winner)=>{
    msg.innerText =`congratulation , winner is ${Winner}`;
    msgCon.classList.remove("hide")
    disablebox()
        
}
     
const checkWinner=() =>{
    for (let patten of winPattens){
        let pos1val = boxes[patten[0]].innerText;
        let pos2val = boxes[patten[1]].innerText;
        let pos3val = boxes[patten[2]].innerText;

        if (pos1val !="" && pos2val!="" && pos3val!=""){
            if( pos1val === pos2val && pos2val===pos3val){
                console.log("winner", pos1val,)
                showWinner(pos1val)
            }
        }
    }

};

newGame.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)
