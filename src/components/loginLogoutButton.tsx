import React from 'react'
import Link from 'next/link'
import { useAuth0 } from '@auth0/auth0-react'
import {
  WrenchScrewdriverIcon,
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid'

function LoginLogoutButton() {
  const { user, isLoading, loginWithRedirect, logout } = useAuth0()

  if (isLoading) {
    return (
      <div className="menuContainerLogInOut">
        <div className="menuItem">
          <div className="menuButton">
            <WrenchScrewdriverIcon />
          </div>
          <div className="menuTitle">
            <button>LOADING...</button>
          </div>
        </div>
      </div>
    )
  }

  if (user) {
    return (
      <div
        role="button"
        className="menuContainerLogInOut"
        onClick={() =>
          logout({
            logoutParams: { returnTo: window.location.origin },
          })
        }
      >
        <div className="menuItem">
          <div className="menuButton">
            <ArrowRightOnRectangleIcon />
          </div>
          <div className="menuTitle">LOG OUT</div>
        </div>
      </div>
    )
  } else {
    return (
      <div
        role="button"
        className="menuContainerLogInOut"
        onClick={() => loginWithRedirect()}
      >
        <Link href={'/'}>
          <div className="menuItem">
            <div className="menuButton">
              <ArrowLeftOnRectangleIcon />
            </div>
            <div className="menuTitle">LOG IN</div>
          </div>
        </Link>
      </div>
    )
  }
}

export default LoginLogoutButton
