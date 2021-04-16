const retornaEndereço = (dados) => ({
    rua: dados.logradouro,
    bairro: dados.bairro,
    cidade: dados.localidade,
    estado: dados.uf
  });
  
  const buscaEndereço = async (cep) => fetch(`https://viacep.com.br/ws/${cep}/json/`, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => retornaEndereço(data))
    .catch((error) => error);
  
  export default buscaEndereço;