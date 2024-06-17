import React from 'react'
import Navbar from './Navbar'
import bg1 from '../bg1.jpeg'
import ReactTyped from "react-typed";
import './Home.css'
export default function Home() {
  return (
    <>
      <Navbar/>
      <img src={bg1} className='bgs'/>
      <h1 className='over' style={{ position: 'absolute', top: 200, left: 50 }}>
        <span className='search'>Get</span>{" "}
        <ReactTyped strings={["Study materials" , "Practicals" , "Assignments"]} typeSpeed={100} backSpeed={100} backDelay= {1000} loop />
      </h1>
      </>
  )
}
