import React from 'react'
import image from '../assets/Chandrasekar_image.jpg'

export default function Info(){
    return(
        <main>
            <img src={image} alt="My Image" />
            <h3>Chandrasekar R</h3>
            <h4>Frontend Developer</h4>
            <p>chandrasekar.website</p>
        <div>
        <a href="mailto: [chandrasekarceg@gmail.com]?subject= &body=" target='_blank'><button><i className='fas fa-envelope'></i> Email</button></a>
        <a href="https://www.linkedin.com/in/chandrasekar-r-ba7366224/" target='_blank'><button> <i className='fab fa-linkedin-in'></i>LinkedIn</button></a>

        </div>
        </main>
    )
}