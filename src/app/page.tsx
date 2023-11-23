'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  MegaphoneIcon,
  StarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'

import VolunteerListItem from '@/components/volunteerListItem'
import LoginLogoutButton from '@/components/loginLogoutButton'

import volunteerLogo from '../../public/images/VolunteerLogo.png'

interface Organization {
  id: number
  organization_user_id: number
  name: string
  description: string
  descriptionLong: string
  email: string
  website: string
  banner_image: string
}

const Home = () => {
  const [organizations, setOrganizations] = useState<Organization[]>([])

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/organizations')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setOrganizations(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

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
          {organizations.map((organization: Organization) => (
            <VolunteerListItem
              key={organization.id}
              volunteerItem={organization}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
