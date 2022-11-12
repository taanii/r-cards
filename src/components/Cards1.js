import React from 'react'
import Card1 from './Card1'

const cards1 = [
   {
      id: 1,
      title: 'TOKEN ISSUER',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
   },
   {
      id: 2,
      title: 'INVESTOR',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
   }
]


function Cards1() {
   return (
      <div className="container d-flex justify-content-center align-items-center h-100">
         <div className="row">
            {
               cards1.map(({title, id, text}) => (
                  <div className="col-md-6">
                     <Card1 title={title} text={text} />
                  </div>
               ))
            }
         </div>
      </div>
   )
}

export default Cards1
