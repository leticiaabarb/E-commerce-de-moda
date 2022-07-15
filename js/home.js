
function validaBuscar() {
    if (document.querySelector("#q").value == "") {
        alert("O campo não pode ficar em branco")
        return false;
    }
}

document.querySelector("#form-busca").onsubmit = validaBuscar; 


