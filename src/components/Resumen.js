import React from 'react'
import styled from '@emotion/styled';
import {firstCapitalLetter} from './helper';
import PropTypes from 'prop-types';


const ResumenContainer = styled.div`
padding: 1rem;
text-align: center;
background-color: #0251A1;
color: #fff;
margin-top: 1rem;
`

const Resumen = ({ data }) => {

  const { marca, year, plan } = data;

  if ( marca === '' || year === '' || plan === '' ) return null;

  return (
    <>
    <ResumenContainer>
      <h2>Resumen de cotizacion</h2>
      <ul>
        <li>Marca: { firstCapitalLetter(marca) }</li>
        <li>Plan: { firstCapitalLetter(plan) }</li>
        <li>Año del auto: { year }</li>
      </ul>
    </ResumenContainer>
    </>
  )
}

Resumen.propTypes = {
  data: PropTypes.object.isRequired
}

export default Resumen
