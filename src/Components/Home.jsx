import React from 'react'
import Hright from './Hright'
import Hleft from './Hleft'
import { Route } from 'react-router-dom'
import Righthome from './Righthome'

const Home = () => {
  return (
    <>
    <div className='flex' id='div-top'>
    <Hleft/>
    <Righthome/>
    </div>
    </>
  )
}

export default Home