import React from 'react';
import styled from 'styled-components';

import MenuLateral from './MenuLateral';
import colors from '../helpers/colors'
import logo from '../images/logo3.png';

const PaginaBase = ({children}) => (
    <>
      <BarradeTitulo>
        <ImageDiv>
          <img src={logo} alt="logo do site"/>
        </ImageDiv>
      </BarradeTitulo>
      <Body>
        <MenuLateral />
        <div>{children}</div>
      </Body>
    </>
  );

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr;
`;

const BarradeTitulo = styled.div`
  background-color: ${colors.blue2};
  height: 50px;
  text-align: center;
  font-size: 30px;
  color: ${colors.blue4};
`;

const ImageDiv = styled.div`
  padding-top: 3px;
`;

export default PaginaBase;