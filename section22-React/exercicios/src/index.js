import React from "react";
import ReactDOM from "react-dom";

import Primeiro from "./componentes/Primeiro";
import BomDia from "./componentes/BomDia";


ReactDOM.render(<BomDia nome="Tiago"/>, document.getElementById('root'));
ReactDOM.render(<Primeiro/>, document.getElementById("primeiro"))