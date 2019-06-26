import React from 'react'
import Card from './Card'


const ExerciseList = ({exercises}) =>(
    <div>
    {
    exercises.map((exercise)=>{
            return (
                <Card 
                    key={exercise.id}
                    title={exercise.title}
                    description={exercise.description}
                    img={exercise.img}
                    leftColor={exercise.leftColor}
                    rightColor={exercise.rightColor}
                />
            )
        })
    }
    </div>

)


/* HECHO CON COMPONENTE FUNCIONAL, CUANDO SE CAMBIA A LA FORMA CON ECS7 SE PUEDE DESTRUCTURAR EL PROPS
    POR ENDE, YA NO ES NECESARIO LLAMAR A props.exercises.map(...), SINO QUE SÓLO SE PUEDE CAMBIAR
    EL ARGUMENTO DE LA FUNCIÓN FLECHA QUE RECIBE LOS PROPS
function ExerciseList(props){
    return(
        <div>
            {
            props.exercises.map((exercise)=>{
                    return (
                        <Card 
                            key={exercise.id}
                            title={exercise.title}
                            description={exercise.description}
                            img={exercise.img}
                            leftColor={exercise.leftColor}
                            rightColor={exercise.rightColor}
                        />
                    )
                })
            }
        </div>
    )
}
*/

export default ExerciseList