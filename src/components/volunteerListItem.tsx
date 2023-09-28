import React from 'react'

interface VolunteerItem {
  title: string
  content: string
}

interface Props {
  volunteerItem: VolunteerItem
}

const VolunteerListItem: React.FC<Props> = ({ volunteerItem }) => {
  return (
    <div className="volunteerBlock">
      <h1>{volunteerItem.title}</h1>
      <p>{volunteerItem.content}</p>
    </div>
  )
}

export default VolunteerListItem
