import React from 'react'
import './card.css'

function Card1({title, text, id}) {
   return (
      <div className="cardd wid text-center animate__animated animate__fadeInUp">
         <div className="card-body">
            <h4 className="mb-3 card-title">{title}</h4>
            <p className="card-text">{text}</p>
         </div>
      </div>
   )
}

export default Card1
