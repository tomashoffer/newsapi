import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'
import axios from 'axios'


function App() {
// definir categoria y noticias
const [categoria, guardarCategoria] = useState('general')
const [noticias, guardarNoticias] = useState([])

useEffect(() => {
  const consultarAPI = async () =>{
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=61b9888f74d6498f9a0a0683fce671f2`
    const respuesta = await axios(url)
    guardarNoticias(respuesta.data.articles)
  }
  consultarAPI()
}, [categoria])

  return (
    <Fragment>
      <Header
      titulo='NOTICAS ARGENTINAS'
      />
      <div className='container white'>
        <Formulario
        guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
        noticias={noticias}
        />
      </div>
    </Fragment>
    );
}

export default App;
