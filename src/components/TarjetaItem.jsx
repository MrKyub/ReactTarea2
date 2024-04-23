import React from 'react'

const TarjetaItem = (props) => {
  return (
    <div className='TarjetaItem'>
        <img src={props.url} alt = {props.descripcion} class = "img-mob"/>
        <div className='TarjetaTexto'>
            <p>{props.texto} </p>
        </div>
    </div>
  )
}

export default TarjetaItem