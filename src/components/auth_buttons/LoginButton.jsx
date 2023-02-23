import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export const LoginButton = () => {
     const { loginWithRedirect } = useAuth0()

     const handleLogin = async () => {
          await loginWithRedirect({
               appState: {
                    returnTo: "/"
               }
          })
     }

     return (
          <button className="lg:rounded-lg text-white px-4 py-2 bg-[#061922]" onClick={handleLogin}>
               Login
          </button>
     )
}
