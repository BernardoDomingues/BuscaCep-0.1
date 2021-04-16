import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import colors from '../helpers/colors';



const ItensdoMenuLateral = ({rota, legenda}) => {
    const [estilo, setEstilo] = useState('#b3e5fc;');
    const [local, setLocal] = useState('');
    useEffect(() => {
        // const local = window.location.href.split('/')[3].toLocaleLowerCase();
        setLocal(window.location.href);

        if (rota === `${local}`) {
            setEstilo(`
                ${colors.blue4};
            `);
        }
    }, [rota]);

    console.log(local);

    return (
        <Item to={rota} itemstyle={estilo}>
            {legenda}
        </Item>
    )
};



const Item = styled(Link)`
  color: ${colors.blue1};
  text-decoration: none;
  height: 40px;
  padding-top: 20px;
  cursor: pointer;
  background-color: ${(props) => props.itemstyle}
  :hover {
      background-color: ${colors.blue4};
  }
`;

Item.propTypes = {
    rota: PropTypes.string.isRequired,
};

export default ItensdoMenuLateral;