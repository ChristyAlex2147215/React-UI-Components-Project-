import React from 'react'
import Button from '../components/Button'
import { GoBell, GoCloud, GoDatabase } from 'react-icons/go';

 const ButtonsPage = () => {
    const handleClick=()=>
    {
        console.log("button click event")
    }
  return (
    <div>
    <div>
      <Button
        primary
        outline
        rounded
        className="mb-5"
        onClick={handleClick}
      >
        <GoBell />
        primary outline rounded
      </Button>
    </div>
    <div>
      <Button danger outline onMouseEnter={handleClick}>
        <GoCloud />
        danger outline
      </Button>
    </div>
    <div>
      <Button warning onMouseLeave={handleClick}>
        <GoDatabase />
        warning
      </Button>
    </div>
    <div>
      <Button secondary outline>
      secondary outline
      </Button>
    </div>
    <div>
      <Button primary rounded outline>
      primary rounded outline
      </Button>
    </div>
    <div>
      <Button primary rounded>
      primary rounded
      </Button>
    </div>
  </div>
  )
}

export default ButtonsPage
