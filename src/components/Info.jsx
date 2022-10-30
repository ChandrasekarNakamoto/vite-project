import React from 'react'
import image from '../assets/Chandrasekar_image.jpg'
import {FaLinkedin,FaMail} from 'react-icons/fa'


export default function Info(){
    return(
        <main>
            <img src={image} alt="My Image" />
            <h3>Chandrasekar R</h3>
            <h4>Frontend Developer</h4>
            <p>chandrasekar.website</p>
        <div>
        <a href="mailto: [chandrasekarceg@gmail.com]?subject= &body=" target='_blank'><button><i><FaMail /></i> Email</button></a>
        <a href="https://www.linkedin.com/in/chandrasekar-r-ba7366224/" target='_blank'><button> <i><FaLinkedin /></i>LinkedIn</button></a>

        </div>
        </main>
    )
}