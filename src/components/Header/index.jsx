import ApiRickAndMorty from '../../pages/ApiRickAndMorty'
import Home from '../../pages/Home'
import About from '../../pages/About'
import './styles.css'
import { Link } from 'react-router-dom'

export default function Header(){
    return(
        
        <>
        <header className='cabecalho'> 

            <h1>Uma página qualquer</h1>

            <nav>
                <ul>
                    <Link to='/' element={<Home />}>
                      <li>Home</li>
                    </Link>

                    <Link to='/about' element={<About />}>
                      <li>Sobre</li>
                    </Link>

                    <Link to='/api' element={<ApiRickAndMorty />}>
                      <li>Personagens</li>
                    </Link>
                    
                    
                </ul>
                    
            </nav>

        </header>
        </>



    )
}