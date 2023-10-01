

'use strict'

const createNotes=document.querySelector('.create-btn')
const notesContainer=document.querySelector('.notes-container')
let notes=document.querySelectorAll('.input-box')

function showNotes(){
notesContainer.innerHTML=localStorage.getItem('notes')

}

window.addEventListener('DOMContentLoaded',showNotes);

function updateStorage(){
    localStorage.setItem('notes',notesContainer.innerHTML)
}





//for creating new box
createNotes.addEventListener('click',createNewNotes)

//for deleting the box
notesContainer.addEventListener('click',deleteBox)

function createNewNotes(){
const p=document.createElement('p')
const img=document.createElement('img')
p.className='input-box'
p.setAttribute('contenteditable','true')
img.className='trash-btn'
img.src='trash.png';
notesContainer.appendChild(p).appendChild(img);
}


function deleteBox(e){
if(e.target.tagName==='IMG'){
    e.target.parentElement.remove();
    updateStorage();
}else if(e.target.tagName==='P'){
    notes=document.querySelectorAll('.input-box')
    notes.forEach(nt=>{
        nt.onkeyup=function(){
            updateStorage()
        }
    })
}
}


document.addEventListener('keydown',e=>{
    if(e.key==='Enter'){
        document.execCommand('insertLineBreak')
        e.preventDefault()
    }
})