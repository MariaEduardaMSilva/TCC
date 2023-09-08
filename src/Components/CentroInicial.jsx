import React from 'react'
import TccStore1 from "../Imagens/TccStore1.png"
import '../Styles/CentroInicial.css'

const CentroInicial = () => {
  return (
    <header>
        <div className='CimaAzul'>
          <h1>linha</h1>

        </div>
        <div className='Centro'>
            <img src={TccStore1} alt="" />

            <p>
                O melhor jeito de  
                <span> comprar </span> 
                <br />
                o que voce ama
            </p>
        </div>
    </header>
  )
}

export default CentroInicial