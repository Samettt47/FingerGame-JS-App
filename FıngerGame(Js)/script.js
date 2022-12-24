var myGuess = document.querySelector("#myGuess");
var computerGuess = document.querySelector("#computerGuess");
var skor = document.querySelector("#skor");

var score = 3 ; 

var myNum,PcNum ;

function CreateMyGuess(){
    myNum = 0;
    
    while(myNum <= 0){
        myNum = Math.round(Math.random()*5); //mathrandom metodu 0ile 1 arasında bir sayı üretir 5 ile çarpınca int olarak 1 ila 5 arasında sayı uretıcek
    }

    switch(myNum){
        case 1: myGuess.style.backgroundImage = "url(img1.png)";
        break;
        case 2: myGuess.style.backgroundImage = "url(img2.png)";
        break;
        case 3: myGuess.style.backgroundImage = "url(img3.p)ng)";
        break;
        case 4: myGuess.style.backgroundImage = "url(img4.png)";
        break;
        case 5: myGuess.style.backgroundImage = "url(img5.png)";
        break;
    }
}
function CratePcGuess(){
    PcNum = 0;
    
    while(PcNum <= 0){
        PcNum = Math.round(Math.random()*5)   //mathrandom metodu 0ile 1 arasında bir sayı üretir 5 ile çarpınca int olarak 1 ila 5 arasında sayı uretıcek
    }

    switch(PcNum){
        case 1: computerGuess.style.backgroundImage = "url(img1.png)";
        break;
        case 2: computerGuess.style.backgroundImage = "url(img2.png)";
        break;
        case 3: computerGuess.style.backgroundImage = "url(img3.png)";
        break;
        case 4: computerGuess.style.backgroundImage = "url(img4.png)";
        break;
        case 5: computerGuess.style.backgroundImage = "url(img5.png)";
        break;
    }

    if(PcNum < myNum ){
        score++;
        skor.innerHTML = "Skorunuz : " + score;

    }
    else if(PcNum == myNum){
        skor.innerHTML = "Skorunuz : " + score;
        
    }
    else {
        score--;
        skor.innerHTML = "Skorunuz  : "  + score;
        if (score<= 0 ){
            alert("Malesef Kaybettiniz");
        }
    }

}