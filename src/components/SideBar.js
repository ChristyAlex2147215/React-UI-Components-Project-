import React from 'react'
import Link from './Links';

const data=[{"label":"DropDown","path":"/dropdown"},
{"label":"Accordion","path":"/accordion"},
{"label":"Buttons","path":"/buttons"},{"label":"Modal","path":"/model"},{"label":"Table","path":"/table"},
{"label":"Counter","path":"/counter"}];
const SideBar = () => {
    const mappedData=data.map((item,index)=>(<Link to={item.path} key={index}  className="mb-3" activeClassName="font-bold border-l-4 border border-blue-500 pl-2">{item.label}</Link>))
  return (
    <div className='flex flex-col sticky top-0 overflow-hidden flex flex-col items-start'>
      {mappedData}
    </div>
  )
}

export default SideBar