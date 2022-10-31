import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footerpart from './components/Footer'
import MyImage from './components/MyImage'


export default function App(){
    return (
    <div className='main'>
        <MyImage />
        <Info/>
        <About />
        <Interests />
        <Footerpart />
    </div>
    )
}