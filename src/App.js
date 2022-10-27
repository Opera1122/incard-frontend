import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import SignUp from "./SignUp";
import CardManagement from "./CardManagement";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/CardManagement" render={(props) => <CardManagement {...props}/>}/>
          <Route path="/SignUp" render={(props) => <SignUp {...props}/>}/>
          <Route path="/Login" render={(props) => <Login {...props}/>}/>
          <Route path="/" render={(props) => <Home {...props}/>}/>
        </Switch>
      </Router>
			<Footer />
    </div>
  );
}

export default App;
