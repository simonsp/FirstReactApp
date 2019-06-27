import React from 'react';
import ButtonImg from '../images/addbutton.png'
import './styles/AddButton.css'
//Este componente reemplaza el <a>
import { Link } from 'react-router-dom'



/* COMPONENTE DE CLASE EN REACT
class AddCard extends React.Component{
    render(){
        return(
            <div>
                <Link to="/exercise/new"><img className="Fitness-Add" src={ButtonImg} alt="botton para agregar ejercicio"/></Link>
            </div>
        )
    }
}


    COMPONENTE FUNCIONAL EN REACT
    function AddCard(){
        return(
            <div>
                <Link to="/exercise/new"><img className="Fitness-Add" src={ButtonImg} alt="botton para agregar ejercicio"/></Link>
            </div>
        )
    }
*/

const AddCard = () => {
    return (
        <div>
            <Link to="/exercise/new"><img className="Fitness-Add" src={ButtonImg} alt="botton para agregar ejercicio" /></Link>
        </div>
    )
}


export default AddCard