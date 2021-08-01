
function flipCard(){
    //get all cards
    let flippedD = false;
    let flippedC = false; 
    const card_diarrhea = document.querySelector('.diarrhea');
    const card_cases = document.querySelector('.cases');
    console.log(card_cases.childNodes[1])
    const innerCard = card_diarrhea.childNodes[1];

    card_diarrhea.addEventListener('click',()=>{
        if(!flippedD){
            console.log("-")
            innerCard.style.transform = "perspective(800px) rotateY(180deg)"
            flippedD = true
        }else{
            innerCard.style.transform = "perspective(800px) rotateY(0deg)"
            flippedD = false
        }
        
    });
    card_cases.addEventListener('click', ()=>{
        
        card_cases.childNodes[1].classList.contains('flipX') ? card_cases.childNodes[1].classList.remove('flipX') :card_cases.childNodes[1].classList.add('flipX');  
            

    })
}


flipCard()