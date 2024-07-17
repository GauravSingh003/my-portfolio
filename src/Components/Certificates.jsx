import React from 'react'
import htm from '../images/html.png'
import css from '../images/css.png'
import node from '../images/node.png'
import design from '../images/web design.png'
import jsFoundation from '../images/jsFoundation.png'
import portfolio from '../images/portfolio.png'
import dev from '../images/web dev.png'
import dynamic from '../images/Dynamic design.png'
import es6 from '../images/es6.png'


const Certificates = () => {
  return (
    <>
    <div className="" id="mcert">
    <h2 className='text-2xl  font-bold text-center'>My Certifications</h2>
    <hr className='border-4  border-red-400 w-3/4 ml-28'></hr>
    <div className='mt-4' id="certificates">
        <div id="cf"><img src={htm} alt="" /></div>
        <div id="cf"><img src={css} alt="" /></div>
        <div id="cf"><img src={node} alt="" /></div>
        <div id="cf"><img src={design} alt="" /></div>
        <div id="cf"><img src={portfolio} alt="" /></div>
        <div id="cf"><img src={dev} alt="" /></div>
        <div id="cf"><img src={jsFoundation} alt="" /></div>
        <div id="cf"><img src={dynamic} alt="" /></div>
        <div id="cf"><img src={es6} alt="" /></div>
    </div>
    </div>
    </>
  )
}

export default Certificates;