import { useState } from 'react';
import Header from './components/Header'
import styled from '@emotion/styled';
import Form from './components/Form';
import Resumen from './components/Resumen';
import Result from './components/Result';
import Spinner from './components/Spinner';





const Container = styled.div`
max-width: 600px;
margin: 5% auto;
 `
 const FormContainer = styled.div`
 background-color: #fff;
 padding: 3rem;
 height: 50%;
 `
function App() {
  const [ resumen, saveResumen ] = useState({
    cotizacion: 0,
    data: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [ loading, saveLoading] = useState(false);
  //extraer datos
  const { cotizacion, data } = resumen;
    return (
      <Container>
        <Header 
          titulo="Cotizador de seguros"
        />
        <FormContainer>

          <Form 
          saveResumen={saveResumen}
          saveLoading={ saveLoading }
          />
          { loading 
          ? 
          (
          <Spinner />
          ) 
          : 
          ( <>
             <Resumen 
          data={ data }
          />

          <Result 
          cotizacion={cotizacion}
          />
          </>
          )}
          
        

        </FormContainer>
      </Container>
    );
      
     
}

export default App;