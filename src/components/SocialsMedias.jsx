import React from 'react'
import Twitter from '../assets/icons/twitter.svg'
import Facebook from '../assets/icons/facebook.svg'
import In from '../assets/icons/LinkedIn.svg'
import Ig from '../assets/icons/ig.svg'

export default function SocialsMedias() {
  return (
    <div className='h-auto w-100 d-flex justify-content-evenly'>
        <a className='cursor-pointer' href="#"> <img src={Twitter} alt="enlace a twitter" /> </a>
        <a className='cursor-pointer' href="#"> <img src={Facebook} alt="enlace a facebook" /> </a>
        <a className='cursor-pointer' href="#"> <img src={In} alt="enlace a LinkedIn" /> </a>
        <a className='cursor-pointer' href="#"> <img src={Ig} alt="Instagram" /> </a>
    </div>
  )
}
