function BuscarDadosAPI() {
    var cpfInput = document.getElementById('inputCPF').value;
  
    const response = {
      "dataHora": "2023-11-24T19:26:30.1349618-03:00", /* Aprovetar este valor, para testar formatação */
      "valido": true,
      "cpf": "116.340.986-33",
      "origem": "Minas Gerais",
      "mensagem": ""
    }

    /* Exemplo de resposta quando a verificação retornar que não é válido
    const response = {
        "dataHora": "2023-11-24T19:26:30.1349618-03:00",
        "valido": false,
        "cpf": null
        "origem": null
        "mensagem": "Mensagem de erro personalizada que a API retorna da validação"
    }
    */
  
    data = JSON.parse(JSON.stringify(response));
    /*fetch('https://localhost:44306/api/Verificador?CPF=' + cpfInput)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
    */
    if (data['valido'] == false) {
      cpfOK.style.display = "none";
      msgSucesso.style.display = "none";
      msgErro.style.display = "block";
      respostaErro.innerHTML = data['mensagem'];
    }
    else {
      cpfOK.style.display = "block";
      msgSucesso.style.display = "block";
      msgErro.style.display = "none";
    }
    CPFFormatado.innerHTML = data['cpf'];
    OrigemCPF.innerHTML = data['origem'];
  
    var data = new Date(data['dataHora']);
    var dataFormatada = `${padZero(data.getDate())}/${padZero(data.getMonth() + 1)}/${data.getFullYear()} ${padZero(data.getHours())}:${padZero(data.getMinutes())}:${padZero(data.getSeconds())}`;
    DataHora.innerHTML = dataFormatada;
    /*
    });
  */
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