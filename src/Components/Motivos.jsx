import React from 'react'
import WhiteBox from "../Imagens/WhiteBox.png"
import Cartoes from "../Imagens/Cartoes.png"
import ShopIcon from "../Imagens/ShopIcon.png"

const Motivos = () => {
  return (
    <section>
        <div>
                <p>Na TCC Store é diferente</p>
                <p>Ainda mais motivos para comprar com a gente</p>
            </div>
            <div className="quadrados">
                <div className="caixa">
                    <img src={WhiteBox} alt="" />
                    <p>
                        <strong> Frete grátis</strong> em todos os pedidos.
                    </p>
                </div>
                <div className="cartoes">
                <img src={Cartoes} alt="" />
                    <p>
                        <strong> Várias opções</strong> em parcelamento.
                    </p>
                </div>
                <div className="Shop">
                <img src={ShopIcon} alt="" />
                    <p>
                        <strong> Opções de retirada</strong> na própria loja.
                    </p>
                </div>
            </div>
    </section>
  )
}

export default Motivos