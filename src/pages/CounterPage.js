import React,{useState} from 'react'
import Counter from '../components/Counter'
import CounterHook from "../CustomHooks/CounterHook"
import Button from '../components/Button'

const CounterPage = () => {
  const [count,setCount]=useState(6)
  const {counter,updateCount,incrementCount,decrementCount}=CounterHook(count);

  const handleChage=(e)=>
  {
    setCount(e.target.value);
    console.log(e.target.value);
      // updateCount(e.target.value);
  }
  return (
    <div>
        <Counter count={counter} incrementCount={incrementCount} decrementCount={decrementCount}/>
        <div className='flex p-3 m-g justify-start gap-3'>
            <input type='number' onChange={(e)=>handleChage(e)}/>
            <Button primary onClick={()=>updateCount(count)}>Set</Button>
        </div>
    </div>
  )
}

export default CounterPage;