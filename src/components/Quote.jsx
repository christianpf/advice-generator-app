import React, {useState, useEffect} from 'react'

import desktopDivider from '../assets/pattern-divider-desktop.svg'

import iconDice from '../assets/icon-dice.svg'

const Quote = () => {

  const [data, setData] = useState({
    slip: {
      id: '',
      advice: ''
    }
  });

  const handleClick = () => {
    fetchData();
  }

  const fetchData = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.error(err))
    console.log(data)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='container relative grid place-items-center gap-4 text-center sm:w-1/2 w-auto h-auto mx-4 bg-neutral-400 rounded-lg p-4'>
        <h3 className='text-base text-primary-700 font-medium tracking-widest'>ADVICE #{data.slip.id}</h3>
        <p className='text-quote text-primary-400 font-regular'>&ldquo;{data.slip.advice}&rdquo;</p>

        <picture>
          <img className="w-full mt-4 mb-10" src={desktopDivider} alt="" />
        </picture>

        <div className='container-sm flex absolute bottom-0 translate-y-5  p-3 rounded-full bg-primary-700 hover:shadow-glow hover:shadow-primary-700'>
          <button onClick={handleClick}>
            <p className='hidden'>Generate new</p>
            <img src={iconDice} alt="" />
          </button>
        </div>
    </div>
  )
}

export default Quote;