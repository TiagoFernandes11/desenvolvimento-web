import React from "react";
import ReactDOM from "react-dom";

import Primeiro from "./componentes/Primeiro";
import BomDia from "./componentes/BomDia";
import Multiplos from "./componentes/Multiplos";

ReactDOM.render(<BomDia nome="Tiago" />, document.getElementById("root"));
ReactDOM.render(<Primeiro />, document.getElementById("primeiro"));

ReactDOM.render(
  <div>
    <Multiplos.BoaTarde nome="Rita" />
    <Multiplos.BoaNoite nome="Cassia" />
  </div>,
  document.getElementById("multiplos")
);
