/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import './styles.css'
import Card from '../../components/Card'
import Filter from '../../components/FIlter'
import Pagination from '../../components/Pagination'



export default function ApiRickAndMorty(){
    const [conteudo, setConteudo] = useState(<>Carregando...</>)
    const [busca, setBusca] = useState('');
    const [page, setPage] = useState('1');
    const [totalPages, setTotalPages] = useState('1');

    async function getCharacters(){
        const reqOptions = {
            method: "GET",
            redirect: "follow"
        }

        const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}${busca}`, 
            reqOptions
        )

        if(!response.ok){
            throw new Error(`Http error! status: ${response.status}`)
        }

        const data = await response.json();

        return { info: data.info, char: data.results}

    }

    async function listaPersonagens(){
        
        const {char: todosPersonagens, info} = await getCharacters()
        setTotalPages(info.pages)

        return todosPersonagens.map(personagem => <Card data={personagem} />)

    }

    useEffect(() => {
        async function getConteudo(){
            setConteudo( await listaPersonagens())
        }
        getConteudo()
    }, [page, busca])

    
    return(
        <div>
        <Filter busca={busca} setBusca={setBusca}/>
        <div className='list-principal'>
            { conteudo }
        </div>
        <Pagination 
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}  
        />

        </div>
    )
}