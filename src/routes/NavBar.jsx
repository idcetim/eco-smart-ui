import '../styles/navBar.css'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='nav'>
      <div className='navMenu'>
        <NavLink to='/' className='navLink' activeStyle>
          Inicio 🏠
        </NavLink>
        <NavLink to='/celulosa' className='navLink' activeStyle>
          NanoCelulosa
        </NavLink>
        <NavLink to='/silicio' className='navLink' activeStyle>
          NanoSilicio
        </NavLink>
        <NavLink to='/baterias' className='navLink' activeStyle>
          Baterías
        </NavLink>
        <NavLink to='/consultar' className='navLink' activeStyle>
          Consultar
        </NavLink>

      </div>
    </nav>
  )
}

export default NavBar