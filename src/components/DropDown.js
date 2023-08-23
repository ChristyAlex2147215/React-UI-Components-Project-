import React, { useEffect, useState,useRef } from 'react';
import {GoChevronDown} from "react-icons/go"
import Panel from './Panel';

const DropDown = ({ data }) => {
  const [chosenValue, setChosenValue] = useState("Select...");
  const [isOpen, setIsOpen] = useState(false);

  const newRef=useRef()
  const handleClick = () => {
    setIsOpen((isPresentOpen) => !isPresentOpen);
  };


  useEffect(()=>{
    const handler=(event)=>
    {
    if(!newRef.current)
    {return;}
    if(!newRef.current.contains(event.target)){setIsOpen(false)}
    }
    document.addEventListener('click',handler,true);

    return ()=>{document.removeEventListener("click",handler)}
  }
  ,[])

  const handleSelect=(value)=>
  {
    setChosenValue(value);
    setIsOpen(false);

  }

  console.log(data)
  const mappedData = data.map((item, index) => (
    <div key={item.id || index} onClick={()=>handleSelect(item.value)}
    className='hover:bg-sky-100 rounded cursor-pointer  p-1'>{item.label}</div>
  ));

  return (
    <div className='w-48 relative' ref={newRef}>
      <Panel onClick={handleClick} 
      className='flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white'>
        {chosenValue}<GoChevronDown/>
        </Panel>
      {isOpen && <Panel className='absolute top-full border divide-y divide-slate-400'>{mappedData}</Panel>}
    </div>
  );
};

export default DropDown;
