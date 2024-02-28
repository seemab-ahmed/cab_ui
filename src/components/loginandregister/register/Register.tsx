import React from 'react'
import BackgroundCard from '../BackgroundCard'
import RegisterForm from './RegisterForm'
export const Register = ()=> {
  return (
      <BackgroundCard>
      <span className="block w-full text-4xl uppercase font-bold mb-4">Sign Up</span>   
      <RegisterForm />
    </BackgroundCard>
  )
}
