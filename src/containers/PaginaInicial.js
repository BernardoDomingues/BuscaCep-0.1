import styled from 'styled-components';

import reactCorreios from '../images/reactCorreios.png';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { BsTools } from 'react-icons/bs';
import { BsInfoCircleFill } from 'react-icons/bs';
import { GrTechnology } from 'react-icons/gr';

import colors from '../helpers/colors';

function PaginaInicial() {
  return (
    <Container>
      <Body>
         <Box>
          Este projeto tem como objetivo mostrar aos demais
          desenvolvedores como eu faço requisições na API 
          dos correios para minhas aplicações React.
        </Box>
        <ImagemDiv>
          <img src={reactCorreios} alt="logo react e correios"/>
        </ImagemDiv>
        <ToolImagemDiv>
          <AiOutlineAntDesign />
        </ToolImagemDiv>
        <Box>
          Além disso, também usei o desenvolvimento dessa ferramenta
          para aprimorar minhas habilidades no web design e reforçar 
          meus conhecimentos em React.
        </Box>
        <Box>
          Na aba ferramenta, você encontra o resultado de saída do meu
          projeto, o campo para digitar o cep e o endereço validado em
          seguida.
        </Box>
        <ToolImagemDiv>
          <BsTools />
        </ToolImagemDiv>
        <ToolImagemDiv>
          <GrTechnology />
        </ToolImagemDiv>
        <Box>
          Logo abaixo, na aba sobre o projeto, você encontra informações
          tecnicas sobre o projeto, extenções, frameworks e um gráfico 
          lógico.
        </Box>
        <Box>
          Por fim, na aba sobre o criador, são mostradas informações sobre
          mim, sobre a faculdade que estudo e sobre a empresa que trabalho.
        </Box>
        <ToolImagemDiv>
          <BsInfoCircleFill />
        </ToolImagemDiv>
      </Body>
   </Container>   
  );
}

const Container = styled.div`
  padding-top: 24px;
  background-color: ${colors.blue4};
  height: 925px;
`

const Body = styled.div`
  font-size: 20px;
  margin-left: 150px;
  margin-right: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Box = styled.div`
  padding-top: 60px;
`;

const ImagemDiv = styled.div`
  padding-left: 120px;
  padding-bottom: 30px;
`;

const ToolImagemDiv = styled.div`
  font-size: 100px;
  color: #01579b;
  padding-left: 300px;
  padding-bottom: 30px;
  padding-top: 30px;
`;

export default PaginaInicial;
