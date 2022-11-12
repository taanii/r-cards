import React from 'react'
import './card.css'

function Card({title, text, id, tag}) {
   return (
      <div className="cardd text-center animate__animated animate__fadeInUp">
         <div className="card-body">
            <h4 className="mb-3 card-title">{title}</h4>
            <p className="card-text">{text}</p>
         </div>
         <button className="btn-disabled curved-button"
          rel="noreferrer">{tag}</button>
      </div>
   )
}

export default Card
