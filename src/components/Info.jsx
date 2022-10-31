import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import { MdMail } from "react-icons/md";


export default function Info(){
    return(
        <main className='infopart'>
            <h3>Chandrasekar R</h3>
            <h4>Frontend Developer</h4>
            <p>chandrasekar.website</p>
        <div>
        <a href="mailto: [chandrasekarceg@gmail.com]?subject= &body=" target='_blank'><button><i><MdMail /></i> Email</button></a>
        <a href="https://www.linkedin.com/in/chandrasekar-r-ba7366224/" target='_blank'><button> <i><FaLinkedin /></i>LinkedIn</button></a>

        </div>
        </main>
    )
}