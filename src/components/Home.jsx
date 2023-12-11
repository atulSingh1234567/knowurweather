import React from 'react';
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'

export default function Home() {
   
    const history = useNavigate();
    console.log(history)
    const GoTo = ()=>{
        history('/weather')
    }

    const variables = {
        initial: {
            x: '-100%',
            opacity: 0
        },
        animate: {
            x:0,
            opacity: 1,
            transition: {
                repeat: Infinity,
                repeatType: 'mirror',
                duration:5                
            }
        }
    }


  return (
    <div className='flex gap-6 bg-blue-100 items-center justify-center h-screen overflow-hidden'>
      <motion.div variants={variables} initial='initial' animate='animate' className='absolute top-24 w-2/3 h-4'>
       <motion.img src="/Clouds.png" alt="cant upload" />
      </motion.div>
      <div className='z-20 flex flex-col gap-1 w-1/2'>
        <p className='text-normal tracking-wide font-thin'>Welcome to weather app</p>
        <h1 className='text-2xl font-thin'>Get The Latest <span className='text-blue-500 font-bold'>Weather</span> Info Of Your City</h1>
        <button onClick={GoTo} className='mt-5 w-28 h-10 bg-blue-400 text-white hover:text-gray-500 rounded-xl'>CHECK NOW</button>
      </div>
    </div>
  );
}
