import React from 'react'
import Card2 from './Card2'
import './wallet.css'


const cards2 = [
   {
      id: 1,
      title: 'MetaMask',
   },
   {
      id: 2,
      title: 'CoinBase',
   },
   {
      id: 3,
      title: 'Wallet Connect',
   },
   {
      id: 4,
      title: 'Injected',
   }
]


function Cards2() {
   return (
      <div className="container d-flex justify-content-center align-items-center h-100">
         <div className="row wallet-bg">
            {
               cards2.map(({title, id}) => (
                  <div className="">
                     <Card2 title={title} />
                  </div>
               ))
            }
         </div>
      </div>
   )
}

export default Cards2
