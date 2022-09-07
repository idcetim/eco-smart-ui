import '../styles/navBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav className='nav'>
            <div className='navMenu'>
            <Link to='/' className='navLink' activeStyle>
                    Inicio 🏠
                </Link>
                <Link to='/celulosa' className='navLink' activeStyle>
                    NanoCelulosa
                </Link>
                <Link to='/silicio' className='navLink' activeStyle>
                    NanoSilicio
                </Link>
                <Link to='/baterias' className='navLink' activeStyle>
                    Baterías
                </Link>
                <Link to='/consultar' className='navLink' activeStyle>
                    Consultar
                </Link>

            </div>+*
        </nav>
    )
}

export default NavBar