import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from "./pages/Home";
import Error from "./pages/Error";


const App = ()=>{
  return(<>


    <Switch>
      <Route path="/" component={ Home } />
      <Route path="*" component={ Error } />
    </Switch>


  </>)
}

export default App;