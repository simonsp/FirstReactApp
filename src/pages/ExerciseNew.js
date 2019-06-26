import React from 'react'

import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'

class ExerciseNew extends React.Component{

    state = {
        form: {}
    }

    handleChange = (e) =>(
        /* ESTO ES UNA FORMA
        let partialState = {}
        partialState[e.target.name] = e.target.value
        this.setState(partialState)
        */

        // ESTO ES CON ECS7

        this.setState({
            ...this.state.form, // ESTO ES DESTRUCTURING, LO QUE HACE ES MANTENER LAS LLAVES Y VALUES QUE
            //SE INGRESAN EN LOS INPUT, SI ES UNA KEY NUEVA LA ADICIONA AL FORM, SINO, ACTUALIZARÁ EL VALUE DEL LA LLAVE
            form:{
                [e.target.name] : e.target.value
            }
        })
    )

    render(){
        return(
            <ExerciseForm onChange={this.handleChange}/>
        )
    }
}

export default ExerciseNew