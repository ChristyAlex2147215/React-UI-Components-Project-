import React from 'react'
import DropDown from '../components/DropDown'
const data=[
    {"label":"Red","value":"red"},
    {"label":"Blue","value":"blue"},
    {"label":"Pink","value":"pink"},
    {"label":"Yellow","value":"yellow"},
]
const DropDownPage = () => {
  return (
    <div>
        <DropDown data={data}/>
    </div>
  )
}

export default DropDownPage