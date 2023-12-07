import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter } from 'next/router'
import { act } from 'react-dom/test-utils'

import VolunteerListItem from '../src/components/volunteerListItem'

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(),
}))

const mockRouterPush = jest.fn()

beforeEach(() => {
  mockRouterPush.mockReset()
  ;(useRouter as jest.Mock).mockReturnValue({
    push: mockRouterPush,
  })
})

const mockVolunteerItem = {
  id: 1,
  organization_user_id: 123,
  name: 'Test Organization',
  description: 'Description',
  descriptionLong: 'Long Description',
  email: 'test@example.com',
  website: 'http://example.com',
  banner_image: 'banner.jpg',
}

test('clicking "Check organisation" button navigates to the correct page', async () => {
  // Mock useRouter to provide the correct dynamic route information
  ;(useRouter as jest.Mock).mockReturnValue({
    push: mockRouterPush,
    query: { slug: 'test-slug' }, // Adjust with the appropriate slug for your test case
  })

  await act(async () => {
    render(<VolunteerListItem volunteerItem={mockVolunteerItem} />)
  })

  await act(async () => {
    fireEvent.click(screen.getByText('Check organisation'))
  })

  // Ensure any async operations are resolved
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0))
  })

  // Now make assertions
  expect(mockRouterPush).toHaveBeenCalledWith(
    '/organization/[slug]/page', // Adjust with the correct dynamic route
    { pathname: '/organization/test-slug/page' }, // Adjust with the expected URL
    { shallow: false }
  )
})
