import Image from 'next/image'
import volunteerLogo from '../images/VolunteerLogo.png'
import Link from 'next/link'
import {
  MegaphoneIcon,
  StarIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid'
import VolunteerListItem from '@/components/volunteerListItem'

const volunteerListItems = [
  {
    id: 1,
    title: 'First organisation',
    content: 'Content/Description of the first organisation.',
  },
  {
    id: 2,
    title: 'Second organisation',
    content: 'Content/Description of the second organisation.',
  },
  {
    id: 3,
    title: 'Third organisation',
    content: 'Content/Description of the third organisation.',
  },
  {
    id: 4,
    title: 'Fourth organisation',
    content: 'Content/Description of the fourth organisation.',
  },
  {
    id: 5,
    title: 'Fifth organisation',
    content: 'Content/Description of the fifth organisation.',
  },
  {
    id: 6,
    title: 'Sixth organisation',
    content: 'Content/Description of the sixth organisation.',
  },
  {
    id: 7,
    title: 'Seventh organisation',
    content: 'Content/Description of the seventh organisation.',
  },
]

const Home = () => {
  return (
    <div className={'container2'}>
      <div className={'sidebar'}>
        <Image className="logo" src={volunteerLogo} alt="Volunteer Logo" />
        <div className="menuContainer">
          <div className="menuContainer">
            <Link href={'/'}>
              <div className="menuItem">
                <div className="menuButton">
                  <MegaphoneIcon className="h-8.5 w-8.5" />
                </div>
                <div className="menuTitle">VOLUNTEER</div>
              </div>
            </Link>
            <Link href={'/'}>
              <div className="menuItem">
                <div className="menuButton">
                  <StarIcon className="h-8.5 w-8.5" />
                </div>
                <div className="menuTitle">FAVOURITES</div>
              </div>
            </Link>
            <Link href={'/'}>
              <div className="menuItem">
                <div className="menuButton">
                  <Cog6ToothIcon className="h-8.5 w-8.5" />
                </div>
                <div className="menuTitle">SETTINGS</div>
              </div>
            </Link>
          </div>
          <div className="menuContainerLogInOut">
            <Link href={'/'}>
              <div className="menuItem">
                <div className="menuButton">
                  <ArrowRightOnRectangleIcon className="h-8.5 w-8.5" />
                </div>
                <div className="menuTitle">LOG OUT</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={'content'}>
        <div className={'scrollableContent'}>
          {volunteerListItems.map((volunteerItem) => (
            <VolunteerListItem
              key={volunteerItem.id}
              volunteerItem={volunteerItem}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
