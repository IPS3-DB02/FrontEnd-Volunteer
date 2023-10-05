import { useEffect, useState } from 'react'
import Image from 'next/image'
import volunteerLogo from '@/images/VolunteerLogo.png'
import Link from 'next/link'
import {
  MegaphoneIcon,
  StarIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid'
import VolunteerListItem from '@/components/volunteerListItem'
import axios from 'axios'

interface Organization {
  id: number
  name: string
  description: string
  website: string
  logo: string
}

const Home = () => {
  const [organizations, setOrganizations] = useState([])

  useEffect(() => {
    axios
      .get('/api/organizations')
      .then((response) => {
        setOrganizations(response.data)
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
            <Link href={'/'}>
              <div className="menuItem">
                <div className="menuButton">
                  <StarIcon />
                </div>
                <div className="menuTitle">FAVOURITES</div>
              </div>
            </Link>
            <Link href={'/'}>
              <div className="menuItem">
                <div className="menuButton">
                  <Cog6ToothIcon />
                </div>
                <div className="menuTitle">SETTINGS</div>
              </div>
            </Link>
          </div>
          <div className="menuContainerLogInOut">
            <Link href={'/'}>
              <div className="menuItem">
                <div className="menuButton">
                  <ArrowRightOnRectangleIcon />
                </div>
                <div className="menuTitle">LOG OUT</div>
              </div>
            </Link>
          </div>
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
