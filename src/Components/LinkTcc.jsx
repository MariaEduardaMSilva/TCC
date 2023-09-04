import React from 'react'
import { Link } from 'react-router-dom'
import TCC from '../Imagens/TCC.jpg'

const LinkTcc = () => {
  return (
    <section>
        <div className="Texto">
            <h2>
                Lançamento
            </h2>
            <p>
                Veja o tcc que acabou de chegar
            </p>
        </div>
        <div className="imagem">
            <img src={TCC} alt="Imagem de como seria do tcc" />
        </div>
        <div className="butao">
            <nav>
              <ul>
              <Link to ="/Lance">Clique aqui</Link> 
              </ul>
            </nav>
            <p>
                para mais informações
            </p>
        </div>
    </section>
  )
}

export default LinkTcc