import React from 'react'
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import VolunteerListItem from '../src/components/volunteerListItem'

test('VolunteerListItem renders with the correct data', () => {
  const volunteerItem = {
    id: 1,
    organization_user_id: 1,
    name: 'Test Organisation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    descriptionLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    email: 'email@email.com',
    website: 'website.com',
    banner_image: 'image-source',
  }

  render(<VolunteerListItem volunteerItem={volunteerItem} favorites={[]} />)

  const name = screen.getByText(volunteerItem.name)
  const description = screen.getByText(volunteerItem.description)

  expect(name).toBeInTheDocument()
  expect(description).toBeInTheDocument()
})
