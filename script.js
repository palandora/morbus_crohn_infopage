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
                console.log("...")
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


document.addEventListener('DOMContentLoaded', ()=>{
    flipCard()
})
