import React, {Component} from 'react'
import './Welcome.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Welcome extends Component {
   render(){
    return (
        <div className="row welcome">
            <div className="col-md-12">
            <h1>WELCOME</h1>
            <div className='mt-5'>
            <p>Take a part on this real time</p>
            <p>survey!</p>
            </div>
            </div>

            <div className='boton'>
            <Link to='/questions'>
            <button className='btn-gradient'>Start</button>
            </Link>
            </div>
        </div>
        
     )
   }
   
}

export default Welcome
