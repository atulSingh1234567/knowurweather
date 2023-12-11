import React, { useState, useEffect } from 'react'
import axios, { AxiosError } from 'axios'
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { BsCloudHaze2Fill } from "react-icons/bs";
import { WiDayHaze } from "react-icons/wi";
import { RiSearch2Line } from "react-icons/ri";
import { motion } from 'framer-motion'
import Time from './Time';


const variants = {

  initial: {
    y: '100%',
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3
    }
  }

}

const otherVar = {
  initial: {
    x: '-200%',
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2
    }
  }
}

let style = (color) => {
  return (
    {
      position: 'absolute', top: '5px', right: '50px', width: '100px', height: '100px', color: `${color}`
    }
  )
}

export default function Weather() {

  const [city, setCity] = useState({})
  const [written, setWritten] = useState('')
  // const [error , setError] = useState('')

  useEffect(
    () => {
      axios.post('http://localhost:8000/weather')
        .then(
          (response) => {
            setCity(response.data)
          }
        )
        .catch(
          (err) => {
            console.log(err)
          }
        )
    }, []
  )

  // console.log(city)
  const determineWeatherIcon = (weather) => {
    if (weather === 'Clouds') {
      return <CloudIcon style={style('white')} />
    } else if (weather === 'Clear') {
      return <WbSunnyIcon style={style('orange')} />
    } else if (weather === 'Mist') {

      return <BsCloudHaze2Fill style={style('grey')} />
    }
    else if (weather === 'Haze') {
      return <WiDayHaze style={style('white')} />
    }
  }


  // console.log(time)

  const searchQuery = (e) => {
    e.preventDefault()

    // console.log("printintg")
    axios.post('http://localhost:8000/weather', { city: written })
      .then(
        (response) => {
          setCity(response.data)
          // console.log(response)
        }
      )
      .catch(
        (err) => {
          console.log(err)
          // setError(err.message)
        }
      )

  }



  return (
    <motion.div className='flex flex-col items-center  h-screen justify-center gap-6'>
      {/* <div className='text-3xl text-red-800 font-normal bg-red-200 w-52 text-center rounded-xl'>
        {
          error
        }
      </div> */}
      <div className='relative'>
        <form action='' onSubmit={searchQuery}>
          <input type="text" placeholder='search your city' className='p-5 hover:bg-gray-200 focus:outline-none w-96 border h-12 text-xl rounded-xl ' onChange={(e ) => setWritten(e.target.value)} value={written} />
          <button type='submit' className='absolute right-0 bottom-4'><RiSearch2Line style={{ width: '40px', height: '20px' }} /></button>
        </form>
      </div>
      <div className='h-1/2 w-96 rounded-xl bg-blue-300 border overflow-hidden relative'>
        <motion.div variants={variants} initial='initial' animate='animate'>
          <h1 className='text-3xl font-bold pl-6 pt-2 '>{city.name && `${city.name},`} {city.sys && `${city.sys.country}`}</h1>
          <motion.span variants={variants}>
            {
              city.weather && determineWeatherIcon(city.weather[0].main)
            }
          </motion.span>
        </motion.div>
        <div className='w-full shadow-xl z-0 h-96 bg-blue-100 absolute top-32 right-24 rounded-full ease-in transition-transform duration-1000 animate-spin'></div>
        <div className='w-full z-10 h-96 bg-blue-200 rounded-full absolute top-24 left-8 animate-spin transition-transform'></div>
        <div className='w-full z-20 h-96 bg-blue-100 rounded-full shadow-xl absolute top-56 right-20 animate-spin transition-transform '></div>
        <motion.h2 variants={otherVar} initial='initial' animate='animate' className='z-40 absolute bottom-32 left-8 text-2xl'>
          <span className='text-sky-800'>Temp:</span>
          {
            city.main && ` ${city.main.temp} C`
          }
        </motion.h2>
        <motion.div variants={otherVar} initial='initial' animate='animate' className='absolute bottom-32 z-40 right-8'>
          <Time />
        </motion.div>
        {/* <motion.div variants={otherVar} initial='initial' animate='animate' className='absolute bottom-24 left-8 z-40'>
          <motion.span className='text-blue-800 font-thin'>Wind Speed: </motion.span> {city.wind && `${city.wind.speed}`}
          <motion.span className='ml-1'>km/hr</motion.span>
        </motion.div> */}
      </div>
    </motion.div>
  )
}
