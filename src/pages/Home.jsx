import React, { useState, useEffect } from 'react'
import CardsContainer from '../components/CardsContainer'

const API = 'https://reqres.in/api/users'


export default function Home() {
    const [user, setUser] = useState([])
    useEffect(()=>{
        fetch(API)
            .then(response => response.json())
            .then(users => setUser(users.data))
    }, [])
    console.log(user)
  return (
    <section>
        <CardsContainer user={user} />
    </section>
  )
}
