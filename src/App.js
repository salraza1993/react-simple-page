import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbars from './componants/header/Navbars';

function App() {
  return (
    <BrowserRouter>
      <Navbars />
      <Switch>
        <Route></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
