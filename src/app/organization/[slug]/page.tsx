'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'

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

export default function Page() {
  const { slug } = useParams()

  const [organizationData, setOrganizationData] = useState<Organization | null>(
    null
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/organization/${slug}`
        )
        const data = await res.json()
        setOrganizationData(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    if (slug) {
      fetchData()
    }
  }, [slug])

  if (!organizationData) {
    return <div className="organizationContainer">Loading...</div>
  }

  return (
    <div className="organizationContainer">
      <Link href={'/'}>
        <h1 className="organizationGoBack">⬐ Go back</h1>
      </Link>
      <h1 className="organizationTitle">{organizationData.name}</h1>
      <h1 className="organizationText">{organizationData.descriptionLong}</h1>
      <h1 className="organizationText">Email: {organizationData.email}</h1>
      <Link href={organizationData.website}>
        <div className="organisationDetailsButton">
          <div className="organisationButton">Check website</div>
        </div>
      </Link>
    </div>
  )
}
