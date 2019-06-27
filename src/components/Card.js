import React from 'react'
import CircleImage from '../images/circles.png'
import DefaultImage from '../images/exercise.png'
import './styles/Card.css'

class Card extends React.Component {

    render() {
        const { title, description, img, leftColor, rightColor } = this.props
        return (
            <div className="card mx-auto Fitness-Card" style={{
                backgroundImage: `url(${CircleImage}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})`
            }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img || DefaultImage} alt="imagen de ejercicio" className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title || 'Título'}</h1>
                            <p>{description || 'Descripción'}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;