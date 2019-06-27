import React from 'react'

import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
import FatalError from './500'

class ExerciseNew extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        error: null,
        loading: false,
    }

    handleSubmit = async e => {
        this.setState({
            loading: true
        })
        e.preventDefault()
        try {

            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let res = await fetch('http://localhost:8000/api/exercises', config)

            this.setState({
                loading: false
            })
            this.props.history.push('/exercise')

        } catch (error) {
            this.setState({
                loading: false,
                error // lo mismo que error: error
            })
        }
    }

    handleChange = (e) => {
        /* ESTO ES UNA FORMA
        let partialState = {}
        partialState[e.target.name] = e.target.value
        this.setState(partialState)
        */

        // ESTO ES CON ECS7

        this.setState({
            // ESTO ES DESTRUCTURING, LO QUE HACE ES MANTENER LAS LLAVES Y VALUES QUE
            //SE INGRESAN EN LOS INPUT, SI ES UNA KEY NUEVA LA ADICIONA AL FORM, SINO, ACTUALIZARÁ EL VALUE DEL LA LLAVE
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        if (this.state.error) {
            return <FatalError />
        }
        return (
            <div className="row">
                <div className="col-sm">
                    <ExerciseForm
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        form={this.state.form}
                    />
                </div>
                <div className="col-sm">
                    <Card {...this.state.form} />
                </div>
            </div>
        )
    }
}

export default ExerciseNew