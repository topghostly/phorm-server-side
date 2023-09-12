import React from 'react'
import Hero from './Hero'
import isAuthenticated from '../utils/isAuthenticated'
import { useNavigate } from 'react-router-dom'

const LandingPage: React.FC=()=> {
  const navigate = useNavigate() 
  return (
    <>
      {isAuthenticated() ?
      <Hero/> 
      :
      navigate('/login')
      }
    </>
  )
}

export default LandingPage