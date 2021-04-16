import React from 'react';
import styled from 'styled-components';

import ItensdoMenuLateral from './ItensdoMenuLateral';
import logo from '../images/logo1.png';
import colors from '../helpers/colors';


const MenuLateral = () => {

    return(
        <Container>
        <ImagemDiv onClick={() => window.location.replace('./')}>
            <img src={logo} alt="logo do site"/>
        </ImagemDiv>  
        <Body>     
            <ItensdoMenuLateral rota='./' legenda='Página inicial'/>
            <ItensdoMenuLateral rota='./ferramenta' legenda='Ferramenta Busca Pelo CEP' />
            <ItensdoMenuLateral rota='./sobreoprojeto' legenda='Sobre o projeto' />
            <ItensdoMenuLateral rota='./sobreocriador' legenda='Sobre o criador' />
        </Body>
    </Container>
    )      
};

const Container = styled.div`
    height: 950px;
    width: 200px;
    text-align: center;
    background-color: ${colors.blue3};
`;

const Body = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    padding-top: 250px;
`;

const ImagemDiv = styled.div`
    color: #01579b;
    height: 40px;
    padding-top: 20px;
    cursor: pointer;
`;

export default MenuLateral;
