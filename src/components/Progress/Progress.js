import React, {Component} from 'react'
import './Progress.css'
class Progress extends Component {
 render() {
     if (!isNaN(this.props.posicion) && !isNaN(this.props.size)) {
        var posicion = this.props.posicion-1;
        if (posicion < 0) {
            posicion = 0;
        }
        var porcentaje = 100 / this.props.size;
        console.log(porcentaje);
        
        var estilo = {marginLeft: (porcentaje * posicion)+'%', width: porcentaje + '%'}
       return (
           <div className='progreso'>
   
               <div className='blue' style={estilo}>
                   <p>{posicion+1}/{this.props.size}</p>
               </div>
           </div>
       )
     } else {
        return (
            <div className='progreso'>
                <div className='blue'>
                    <p>0/0</p>
                </div>
            </div>
        )
     }
    
 }
}

export default Progress
