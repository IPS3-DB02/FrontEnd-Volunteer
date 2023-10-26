import React from 'react'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client'
import {
  WrenchScrewdriverIcon,
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid'

function LoginLogoutButton() {
  const { user, isLoading } = useUser()
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
      <Link href={'/api/auth/logout'}>
        <div className="menuContainerLogInOut">
          <div className="menuItem">
            <div className="menuButton">
              <ArrowRightOnRectangleIcon />
            </div>
            <div className="menuTitle">LOG OUT</div>
          </div>
        </div>
      </Link>
    )
  } else {
    return (
      <Link href={'/api/auth/login'}>
        <div className="menuContainerLogInOut">
          <div className="menuItem">
            <div className="menuButton">
              <ArrowLeftOnRectangleIcon />
            </div>
            <div className="menuTitle">LOG IN</div>
          </div>
        </div>
      </Link>
    )
  }
}

export default LoginLogoutButton
