for(var i = 0; i <14; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        var text= this.innerHTML;
        console.log(text);
        audioPlay(text)

        
    });
}

function audioPlay(text){
    switch(text){
        case "A":
            var audio=new Audio("sounds/a.mp3");
            audio.play();
            break;
        case "B":
            var audio=new Audio("sounds/b.mp3");
            audio.play();
            break;
        case "C":
            var audio=new Audio("sounds/c.mp3");
            audio.play();
            break;
        case "D":
            var audio=new Audio("sounds/d.mp3");
            audio.play();
            break;
        case "E":
            var audio=new Audio("sounds/e.mp3");
            audio.play();
            break;
        case "F":
            var audio=new Audio("sounds/f.mp3");
            audio.play();
            break;
        case "G":
            var audio=new Audio("sounds/g.mp3");
            audio.play();
            break;
        case "H":
            var audio=new Audio("sounds/h.mp3");
            audio.play();
            break;
        case "I":
            var audio=new Audio("sounds/i.mp3");
            audio.play();
            break;
        case "J":
            var audio=new Audio("sounds/j.mp3");
            audio.play();
            break;
        case "K":
            var audio=new Audio("sounds/k.mp3");
            audio.play();
            break;
        case "L":
            var audio=new Audio("sounds/l.mp3");
            audio.play();
            break;

    }
    
}

