import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './View/HomePage/Home'
import Compitition from './View/Compitition/compitition'
import Winner from './View/Winner/winner'
import About from './View/About/about'
import Contact from './View/Contact/contact'

import './App.css'

function App() {
  return (

    <Router>
    <div className="App">
      <Switch>

   <Route exact path="/home" component={Home} />
   <Route path="/compitition" component={Compitition} />
   <Route path="/winner" component={Winner} />
   <Route path="/about" component={About} />
   <Route path="/contact" component={Contact} />

      </Switch>

     </div>
    </Router>
  );
}

export default App;
