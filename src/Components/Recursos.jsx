import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import sensor from '../Imagens/sensor.jpeg'
import jumpers from '../Imagens/Jumpers.jpeg'
import LEDRGB from '../Imagens/LEDRGB.jpeg'
import placa from '../Imagens/placa.jpeg'
import buzzer from '../Imagens/buzzer.jpg'
import arduino from '../Imagens/Arduino.jpeg'
import resistor from '../Imagens/resistor.jpg'
import potenciometro from '../Imagens/potenciometro.jpg'
import button from '../Imagens/Button.png'
import usb from '../Imagens/usb.jpg'

const Recursos = () => {
  return (
    <section>

        <h2>Equipamentos Utilizados</h2>
        <div className="sensor">
            <img src={sensor} alt="sensor arduino" />
            <p>Sensor ultrassônico R$ 19,00</p>
        </div>
        <div className="jumpers">
            <img src={jumpers} alt="fjumpers" />
            <p>Fios R$ 19,00</p>
        </div>
        <div className="LEDRGB">
            <img src={LEDRGB} alt="led RGB" />
            <p>Fita de Led R$ 37,00</p>
        </div>
        <div className="placa">
            <img src={placa} alt="placa de ensaio" />
            <p>Protoboard R$ 27,00</p>
        </div>
        <div className="buzzer">
            <img src={buzzer} alt="buzzer" />
            <p> Buzzer R$ 25,00</p>
        </div>
        <div className="arduino">
            <img src={arduino} alt="placa arduino" />
            <p>Arduino R$ 130,00</p>
        </div>
        <div className="resistor">
            <img src={resistor} alt="resistor" />
            <p>Resistor R$ 0,05 cada</p>
        </div>
        <div className="potenciometro">
            <img src={potenciometro} alt="potenciometro" />
            <p>Potenciômetro R$ 2,50 cada</p>
        </div>
        <div className="button">
            <img src={button} alt="botao" />
            <p>Botão R$ 0,27 cada</p>
        </div>
        <div className="usb">
            <img src={usb} alt="fio usb" />
            <p>Cabo USB Arduíno R$ 17,00</p>
        </div>
    </section>
  )
}

export default Recursos