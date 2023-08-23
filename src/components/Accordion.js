import React,{useState} from 'react'
import {GoTriangleDown,GoTriangleLeft} from  "react-icons/go";


const Accordion = ({items}) => {
  const [expandedIndex,setExpandedIndex]=useState(-1);
  

    // console.log(items)
    const expand=(index)=>
    {
      console.log(index)
      // if(index===expandedIndex)
      // {
      //   setExpandedIndex(-1)
      // }
      // else
      // { 
      //   setExpandedIndex(index)} 
      setExpandedIndex(currentExpandedIndex=>{
        if(currentExpandedIndex ===index)
        {return -1}
        return index;
      })
     
    }
const mapItems=items.map((item,index)=>
{
  const isExpanded=index===expandedIndex;
  const content=isExpanded && <div className='border border-black p-5'>{item.content}</div>
  const iconType=<span className='text-xl'>{isExpanded ? <GoTriangleDown size={30}/>:<GoTriangleLeft size={30}/>}</span>
  return(
        <div key={index} className='justify-center flex-col items-center w-full'>
            <div onClick={()=>{expand(index)}} className='border border-black flex flex-row justify-between p-3 bg-grey-50 border-b items-center cursor-pointer'>{item.label}{iconType}</div>
           {content}
        </div> 
  )
})
  return (
    <div className='border-x border-t rounded w-4/5 justify-center align-center'>{mapItems}</div>
  )
}

export default Accordion