import React, {Component} from 'react'
import './Thanks.css'
import cerrar from '../../assets/Movil/icon_cerrar_movil.png';
import logo from '../../assets/Movil/Logo Attendi_movil.png';
import { Link } from 'react-router-dom'

class Thanks extends Component {
   render() {
    return (
        <div className='row thanks'>
            <div className="header">
            <Link to='/'>
            <img src={cerrar} alt="Close"/>
            </Link>
            
            </div>
            
            <div className="body">
            <h1>THANKS!</h1>
            </div>
            <div className="survey">
            <p>This survey was <img src={logo} alt="Logo"/></p>
            <p>made with:</p>

                <a href="">click here to learn more</a>
            </div>
        </div>
    )
   }
}

export default Thanks
