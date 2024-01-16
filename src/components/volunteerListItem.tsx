import StarOutlineIcon from '@heroicons/react/24/outline/StarIcon'
import StarSolidIcon from '@heroicons/react/24/solid/StarIcon'
import { Link } from '@nextui-org/react'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useState } from 'react'
import React from 'react'
import axios from 'axios'

interface VolunteerItem {
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

interface Props {
  volunteerItem: VolunteerItem
  favorites: Favorite[]
}

const VolunteerListItem: React.FC<Props> = ({ volunteerItem, favorites }) => {
  const { user } = useUser()
  const userId = user?.sub

  const [isFavorite, setIsFavorite] = useState(
    favorites.some(
      (favorite) => favorite.favoriteOrganizationId === volunteerItem.id
    )
  )

  const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        const idToBeDeleted = favorites.find(
          (favorite) => favorite.favoriteOrganizationId === volunteerItem.id
        )?.id

        if (idToBeDeleted !== undefined) {
          await axios.delete(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/favorite/${idToBeDeleted}`
          )
        }
      } else {
        await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/favorite`, {
          id: Math.floor(Math.random() * (9999999 - 1 + 1)) + 1,
          userId: userId,
          favoriteOrganizationId: volunteerItem.id,
        })
      }

      setIsFavorite((prevIsFavorite) => !prevIsFavorite)
      window.location.reload()
    } catch (error) {
      console.error('Error toggling favorite:', error)
    }
  }

  return (
    <div className="volunteerBlock">
      <h1>{volunteerItem.name}</h1>
      <p>{volunteerItem.description}</p>
      <div className="row">
        <div className="block">
          <Link href={`/organization/${volunteerItem.id}`}>
            <div className="organisationItem">
              <div className="organisationButton">Check organisation</div>
            </div>
          </Link>
        </div>
        <div className="block">
          <div className="favouriteStar" onClick={toggleFavorite}>
            {isFavorite ? <StarSolidIcon /> : <StarOutlineIcon />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VolunteerListItem
