
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
                }else{
                    setTimeout(()=>{frontFace.style.display = "none"}, 500) 
                    classListFaces.add('flipX')
                }
            }else{
                classListFaces.contains('flipY') ? classListFaces.remove('flipY') : classListFaces.add('flipY')
            }

        }
        
    })
}


document.addEventListener('DOMContentLoaded', ()=>{
    flipCard()
})
