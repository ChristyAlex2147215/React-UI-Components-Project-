import React,{useState} from 'react';
import CounterHook from "../CustomHooks/CounterHook"
import Button from "../components/Button"
const Counter = ({count,incrementCount,decrementCount}) => {
    // console.log(count , count , count)
 
  return (
    <div className='align'>
       <div className='flex p-3 m-3 justify-start content-between gap-5 flex-row'>
       <Button onClick={incrementCount} primary rounded className='text-center content-center items-center'>Increment : {count}</Button>
        <Button onClick={decrementCount} primary rounded className='text-center'>Decrement : {count}</Button>
       </div>
      
    </div>
  )
}

export default Counter