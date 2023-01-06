// import React from 'react'
// import { ObjetosLiterales } from './typescript/ObjetosLiterales';
// import { TiposBasicos } from './typescript/TiposBasicos';
// import { Funciones } from './typescript/Funciones';

import { Contador } from "./components/Contador";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS - React</h1>
      <hr />
      {/* <TiposBasicos />
      <hr />
      <ObjetosLiterales />
      <hr />
      <Funciones /> */}

      <Contador />
    </div>
  )
}

export default App;