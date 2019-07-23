import React, {Component} from 'react'
import './Questions.css';
import Progress from '../Progress/Progress';
import back from '../../assets/Movil/btn_back_movil.png'
import triste from '../../assets/Movil/escala_1_mov.png';
import ok from '../../assets/Movil/escala_3_mov.png';
import feliz from '../../assets/Movil/escala_5_mov.png';
import inlove from '../../assets/Movil/escala_6_mov.png';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

class Questions extends Component {
    constructor(){
        super();
    this.state = {
        data: [],
        posicion: 1,
        loading: true,
    }        
    }

 componentDidMount(){  
     console.log(this.props.history);
        
     axios.post('https://tkfn9ciovh.execute-api.us-west-1.amazonaws.com/qa/api/surveys/synchronization')
    .then(res =>{
    this.setState({data: res.data, loading: false});
    });
    
    }
    back = () => {
        var nextPosition = this.state.posicion-1;
        if (nextPosition <1) {
            this.props.history.goBack();
        }else{
            this.setState({posicion: nextPosition});
        }
        
    }
    next = () => {
        var nextPosition = this.state.posicion+1;
        if (nextPosition > this.state.data.questions.length) {
            this.props.history.push('/thanks');
        }else{
            this.setState({posicion: nextPosition});
        }
        
    }
    render(){
        if (this.state.loading) {
            return(
                <div>
                    <h3>Loading...</h3>
                </div>
            )
        }else {            
            return (
                <div className='row questions'>
                    <div className="header">
                    <Progress size={this.state.data.questions.length} posicion={this.state.posicion}/>
                    </div>
    
                    <div className="body">
                    <img src={back} alt="Back" onClick={this.back}/>
    
                    <div className='pregunta'>
                        <h3>{this.state.data.questions[this.state.posicion-1].text}</h3>
                        <div>
                            <img className='selected' src={triste} alt=""/>
                            <img src={ok} alt=""/>
                            <img src={feliz} alt=""/>
                            <img src={inlove} alt=""/>
                        </div>
    
                    </div>
                    </div>
    
                    <div className="footer">
                    <button className='btn-gradient' onClick={this.next}>Next</button>
                    </div>
                </div>
            )
        }
    }
}

export default Questions
