import React from 'react'
import CatDog from '../assets/images/CatDog_true.jpg'
import Image3 from '../assets/images/images3_true.jpg'
import Image4 from '../assets/images/mascotas_true.jpg'

export default function Carrousel() {
  return (
    <section id='carrousel'>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-pause='false' data-bs-ride="carousel" >
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={CatDog} className="d-block w-100" alt="imagen-perro-gato" />
                </div>
                <div className="carousel-item">
                <img src={Image3} className="d-block w-100" alt="imagen-persona-perro" />
                </div>
                <div className="carousel-item">
                <img src={Image4} className="d-block w-100" alt="imagen-gato-perro" />
                </div>
            </div>
            <div className="overlay">
                <div className="container h-100">
                    <div className="row h-100 align-items-center align-items-md-end">
                        <article className='col-md-6 text-center text-md-start'>
                            <h1>
                                Somos LovePets
                            </h1>
                            <p className='d-none d-md-block'>Tus personas ideales para cuidar tu mascota, todas las personas que encontrarás aquí han pasado por un filtro riguroso y cuentan con las mejores condiciones y apoyo de nuestra parte para garantizar el cuidado de tu mascota, solo debes darle al botón de contactar y la persona que elijas te responderá lo mas pronto posible. Gracias por confiar en nosotros!
                            </p>
                        </article>
                    </div>
                </div>                
            </div>          
        </div>
    </section>
  )
}
