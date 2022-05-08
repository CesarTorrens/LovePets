import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from './FavoriteIcon'

export const favorite = []


export default function TestCard(props) {  
  console.log(props)
    function addToFavorite(props) {
    favorite.push(props)
    console.log(favorite)  
  }
  return (
    <>
     <div className="shadow-box col-sm-4 col-md-3 mt-4">
        <div className="card h-100">
            <img id='photo' src={props.img} className="card-img-top" alt="foto-persona" />
            <div className="card-body text-center">
                <h5 className="card-title">{ props.name } {props.lastName}</h5>
                <button onClick={() => addToFavorite(props)} type="button" className="btn btn-outline-danger me-2"> <FavoriteIcon/> </button>               
                    <Link className="btn btn-primary" to={`/users/${props.id}`} >
                    Contactar
                  </Link>
            </div>
        </div>        
    </div>
    </>
  )
}


