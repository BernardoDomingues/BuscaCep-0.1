import styled from 'styled-components';

import { redirecionaPagina } from '../functions/sobreMim';

import logo from '../images/logo.png';
import fotoDePerfil from '../images/fotoDePerfil.png';
import logoUnifei from '../images/logoUnifei.png';
import logoRede from '../images/logoRede.png';
import colors from '../helpers/colors';
import { FaLinkedin, FaWhatsapp, FaWikipediaW } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { SiGooglemaps } from 'react-icons/si';

function SobreMim() {
  return (
    <Container>
      <Header>
        <LogoDiv>
          <img src={logo} alt="logo do site"/>
        </LogoDiv>
        <div></div>
      </Header>
      <Body>
        <Card>
          <CardTitle>Bernardo Domingues</CardTitle>
          <div>
            <img src={fotoDePerfil} alt="minha foto"/>
          </div>
          <TextBox>
            Apaixonado por tecnologia, adoro aprender coisas novas, principalmente quando relacionadas ao
            mundo da computação.No momento da criação deste projeto, estou no terceiro período do curso de
            Engenharia da Computação e há 6 meses trabalhando na Rede Melhor Compra.
          </TextBox>
          <CardFooter>
            <IconDiv><FaLinkedin onClick={() => redirecionaPagina("lk")} /></IconDiv>
            <IconDiv><FaWhatsapp onClick={() => redirecionaPagina("wpp")} /></IconDiv>
          </CardFooter>
        </Card>
        <Card>
          <CardTitle>UNIFEI - Campus Itabira</CardTitle>
          <div>
            <img src={logoUnifei} alt="minha foto"/>
          </div>
          <TextBox>
            A Universidade Federal de Itajubá (UNIFEI) é uma instituição de ensino superior
            pública federal, com Campus nas cidades de Itajubá e Itabira, ambas pertencentes ao estado
            brasileiro de Minas Gerais. Extremamente conceituada entre as universidades de engenharia do
            Brasil, atua há mais de 100 anos no ensino.
          </TextBox>
          <CardFooter>
            <IconDiv><FaWikipediaW onClick={() => redirecionaPagina("wiki")} /></IconDiv>
            <IconDiv><CgWebsite onClick={() => redirecionaPagina("unifei")} /></IconDiv>
          </CardFooter>
        </Card>
        <Card>
          <CardTitle>Rede Melhor Compra</CardTitle>
          <div>
            <img src={logoRede} alt="minha foto"/>
          </div>
          <TextBox>
            A Rede Melhor Compra é uma rede associativista de drogarias, com sede na cidade de Ipatinga-MG
            e composta exclusivamente por farmacistas independentes. Atualmente a rede já conta com a participação
            de mais de 500 associados, abrangendo 297 cidades em diferentes estados.
          </TextBox>
          <CardFooter>
            <IconDiv><CgWebsite onClick={() => redirecionaPagina("rede")} /></IconDiv>
            <IconDiv><SiGooglemaps onClick={() => redirecionaPagina("map")} /></IconDiv>
          </CardFooter>
        </Card>
      </Body>
   </Container>   
  );
}

const Container = styled.div`
  background-color: ${colors.blue4};
  height: 957px;
`

const Header = styled.div`
  text-align: center;
  padding-top: 90px;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Body = styled.div`
  font-size: 20px;
  margin-left: 200px;
  margin-right: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Card = styled.div`
  border: 2px solid;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  text-align: center;
  border-radius: 25px;
  background-color: ${colors.blue3};
  border: 1px solid ${colors.blue2};
  margin-left: 100px;
  padding: 10px;
  font-size: 20px;
  height: 420px;
  wight: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
`;

const TextBox = styled.div`
  height: 230px;
`;

const LogoDiv = styled.div`
  padding-right: 110px;
  padding-bottom: 50x;
  font-size: 10px;
`;

const CardTitle = styled.div`
  text-align: center;
  font-weight: bold;
  color: ${colors.blue1};
  text-transform: uppercase;
`;

const CardFooter = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const IconDiv = styled.div`
  cursor: pointer;
  color: ${colors.blue1};
  margin-left: 60px;
  margin-right: 60px;
  :hover {
    color: ${colors.blue2};
`;

export default SobreMim;
