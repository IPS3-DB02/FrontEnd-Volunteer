import Image from 'next/image'
import volunteerLogo from '../images/VolunteerLogo.png'
import Link from 'next/link'
import {
  MegaphoneIcon,
  StarIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid'

const Home = () => {
  return (
    <div className={'container2'}>
      <div className={'sidebar'}>
        <Image className="logo" src={volunteerLogo} alt="Volunteer Logo" />
        {/* Plaats hier je zijbalkinhoud */}
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
          {/* Plaats hier je scrollbare inhoud */}
          <div className="volunteerBlock">
            <h1>Organisation 1</h1>
          </div>
          <div className="volunteerBlock">
            <h1>Organisation 2</h1>
          </div>
          <div className="volunteerBlock">
            <h1>Organisation 3</h1>
          </div>
          <div className="volunteerBlock"></div>
          <div className="volunteerBlock"></div>
          <div className="volunteerBlock"></div>
          <div className="volunteerBlock"></div>
          <div className="volunteerBlock"></div>
          <div className="volunteerBlock"></div>
          {/* Voeg hier de rest van je inhoud toe */}
        </div>
      </div>
    </div>
  )
}

export default Home
