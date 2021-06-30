import Modal from './modal.js';

const modal = Modal()

//pega todos os botões com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");
const cancelButton = document.querySelector('.modal .button');
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const confirmButton = document.querySelector('.modal .red')


/* checkButtons.forEach(button => {
    //adicionar o eventlistener
    button.addEventListener("click", event => {
        modalTitle.innerHTML = "Marcar como lida"
        modalDescription.innerHTML = "Tem certeza que deseja marcar como lida ?"
        confirmButton.innerHTML = "Sim, Marcar como lida"
        modal.open()
    })
})
*/
cancelButton.addEventListener("click", event => {
    modal.close()
})
 


//quando o botao delete for clicado ele abre o modal
const trashButton = document.querySelectorAll('.actions a.delete')

/* trashButton.forEach(button => {
    
    button.addEventListener('click', event => {
        modalTitle.innerHTML = "Excluir essa pergunta"
        modal.open()
    })
}) */

// i can do like this, those things above
//when check button gets clicked
checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})


//when delete button gets clicked
trashButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})



//create a function that clicks to check or delete
function handleClick(event, check= true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal form')
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML =`Tem certeza que deseja ${text.toLowerCase()} lida`
    confirmButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? confirmButton.classList.remove('red') : confirmButton.classList.add('red')
    //abre a modal
    modal.open()
}