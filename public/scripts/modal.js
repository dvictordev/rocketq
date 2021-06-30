export default function Modal(){
    function open(){
        //funcionalide de atribuir a classe active da modal
        document.querySelector('.modal-wrapper').classList.add("active")
    }
    function close(){
        //funcionalide de excluir a classe active da modal
        document.querySelector('.modal-wrapper').classList.remove("active")
    }
    return{
        open,
        close
    }
}