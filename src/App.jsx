import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footerpart from './components/Footer'
import MyImage from './components/MyImage'


export default function App(){
    return (
    <div>
        <div className='main'>
            <MyImage />
            <Info/>
            <div className='aboutint'>
            <About />
            <Interests />
            </div>
        </div>
        <Footerpart />
    </div>
    )
}