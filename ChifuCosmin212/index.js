let patrate = document.querySelectorAll(".patrat");
let player = "X";
let finished = false;
function win(castigator){
    setTimeout(() => {
        alert(castigator + " a castigat")
        finished = true;
    }, 50);

}
for (let i = 0; i<patrate.length;i++){
    patrate[i].addEventListener("click",function(){
        if (finished == true){
            return;
        }
        if (patrate[i].textContent == ""){
            patrate[i].textContent = player;
            if (player == "X"){
                player = "O";
            }
            else 
                player = "X";
        }
        
        if (patrate[0].textContent == patrate[1].textContent && patrate[1].textContent == patrate [2].textContent && patrate[0].textContent != ""){
            win(patrate[0].textContent);
        }
        if (patrate [3].textContent == patrate[4].textContent && patrate[4].textContent == patrate[5].textContent && patrate[3].textContent != ""){
            win(patrate[3].textContent);
        }
        if (patrate [6].textContent == patrate[7].textContent && patrate[7].textContent == patrate[8].textContent && patrate[6].textContent != ""){
            win(patrate[6].textContent);
        }
        if (patrate[0].textContent == patrate[3].textContent && patrate[3].textContent == patrate[6].textContent && patrate[0].textContent != ""){
            win(patrate[0].textContent);
        }
        if(patrate[1].textContent == patrate[4].textContent && patrate[4].textContent == patrate[7].textContent && patrate[1].textContent != ""){
            win(patrate[1].textContent);
        }
        if(patrate[2].textContent==patrate[5].textContent && patrate[5].textContent  ==patrate[8].textContent && patrate[2].textContent != ""){
            win(patrate[2].textContent);
        }
        if(patrate[0].textContent==patrate[4].textContent && patrate[4].textContent  ==patrate[8].textContent && patrate[0].textContent != ""){
            win(patrate[0].textContent);
        }
        if(patrate[2].textContent==patrate[4].textContent && patrate[4].textContent==patrate[6].textContent && patrate[2].textContent != ""){
            win(patrate[2].textContent);
        }
    })
}
let replay = document.querySelector(".replay");
replay.addEventListener("click",function(){
    location.reload();
})