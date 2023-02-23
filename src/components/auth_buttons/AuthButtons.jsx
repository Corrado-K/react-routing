import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { LogoutButton } from './LogoutButton'
import { LoginButton } from './LoginButton'
import { SignUpButton } from './SignUpButton'

export const AuthButtons = () => {
     const { isAuthenticated } = useAuth0 ()

     return (
          <div>
               {!isAuthenticated && (
                    <div className="space-x-2">
                         <SignUpButton />
                         <LoginButton />     
                    </div>
               )}
               {isAuthenticated && (
                    <LogoutButton />
               )}
          </div>
     )
}
