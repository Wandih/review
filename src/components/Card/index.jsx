/* eslint-disable react/prop-types */
import './styles.css'

export default function Card({data: personagem}){
    return (

        <>
        
            {personagem.name}
            <img src={personagem.image}/>

        
        </>
    )
}