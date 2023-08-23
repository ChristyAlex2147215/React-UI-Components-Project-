import React,{useState,useEffect} from 'react'

function CounterHook(initialValue) 
{
    const [counter,setCounter]=useState(initialValue);

    const incrementCount=()=>
    {
        setCounter(present=>(present+1));
    }
    const decrementCount=()=>
    {
        setCounter(present=>(present-1));
    }
    const updateCount=()=>
    {
        setCounter(initialValue);
    }

    useEffect(()=>{console.log("counter value is =>",counter)},[counter])
  return {counter,incrementCount,decrementCount,updateCount}
}

export default CounterHook