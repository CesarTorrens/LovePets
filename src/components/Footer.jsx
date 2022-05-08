import React from 'react'
import FacebookLogo from '../assets/icons/facebook.svg'
import InLogo from '../assets/icons/LinkedIn.svg'
import GitLogo from '../assets/icons/github.svg'
import WhatsApp from '../assets/icons/WhatsApp.svg'
import '../index.css'
export default function Footer() {
  return (
    <footer id='footer'>
        <div className='container'>
          <div className="row">
            <div className="col-sm-9 col-md-9">
              <ul className='footer-left d-flex flex-column m-0 ps-0 ps-sm-2 pt-3 pb-3'>
                <li className='align-self-center align-self-sm-start'>Created by Cesar Torrens</li>
                <li className='align-self-center align-self-sm-start'>
                  <img width={24} height={24} src={WhatsApp} alt="logo-whatsapp" /> <span>+573137279147</span>
                </li>
              </ul>            
            </div>
            <div className="col d-flex align-items-center">
            <ul className='footer-right d-flex ps-0 pb-3 m-0 p-sm-0 w-100 justify-content-center justify-content-lg-end gap-3'>
                <li className='cursor-pointer'><a href="#"></a><img src={FacebookLogo} alt="logo-github" /></li>
                <li className='cursor-pointer'><a href="#"></a><img src={InLogo} alt="logo-linkedin" /></li>
                <li className='cursor-pointer'><a href="#"></a><img src={GitLogo} alt="logo-facebook" /></li>
              </ul>
            </div>
          </div>
        </div>
    </footer>
  )
}
