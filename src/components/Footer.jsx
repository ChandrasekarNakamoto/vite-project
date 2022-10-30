import React from 'react'
import {FaGithub,FaTwitter,FaFacebook, FaInstagram} from 'react-icons/fa'


export default function Footerpart(){
    return(
        <div>
            <footer>
                <a href="https://twitter.com/home" target='_blank'><button><i><FaTwitter /></i></button></a>
                <a href="https://www.facebook.com/" target='_blank'><button><i><FaFacebook /></i></button></a>
                <a href="https://www.instagram.com/" target='_blank'><button> <i><FaInstagram /></i></button></a>
                <a href="https://github.com/ChandrasekarNakamoto" target='_blank'><button ><i><FaGithub /></i></button></a>
            </footer>
        </div>
    )
}