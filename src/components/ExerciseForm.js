import React from 'react'

class ExerciseForm extends React.Component{

    state = {}
/* ESTA ES LA FORMA DE HACER EL BIND PARA PASAR LOS PROPS EN LA MISMA INSTANCIA 
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        console.log(this.props)
    }
    render....
*/  

    handleSubmit = (e) => (
        e.preventDefault(),
        console.log(this.state)

    )
    
    render(){
        // DESTRUCTURING EL PROPS
        const {onChange} = this.props
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            name="title"
                            onChange={ onChange }
                            value={this.state.title}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            name="description"
                            onChange={ onChange }
                            value={this.state.description}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            name="img"
                            onChange={ onChange }
                            value={this.state.img}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                name="leftColor"
                                onChange={ onChange }
                                value={this.state.leftColor}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                name="rightColor"
                                onChange={ onChange }
                                value={this.state.rightColor}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>

            </div>
        )
    }
}

export default ExerciseForm