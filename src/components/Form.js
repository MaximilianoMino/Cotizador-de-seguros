import React, {useState} from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types'
import { calculateMarca, getPlan, yearDiference } from './helper';

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #1F8FFF;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: .3s ease;
    margin-top: 2rem;
    &:hover {
      background-color:#0251A1;
      cursor:pointer;
    }
`

const Error = styled.div`
    background-color: #f04242;
    color: white;
    padding: 1rem;
    width:100%;
    text-align: center;
    margin-bottom: 1rem;
`

const Form = ({ saveResumen, saveLoading }) => {

  const [data, saveData] = useState({
    marca: '',
    year: '',
    plan: ''
  })
  const [ error, saveError ] = useState(false); 

  const { marca, year, plan } = data;

  //Leer datos del form y colocarlos en el state

  const catchInfo = e => {
  
    saveData({
      ...data,
      [ e.target.name ] : e.target.value
    })

  }

  const handleSubmit = e  => {
      e.preventDefault();
      if ( marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
        saveError(true);
        return;
      }
      saveError(false);

      //Arrancamos con una base de 2000

      let result = 2000;

      // Óbtener la diferencia de años
      const diference = yearDiference(year);
      //por cada año hay que restar el 3%
      result -= (( diference ) * 3  * result ) / 100;

      //Americano 15%
      //Asiatico 5%
      //Europeo 30% 
      result = calculateMarca(marca) * result;
      //Basico aumenta 20%
      //Completo 50%
      const planIncrement = getPlan( plan );

      result = parseFloat(planIncrement * result).toFixed(2);

      saveLoading(true);


      setTimeout(() => {

        saveLoading(false);

        saveResumen({
        cotizacion: Number(result),
        data
      })
      }, 2000);

     
  }
  return (
    <form
      onSubmit={handleSubmit}  
    > 
    { error ? <Error>Todos los campos son obligatorios</Error>: null}
      <Field>
        <Label>Marca</Label>
        <Select
          name="marca"
          value={marca}
          onChange={catchInfo}
        >
          <option value="">-- Seleccione --</option>
           <option value="americano">Americano</option>
            <option value="europeo">Europeo</option>
             <option value="asiatico">Asiatico</option>
        </Select>
      </Field>

        <Field>
        <Label>Año</Label>
        <Select
          name="year"
          value={year}
          onChange={catchInfo}
        >
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>

        <Field>
          <Label>Plan</Label>
          <InputRadio 
            type="radio"
            name="plan"
            value="basico"
            checked={ plan === "basico" }
            onChange={catchInfo}
          />Basico

          <InputRadio 
            type="radio"
            name="plan"
            value="completo"
            checked={ plan === "completo"}
            onChange={catchInfo}
          />Completo
        </Field>
        <Button type="submit">Cotizar</Button>
    </form>
  )
}

Form.propTypes = { 
  saveResumen: PropTypes.func.isRequired,
  saveLoading: PropTypes.func.isRequired
}

export default Form
