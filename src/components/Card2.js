import React from 'react'
import './wallet.css'

function Card2({title, id}) {
   return (
      <div className="wallet-card text-center animate__animated animate__fadeInUp">
         <div className="card-body">
            <h4 className="card-title">{title}</h4>
         </div>
      </div>
   )
}

export default Card2
