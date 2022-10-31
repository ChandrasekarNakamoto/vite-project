import React from 'react'
import {FaGithub,FaTwitter,FaFacebook, FaInstagram} from 'react-icons/fa'


export default function Footerpart(){
    return(
        <div>
            <footer className='footers'>
                <a href="https://twitter.com/home" target='_blank'><i><FaTwitter /></i></a>
                <a href="https://www.facebook.com/" target='_blank'><i><FaFacebook /></i></a>
                <a href="https://www.instagram.com/" target='_blank'><i><FaInstagram /></i></a>
                <a href="https://github.com/ChandrasekarNakamoto" target='_blank'><i><FaGithub /></i></a>
            </footer>
        </div>
    )
}