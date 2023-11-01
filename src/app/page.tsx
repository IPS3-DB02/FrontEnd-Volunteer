import Image from 'next/image'
import Link from 'next/link'
import {
  MegaphoneIcon,
  StarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid'
import axios from 'axios'

import https from 'https'

import VolunteerListItem from '@/components/volunteerListItem'
import LoginLogoutButton from '@/components/loginLogoutButton'

import volunteerLogo from '../../public/images/VolunteerLogo.png'

interface Organization {
  id: number
  name: string
  description: string
  website: string
  logo: string
}

const getOrganizations = async () => {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  })

  try {
    const response = await axios.get(
      'https://localhost:7177/api/organizations',
      {
        httpsAgent: agent,
      }
    )

    if (!response.data) {
      throw new Error('No data received when fetching organizations')
    }

    return response.data
  } catch (error) {
    console.error('Error occurred while fetching organizations:', error)
    throw error
  }
}

const Home = async () => {
  const organizations = await getOrganizations()
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
