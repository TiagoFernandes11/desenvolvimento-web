import React from "react";
import { createRoot } from 'react-dom/client'

import Primeiro from "./componentes/Primeiro";
import BomDia from "./componentes/BomDia";
import Multiplos from "./componentes/Multiplos";

import Saudacao from "./componentes/SaudacaoClasse";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <div>
    <BomDia nome="Tiago" />
    <Primeiro />
    <Multiplos.BoaTarde nome="Rita" />
    <Multiplos.BoaNoite nome="Cassia" />
    <hr></hr>
    <p>Componentes de classe</p>
    <Saudacao tipo="Bom dia" nome="Tiago" />
  </div>
);
