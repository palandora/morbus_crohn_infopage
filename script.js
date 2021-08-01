
function flipCard(){
    //get all cards
    const cards = document.querySelectorAll('.container_faces')

    cards.forEach(card =>{
        card.addEventListener('click',()=>{
            const innerCard = card.childNodes[1]
            const classes = innerCard.classList
            if(card.classList.contains('extended')){
                classes.contains('flipX') ? classes.remove('flipX') : classes.add('flipX')
            }else{
                classes.contains('flipY') ? classes.remove('flipY') : classes.add('flipY')
            }
        })
    })
}


flipCard()