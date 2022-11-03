import React from 'react'
import ListCat from '../component/ListCat'

export default function Cats({allPet}) {
  return (
    <div>
      <ListCat pets={allPet}/>
    </div>
  )
}
