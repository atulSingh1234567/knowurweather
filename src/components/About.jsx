import React from 'react'
import { DiNodejs } from "react-icons/di";

export default function About() {
  return (
    <div className='h-screen border p-10 gap-5 border-black justify-center flex flex-col'>
      <h1 className='text-blue-400 text-5xl '>About the Application</h1>
      <div>
        <p className='text-xl'>This is the very first application, I developed, has backend. I'm using <span className='text-yellow-400'>Node.js</span> and <span className='text-sky-500'>Express.js</span> as my backend. </p>
         <p className='text-xl'>Styling is done using tailwind and to make the application alive, <span className='text-rose-500'>Framer-motion</span> has been used.</p>
         <p className='text-xl'>The website is pretty basic but while I was developing this, many of my concepts got cleared.</p>
      </div>
      <h1 className='text-2xl'>It was a good learning tho!! Let's see if I would do further changes in it.</h1>
    </div>
  )
}
