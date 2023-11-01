interface VolunteerItem {
  name: string
  description: string
}

interface Props {
  volunteerItem: VolunteerItem
}

const VolunteerListItem: React.FC<Props> = ({ volunteerItem }) => {
  return (
    <div className="volunteerBlock">
      <h1>{volunteerItem.name}</h1>
      <p>{volunteerItem.description}</p>
    </div>
  )
}

export default VolunteerListItem
