import styled from 'styled-components';

import colors from '../helpers/colors';

function SobreProjeto() {
  return (
    <Container>
      <LeftBody>
      <div>
        <TitleGrid>Containers:</TitleGrid>
        <Box>
          <SubtitleGrid>PaginaBase.js:</SubtitleGrid>
          <Box>Contém a pagina base do projeto(Cabeçalho e MenuLateral)</Box>
          <SubtitleGrid>MenuLateral.js:</SubtitleGrid>
          <Box>Contém a imagem logo e os itens do menu lateral</Box>
          <SubtitleGrid>ItensdoMenuLateral.js:</SubtitleGrid>
          <Box>Contém os itens do menu lateral e a lógica de hooks para alterar a cor do item selecionado</Box>
          <SubtitleGrid>PaginaInicial.js:</SubtitleGrid>
          <Box>Contém as divs da introdução e as imagens</Box>
          <SubtitleGrid>Ferramenta.js:</SubtitleGrid>
          <Box>Contém a logo do projeto, o campo para digitar o cep e o botão de enviar </Box>
          <SubtitleGrid>SobreProjeto.js:</SubtitleGrid>
          <Box>Contém as divs de explicação do projeto</Box>
          <SubtitleGrid>SobreMim.js:</SubtitleGrid>
          <Box>Contém os cards com informações sobre mim, a faculdade em que estudo e a empresa em que trabalho</Box>
        </Box>
      </div>
        <div>
        <TitleGrid>Funções:</TitleGrid>
        <SubtitleGrid>Ferramenta.js:</SubtitleGrid>
        <Box>
          Recebe por parâmetro o cep digitado pelo usuário, faz a requisição na API e, após receber a resposta,
          valida a existência dos dados, caso existam, chama o alert importado dos includes com os dados recebidos,
          caso contrátrio, chama o alert importado dos includes com uma mensagem de erro para o usuário.
        </Box>
        <SubtitleGrid>SobreMim.js:</SubtitleGrid>
        <Box>
          Contém uma função redirecionaPagina que recebe uma string como referência e retorna a função window.open, acessando
          o array switch passando o parâmetro como objeto de busca e seleciona o link referênte ao iconi clicado pelo usuário.
        </Box>
      </div>
      </LeftBody>
      <RightBody>
        <div>
          <TitleGrid>Includes:</TitleGrid>
          <Lista>Material UI: Caixa de texto e botão pesquisar</Lista>
          <Lista>Prop-types: Itens do menu lateral</Lista>
          <Lista>React-router-dom: Rotas</Lista>
          <Lista>Styled-components: Esilizar containers</Lista>
          <Lista>Sweet-alert2: Saída de dados</Lista>
          <Lista>React-icons: Icones</Lista>
        </div>
        <div>
          <TitleGrid>Helpers:</TitleGrid>
          <SubtitleGrid>Colors.js:</SubtitleGrid>
          <Box>Um objeto que contem as cores que usei no projeto, para ajudar no desenvolvimento</Box>
        </div>
      <div>
        <TitleGrid>Requisição:</TitleGrid>
        <Box>Função que recebe o cep por parâmetro e utiliza o método fetch para fazer a requisição na API dos correios e
          recebe uma resposta em um Json, após receber essa resposta, chama a função retornaEndereço, passando os dados do
          Json como referência para serem tratados nela e enviados para a página em que a função de requisição foi chamada.
        </Box>
      </div>
      </RightBody>
   </Container>   
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
  background-color: ${colors.blue4};
  height: 890px;
`
const LeftBody = styled.div`
  display: drid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const RightBody = styled.div`
  margin-top: 10px;
  margin-left: 60px;
`;

const Box = styled.div`
  margin: 10px;
`;

const Lista = styled.li`
  padding-top: 30px;
`;

const TitleGrid = styled.div`
margin-top: 10px;
  font-size: 40px;
  color: ${colors.blue2};
  text-transform: uppercase;
  font-family: Impact, fantasy;
  text-shadow: 2px 2px black;
`;

const SubtitleGrid = styled.div`
  color: ${colors.blue2};
  padding: 5px;
  font-size: 20px;
  text-transform: uppercase;
  font-family: Impact, fantasy;
  text-shadow: 1px 1px black;
`;

export default SobreProjeto;
