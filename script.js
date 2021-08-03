function setOverlay(show,htmlEl){
    if(show){
        htmlEl.style.zIndex = "2"
        document.body.classList.add('hide')
    }else{
        htmlEl.style.zIndex = "0"
        document.body.classList.remove('hide')
    }
}

function flipCard(){
    document.addEventListener('click', e =>{
        const currentElement = e.target
        if(!currentElement.matches('.fab')){
            return
        }else{
            const faces = currentElement.parentNode.parentNode
            const frontFace = faces.querySelector('.front_face')
            const classListFaces = faces.classList
            const container = faces.parentNode

            if(container.classList.contains('extended')){
                if(classListFaces.contains('flipX')){
                    frontFace.style.display = "block"
                    classListFaces.remove('flipX')
                    setOverlay(false, faces)
                }else{ 
                    setTimeout(()=>{frontFace.style.display = "none"}, 500) 
                    classListFaces.add('flipX')
                    setOverlay(true, faces)
                }
            }else{
                if(classListFaces.contains('flipY')){
                    classListFaces.remove('flipY')
                    setOverlay(false, faces)
                }else{
                    classListFaces.add('flipY')
                    setOverlay(true, faces)
                }
            }
        }
    })
}

function fadeInCards(){
    const cards = document.querySelectorAll('.container_faces')
    const options = {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px 180px 0px"
    };
    const observer = new IntersectionObserver((entries,observer)=>{
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return
            }
            entry.target.style.top =  "0px"
            entry.target.style.opacity =  "1"
            //after faded in card -> start animation within card
                //add class active to card? --> !!needs to be the same for every class!!  
                    // all value set to dest val as soon as class is added 
            observer.unobserve(entry.target)
        })
    },options)

    cards.forEach(card=>{
        observer.observe(card)
        
    })

}

document.addEventListener('DOMContentLoaded', ()=>{
    flipCard()
    fadeInCards()
})

