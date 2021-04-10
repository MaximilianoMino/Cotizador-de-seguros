import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const HeaderContainer = styled.header`
background-color: #0251A1;
padding: 10px;
font-weight: bold;
color: #ffff;
`;

const HeaderText = styled.h1`
font-size: 2rem;
margin: 0;
font-family: 'Slabo 27px', serif;
text-align: center;
`

const Header = ({titulo}) => {
  return (
    <header>
      <HeaderContainer>
        <HeaderText>
          {titulo}
        </HeaderText>
      </HeaderContainer>
      
    </header>
  );
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}

export default Header;