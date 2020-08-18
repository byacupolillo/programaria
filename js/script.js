document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);

function validaFormulario(){
  if(document.getElementById("nameUser").value != "" && document.getElementById("userEmail").value != ""){
  alert("Tudo ok!");
  }else{
    alert("Preencha todos os campos!");
  }
}