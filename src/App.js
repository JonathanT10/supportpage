import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';


function App() {
  return(
  
    <div>
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Support} />
      </Switch>
      <Footer />
      </BrowserRouter>
    </div>
    
  );
  
}

export default App;
