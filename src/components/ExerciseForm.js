import React from 'react'

class ExerciseForm extends React.Component {


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

    render() {
        // DESTRUCTURING PROPS
        const { onChange, onSubmit, form } = this.props
        return (
            <div className="container">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            name="title"
                            onChange={onChange}
                            value={form.title}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="description"
                            name="description"
                            onChange={onChange}
                            value={form.description}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="url"
                            name="img"
                            onChange={onChange}
                            value={form.img}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="left Color"
                                name="leftColor"
                                onChange={onChange}
                                value={form.leftColor}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="right Color"
                                name="rightColor"
                                onChange={onChange}
                                value={form.rightColor}
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