import React from 'react'
import Card from './Card'

const cards = [
   {
      id: 1,
      title: 'Vesting',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
   },
   {
      id: 2,
      title: 'Staking',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      tag: 'coming soon'
   },
   {
      id: 3,
      title: 'Airdropper',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      tag: 'coming soon'
   },
   {
      id: 4,
      title: 'IDO/ICO',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      tag: 'coming soon'
   },
   {
      id: 5,
      title: 'Token Salary',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      tag: 'coming soon'
   },
   {
      id: 6,
      title: 'Liquidity vaults',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      tag: 'coming soon'
   }
]


function Cards() {
   return (
      <div className="container d-flex justify-content-center align-items-center h-100">
         <div className="row">
            {
               cards.map(({title, id, text, tag}) => (
                  <div className="col-md-4">
                     <Card title={title} text={text} tag={tag} />
                  </div>
               ))
            }
         </div>
      </div>
   )
}

export default Cards
