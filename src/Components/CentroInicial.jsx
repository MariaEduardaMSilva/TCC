import React from 'react'
import TccStore from "../Imagens/TccStore.png"

const CentroInicial = () => {
  return (
    <header>
        <div>

        </div>
        <div className='Centro'>
            <img src={TccStore} alt="" />

            <p>
                O melhor jeito de  
                <span> comprar </span> 
                o que voce ama
            </p>
        </div>
    </header>
  )
}

export default CentroInicial