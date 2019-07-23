import React, {Component, Fragment} from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Progress from './components/Progress/Progress';
import Questions from './components/Questions/Questions';
import Thanks from './components/Thanks/Thanks';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
 render(){
  return (
    <Router>
    <div className="App">
    <div className="container">
          <Route exact path='/' render={props => (
        <Fragment>
         <Welcome/>
        </Fragment>
          
       )}
       />
        <Route exact path='/questions' component={Questions}/>
        <Route exact path='/thanks' component={Thanks}/>
        </div>
    </div>
    </Router>
  );
 }
}

export default App;
