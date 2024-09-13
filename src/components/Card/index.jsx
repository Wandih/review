/* eslint-disable react/prop-types */
import { getGenero, getEspecie, getStatus } from '../../fns'
import './styles.css'

export default function Card({data: personagem}){
    return (

        
        <div className='char-card' key={personagem.id}>
        <h2>{personagem.name}</h2>
        <img src={personagem.image} alt={personagem.name}/>
            


            <div className='char-info'>
                <span><b>Espécie: </b>{getEspecie(personagem.species)}</span>
                <span><b>Gênero: </b>{getGenero(personagem.gender)}</span>
            </div>
            
            <div className='lista-ep'>
                <div className='lista-secundaria'>
                    <b>Participações:</b>
                    {personagem.episode.map(
                        ep =>
                            <span key={personagem.name +(ep.split('episode/')) [1]}>
                                Ep- {(ep.split('episode/')) [1]}  
                            </span>
                    )}

                </div>
                <h5><b>Status: </b>{getStatus(personagem.status)}</h5>
                </div>
        </div>

        
        
    )
}