import React from 'react'
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import VolunteerListItem from '../src/components/volunteerListItem'

test('VolunteerListItem renders with the correct data', () => {
  const volunteerItem = {
    name: 'Test Organisation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }

  render(<VolunteerListItem volunteerItem={volunteerItem} />)

  const name = screen.getByText(volunteerItem.name)
  const description = screen.getByText(volunteerItem.description)

  expect(name).toBeInTheDocument()
  expect(description).toBeInTheDocument()
})
