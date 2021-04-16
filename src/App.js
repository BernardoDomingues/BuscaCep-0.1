import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PaginaBase from './containers/PaginaBase';
import PaginaInicial from './containers/PaginaInicial';
import Ferramenta from './containers/Ferramenta';
import SobreMim from './containers/SobreMim';
import SobreProjeto from './containers/SobreProjeto';

function App() {
  return (
    <BrowserRouter>
      <PaginaBase>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <PaginaInicial />
            </Route>
            <Route path="/ferramenta">
              <Ferramenta />
            </Route>
            <Route path="/sobreoprojeto">
              <SobreProjeto />
            </Route>
            <Route path="/sobreocriador">
              <SobreMim />
            </Route>
          </Switch>
        </div>
    </PaginaBase>
    </BrowserRouter>
    
  );
}

export default App;
