import React from 'react';

// COMPONENTES
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import AddCard from '../components/AddCard'
import Loading from '../components/Loading'
import FatalError from './500'



class Excercises extends React.Component {

    /*MANERA RELATIVAMENTE ANTIGUA DE DEFINIR EL CONSTRUCTOR DE STATE
    constructor(props){
        super(props)
        this.state = {
            data:[{
                    "id": 1,
                    "title": "Technique Guides",
                    "description": "Learn amazing street workout and calisthenics",
                    "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06",
                    "leftColor": "#A74CF2",
                    "rightColor": "#617BFB"
                },{
                    "id": 2,
                    "title": "Skills Training",
                    "description": "Learn the secrets of bodyweight techniques",
                    "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercises02.png?alt=media&token=a5d55381-5f3e-4f25-92dd-560775f96aa2",
                    "leftColor": "#17EAD9",
                    "rightColor": "#6078EA"
                },{
                    "id": 3,
                    "title": "Strength Training",
                    "description": "Train anytime, everywere and become a superhero!",
                    "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise03.png?alt=media&token=8e5301c0-151e-415d-bd2c-655235d9c916",
                    "leftColor": "#FAD961",
                    "rightColor": "#F76B1C"
                }]
        }
    }
    */
    state = {
        data: [],
        loading: true,
        error: null,
    }

    async componentDidMount() {
        await this.fetchExercises()
    }

    fetchExercises = async () => {
        try {
            let res = await fetch('http://localhost:8000/api/exercises')
            let data = await res.json()
            this.setState({
                data,
                loading: false
            })
        } catch (error) {
            this.setState({
                loading: false,
                error // Lo mismo que error: error
            })
        }
    }

    render() {
        if (this.state.loading) {
            return <Loading />
        }
        if (this.state.error) {
            return <FatalError />
        }
        return (
            <React.Fragment> // SE PUEDE HACER CON DIVS
                <Welcome username="Simon Salvo Pino" />
                <ExerciseList exercises={this.state.data} />
                <AddCard />
            </React.Fragment>

        )
    }
}

export default Excercises