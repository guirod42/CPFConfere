function BuscarDadosAPI() {
  var cpfInput = document.getElementById('inputCPF').value;
  fetch('https://localhost:44306/api/Verificador?CPF=' + cpfInput)
    .then((response) => {
      return response.json();
    })
    .then((myContent) => {
      if (myContent['valido'] == false) {
        cpfOK.style.display = "none";
        msgSucesso.style.display = "none";
        msgErro.style.display = "block";
        respostaErro.innerHTML =  myContent['mensagem'];
      }
      else {
        cpfOK.style.display = "block";
        msgSucesso.style.display = "block";
        msgErro.style.display = "none";
      }
      CPFFormatado.innerHTML = myContent['cpf'];
      OrigemCPF.innerHTML = myContent['origem'];

      var data = new Date(myContent['dataHora']);
      var dataFormatada = `${padZero(data.getDate())}/${padZero(data.getMonth() + 1)}/${data.getFullYear()} ${padZero(data.getHours())}:${padZero(data.getMinutes())}:${padZero(data.getSeconds())}`;
      DataHora.innerHTML = dataFormatada;
    });
}

function padZero(num) {
  return num < 10 ? `0${num}` : num;
}

function Inicio() {
  cpfOK.style.display = "none";
  msgSucesso.style.display = "none";
  msgErro.style.display = "none";
}

window.onload = Inicio;