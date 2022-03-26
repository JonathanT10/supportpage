import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from '../src/components/home';


function App() {
  return(
  
    <div>
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
    
  );
  
}

export default App;
