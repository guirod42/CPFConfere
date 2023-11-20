function BuscarDadosAPI() {
  var cpfInput = document.getElementById('inputCPF').value;
  var msg = document.getElementById('Mensagem').value;
  fetch('https://localhost:44306/api/Verificador?CPF=' + cpfInput)
      .then((response) => {
          return response.json();
      })
      .then((myContent) => {
          if (myContent['valido'] == false) {
              cpfOK.style.display = "none";
          }
          else {
              cpfOK.style.display = "block";          
          }
          CPFFormatado.innerHTML = myContent['cpf'];
          OrigemCPF.innerHTML = myContent['origem'];
      });
}

function Inicio() {
  cpfOK.style.display = "none"
}

window.onload = Inicio;