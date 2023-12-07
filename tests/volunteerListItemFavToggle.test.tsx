import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import VolunteerListItem from '../src/components/volunteerListItem'

jest.mock('@heroicons/react/24/outline/StarIcon', () => {
  const StarIconMock = () => <div data-testid="outline-star-icon" />
  StarIconMock.displayName = 'StarIconOutline'
  return StarIconMock
})

jest.mock('@heroicons/react/24/solid/StarIcon', () => {
  const StarIconSolidMock = () => <div data-testid="solid-star-icon" />
  StarIconSolidMock.displayName = 'StarIconSolid'
  return StarIconSolidMock
})

describe('VolunteerListItem component', () => {
  test('toggles favorite state on icon click', () => {
    const volunteerItem = {
      id: 1,
      organization_user_id: 123,
      name: 'Test Organization',
      description: 'Description',
      descriptionLong: 'Long Description',
      email: 'test@example.com',
      website: 'http://example.com',
      banner_image: 'banner.jpg',
    }

    render(<VolunteerListItem volunteerItem={volunteerItem} />)

    // Initial state check
    expect(screen.getByTestId('favorite-star')).toBeInTheDocument()
    expect(screen.getByTestId('outline-star-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('solid-star-icon')).not.toBeInTheDocument()

    // Click on the icon to toggle favorite state
    fireEvent.click(screen.getByTestId('favorite-star'))

    // State after the first click
    expect(screen.getByTestId('favorite-star')).toBeInTheDocument()
    expect(screen.queryByTestId('outline-star-icon')).not.toBeInTheDocument()
    expect(screen.getByTestId('solid-star-icon')).toBeInTheDocument()

    // Click on the icon again to toggle back to the initial state
    fireEvent.click(screen.getByTestId('favorite-star'))

    // State after the second click
    expect(screen.getByTestId('favorite-star')).toBeInTheDocument()
    expect(screen.getByTestId('outline-star-icon')).toBeInTheDocument()
    expect(screen.queryByTestId('solid-star-icon')).not.toBeInTheDocument()
  })
})
