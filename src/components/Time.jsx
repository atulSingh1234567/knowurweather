import React, { useState, useEffect } from 'react'

export default function Time() {
    const [time ,setTime] = useState('');
   
    useEffect(
        ()=>{
            setInterval(
                ()=>{
                    let date = new Date();
                    let hour = date.getHours();
                    let min = date.getMinutes();

                    setTime(`${hour}:${min}`)
                }
                , 1000
            )
        }, []
    )

    // console.log(time)
    

  return (
    
       <h1 className='text-2xl '><span className='text-sky-800 mr-2'>Time:</span>{time}</h1>
    
  )
}
