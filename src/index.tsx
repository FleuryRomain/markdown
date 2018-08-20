import {h, render} from 'preact'

let textareas = document.querySelectorAll('textarea.mdeditor') as NodeListOf<HTMLTextAreaElement>

textareas.forEach(function(textarea){
    let value = textarea.value
    let name = textarea.getAttribute('name')
    let div = document.createElement('div')
    if(textarea.parentNode){
        textarea.parentNode.replaceChild(div, textarea)
        render(<div>Salut</div>,div)
    }    
})