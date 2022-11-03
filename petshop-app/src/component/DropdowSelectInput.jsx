import React from 'react'
import { Dropdown } from 'react-bootstrap'

export default function DropdowSelectInput({title, petSearch, onSelect }) {
  return (
    <Dropdown className='bg-green-500'>
      <Dropdown.Toggle variant='success'>{title}</Dropdown.Toggle>

      <Dropdown.Menu>
        {petSearch.map((el, index) => (
          <Dropdown.Item key={index} onClick={() => onSelect(el.key)}>
            {el.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  ) 
}

