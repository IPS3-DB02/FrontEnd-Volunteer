'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  MegaphoneIcon,
  StarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useUser } from '@auth0/nextjs-auth0/client'

import LoginLogoutButton from '@/components/loginLogoutButton'

import volunteerLogo from '../../../public/images/VolunteerLogo.png'

const Home = () => {
  const [recommended, setRecommended] = useState(false)
  const [favourites, setFavourites] = useState(false)
  const { user } = useUser()

  return (
    <div className={'container2'}>
      <div className={'sidebar'}>
        <Image className="logo" src={volunteerLogo} alt="Volunteer Logo" />
        <div className="menuContainer">
          <div className="menuContainer">
            <Link href={'/'}>
              <div className="menuItem">
                <div className="menuButton">
                  <MegaphoneIcon />
                </div>
                <div className="menuTitle">VOLUNTEER</div>
              </div>
            </Link>
            <Link href={'/favourites'}>
              <div className="menuItem">
                <div className="menuButton">
                  <StarIcon />
                </div>
                <div className="menuTitle">FAVOURITES</div>
              </div>
            </Link>
            <Link href={'/settings'}>
              <div className="menuItem">
                <div className="menuButton">
                  <Cog6ToothIcon />
                </div>
                <div className="menuTitle">SETTINGS</div>
              </div>
            </Link>
          </div>
          <LoginLogoutButton />
        </div>
      </div>
      <div className={'content'}>
        <div className={'scrollableContent'}>
          <div style={{ color: '#fff' }}>{user?.sub}</div>
          <div className="settingsContainer">
            <label className="settingsTitle">Settings</label>
            <div className="settingItem">
              <div className="settingsText">Email:</div>
              <input
                className="settingInput"
                type="text"
                value={user?.email?.toString()}
              />
            </div>
            <div className="settingItem">
              <div className="settingsText">Password:</div>
              <input className="settingInput" type="text" value="*****" />
            </div>
            <div className="settingItem">
              <div className="settingsText">
                Allow emails about your favourited organisations:
              </div>
              <Switch
                checked={favourites}
                onChange={setFavourites}
                className={`${
                  favourites ? 'bg-orange-600' : 'bg-gray-600'
                } relative inline-flex h-8 w-20 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    favourites ? 'translate-x-12' : 'translate-x-2'
                  } inline-block h-4 w-4 rounded-full bg-white transition`}
                />
              </Switch>
            </div>
            <div className="settingItem">
              <div className="settingsText">
                Allow emails about recommended organisations:
              </div>
              <Switch
                checked={recommended}
                onChange={setRecommended}
                className={`${
                  recommended ? 'bg-orange-600' : 'bg-gray-600'
                } relative inline-flex h-8 w-20 items-center rounded-full`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    recommended ? 'translate-x-12' : 'translate-x-2'
                  } inline-block h-4 w-4 rounded-full bg-white transition`}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
