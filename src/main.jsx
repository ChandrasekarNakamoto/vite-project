import React from 'react'
import ReactDOM from 'react-dom/client'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footerpart from './components/Footer'



import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Info />
    <About />
    <Interests />
    <Footerpart />
  </React.StrictMode>
)
