import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
              <li>
              <Link to ="/">Inicio</Link>
              </li>
              <li>
              <Link to ="/Equipamentos">Equipamentos</Link>
              </li>
              <li>
              <Link to ="/Objetivo">Objetivo</Link>
              </li> 
              <li>
              <Link to ="/Publico">Público</Link>
              </li> 
              <li>
              <Link to ="/Bibliografia">Bibliografia</Link>
              </li>  
        </ul>
    </nav>
  )
}

export default Navbar