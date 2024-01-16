'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  MegaphoneIcon,
  StarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useUser } from '@auth0/nextjs-auth0/client'

import VolunteerListItem from '@/components/volunteerListItem'
import LoginLogoutButton from '@/components/loginLogoutButton'
import volunteerLogo from '@/../public/images/VolunteerLogo.png'

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

interface Favorite {
  id: number
  userId: string
  favoriteOrganizationId: number
}

export default function Page() {
  const { user, isLoading } = useUser()
  const userId = user?.sub
  const { slug } = useParams()

  const [organizations, setOrganizations] = useState<Organization[]>([])
  const [favorites, setFavorites] = useState<Favorite[]>([])

  useEffect(() => {
    const fetchFavoriteOrganizations = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/favorites/${slug}/organisations`
        )

        const organizationsData = await res.json()
        setOrganizations(organizationsData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    const fetchFavorites = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/favorites/${slug}`
        )

        const favoritesData = await res.json()
        setFavorites(favoritesData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    if (slug) {
      fetchFavoriteOrganizations()
      fetchFavorites()
    }
  }, [slug, userId])

  if (!organizations || isLoading) {
    return <div className="organizationContainer">Loading...</div>
  }

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
            <Link href={`/favorites/${userId}`}>
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
              favorites={favorites}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
