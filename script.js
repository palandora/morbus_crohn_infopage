
function flipCard(){
    //get all cards
    let flipped = false;
    const card_diarrhea = document.querySelector('.diarrhea');
    const innerCard = card_diarrhea.childNodes[1];

    card_diarrhea.addEventListener('click',()=>{
        if(!flipped){
            console.log("-")
            innerCard.style.transform = "perspective(800px) rotateY(180deg)"
            flipped = true
        }else{
            innerCard.style.transform = "perspective(800px) rotateY(0deg)"
            flipped = false
        }
        
    });
}


flipCard()