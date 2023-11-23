import StarOutlineIcon from '@heroicons/react/24/outline/StarIcon'
// import StarSolidIcon from '@heroicons/react/24/solid/StarIcon'
import { Link } from '@nextui-org/react'
import React from 'react'

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

interface Props {
  volunteerItem: VolunteerItem
}

const VolunteerListItem: React.FC<Props> = ({ volunteerItem }) => {
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
          <div className="favouriteStar">
            <StarOutlineIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VolunteerListItem
