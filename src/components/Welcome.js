import React from 'react'
import './styles/Welcome.css'

const Welcome = ({username}) => (
    <div className="container">
        <div className="Fitness-User-Info">
            <h1>Hello {username}!</h1>
            <p>Let's workout to get someone gains!</p>
        </div>
    </div>
)


/* COMPONENTE FUNCIONAL CON PROPS (FUNCIONALES SIGNIFICA QUE NO NECESITAN CAMBIAR EL STATE DEL COMPONENTE)
function Welcome(props){
    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}!</h1>
                <p>Let's workout to get someone gains!</p>
            </div>
        </div>
    )
}
*/

export default Welcome