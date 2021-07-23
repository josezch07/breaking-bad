import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import Frase from './components/Frase'

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
` ;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  font-size: 1.4rem;
  z-index:1000;
  border: 2px solid black;
  transition: background-size .8s ease;
  :hover {
    cursor:pointer;
    background-size: 400px;
  }
`;

function App() {

  //state de frases

  const [frase, obtenerFrase] = useState({})

  const consultarAPI =async ()=>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await api.json()

    obtenerFrase(frase[0])
  }

  //Cargar una frase
  useEffect (()=>{
     consultarAPI()
  }, [])

  return (
    <div className="App">
      <Contenedor>
        <Frase
        frase={frase}
        />
      <Boton
        onClick={consultarAPI}
      >
          Obtener Frase
        </Boton>
      </Contenedor>
       
    </div>
  );
}

export default App;
