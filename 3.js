console.log("Welcome to Tic Tac Toe")
let music = new Audio("the-final-boss-battle-158700.mp3")
let audioTurn = new Audio("pop2-84862.mp3")
let gameover = new Audio("decidemp3-14575.mp3")
let turn = "x"
let isgameover = false;
// function to change the turn
const changeTurn = ()=>{
    return turn === "x"?"0":"x"
}
// function to check for a win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "" )){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.cssText = 'display:inline;'
              
            document.querySelector('.imgbox').getElementsByTagName('.img')[0].style.width="150px"
            // const imgEle = document.getElementById('imgbox')
            // imgEle.classList.remove('hide')
            isgameover=true
        }
    })

}
// game logic
music.play()
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext')
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.cssText = 'display:none;'
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameovergameover){
            document.getElementsByClassName("info")[0].innerText ="Turn for " + turn;
     
            }
        }
    })
})
// add on click listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.cssText = 'display:none;'

    Array.from(boxtexts).forEach(element=>{
           element.innerText=""
    });
    turn="x";
    isgameovergameover=false
        document.getElementsByClassName("info")[0].innerText ="Turn for " + turn;
        
        
})