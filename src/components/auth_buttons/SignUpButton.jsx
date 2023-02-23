import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export const SignUpButton = () => {

     const { loginWithRedirect } = useAuth0()

     const handleSignUp = async () => {
          await loginWithRedirect({
               appState: {
                    returnTo: "/"
               },
               authorizationParams: {
                    screen_hint: "signup",
               }
          })
     }

     return (
          <button className="lg:rounded-lg text-white px-4 py-2 bg-[#061922]" onClick={handleSignUp}>
               Sign Up
          </button>
     )
}
