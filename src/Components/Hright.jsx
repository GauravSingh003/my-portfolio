import React from 'react'
import react from '../images/react.jpeg';
import node from '../images/node.jpeg';
import tailwind from '../images/tlwnd.png';
import js from '../images/js.jpeg';
import mongo from '../images/mongo.jpeg';
import express from '../images/express.jpeg';


const Hright = () => {
  return (
    <>
        <div class="rcontainer">
        <div class="hrbox">
            <div class="rcard" id="top">
                <img src={react} alt=""/>
            </div>
            <div class="rcard" id="right">
                <img src={node} alt=""/>
            </div>
            <div class="rcard" id="left">
                <img src={mongo} alt=""/>
            </div>
            <div class="rcard" id="bottom">
                <img src={express} alt=""/>
            </div>
            <div class="rcard" id="front">
                <img src={tailwind} alt=""/>
            </div>
            <div class="rcard" id="back">
                <img src={js} alt=""/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hright;