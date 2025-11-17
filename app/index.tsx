import { Redirect } from 'expo-router';
import React from 'react';

const App = () => {
  return (

      //Es la ruta inicial de la aplicacion
      //Te lleva al home
    <Redirect href="/(stack)/home"/>
    
  )
}

export default App