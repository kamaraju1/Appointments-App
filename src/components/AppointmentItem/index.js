// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggledTheStar} = props
  const {id, title, date, isStarred} = appointmentDetails

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onChangeStar = () => {
    toggledTheStar(id)
  }

  return (
    <li className="list-items">
      <div className="appointment-card">
        <div>
          <h1 className="appointmentItem-heading">{title}</h1>
          <p>Date: {date}</p>
        </div>
        <div>
          <button
            className="start-box"
            type="button"
            onClick={onChangeStar}
            testid="star"
          >
            <img src={starImgUrl} alt="star" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default AppointmentItem
