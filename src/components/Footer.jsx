import React from 'react'
import {FaGithub} from 'react-icons/fa'


export default function Footerpart(){
    return(
        <div>
            <footer>
                <a href="https://twitter.com/home" target='_blank'><button><i className='fab fa-twitter'></i></button></a>
                <a href="https://www.facebook.com/" target='_blank'><button><i className="fa fa-facebook-square"></i></button></a>
                <a href="https://www.instagram.com/" target='_blank'><button> <i className='fab fa-instagram'></i></button></a>
                <a href="https://github.com/ChandrasekarNakamoto" target='_blank'><button ><i className="fa fa-github"></i></button></a>
                <a href="https://github.com/ChandrasekarNakamoto" target='_blank'><button ><i><FaGithub /></i></button></a>
            </footer>
        </div>
    )
}