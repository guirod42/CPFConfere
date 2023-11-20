document.querySelector('button').addEventListener('click', function () {
    fetch('https://localhost:44306/api/Verificador?CPF=11634098633')
      .then((response) => {
        return response.json();
      })
      .then((myContent) => {
        CPFFormatado.innerHTML = myContent['cpf'];
      });
  }, false);