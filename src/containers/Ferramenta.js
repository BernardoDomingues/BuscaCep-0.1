import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

import logo from '../images/logo.png';
import colors from '../helpers/colors';
import { dadosDeEndereco } from '../functions/ferramenta';



const Ferramenta = () => (
  <Container>
    <ImageDiv>
      <img src={logo} alt="logo do site"/>
    </ImageDiv>
    <div></div>
    <Box>
      <TextField id="busca-cep" label="Digite seu CEP" />
    </Box>
    <Box>
      <Button color="primary" onClick={()=> dadosDeEndereco(document.getElementById("busca-cep").value)}>Buscar</Button>
    </Box>
  </Container>
)

const Box = styled.div`
  padding-right: 110px;
  font-size: 10px;
`;

const Container = styled.div`
  background-color: ${colors.blue4};
  text-align: center;
  height: 950px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const ImageDiv = styled.div`
  margin-top: 100px;
  padding-right: 110px;
  padding-bottom: 50x;
  font-size: 10px;
`;

export default Ferramenta;