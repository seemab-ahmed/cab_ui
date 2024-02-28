import React from 'react'
import BackgroundCard from './BackgroundCard'
import LoginForm from './LoginForm'
export const Login = ()=> {
  return (
      <BackgroundCard>
      <span className="block w-full text-4xl uppercase font-bold mb-4">Login</span>   
      <LoginForm />
    </BackgroundCard>
  )
}
