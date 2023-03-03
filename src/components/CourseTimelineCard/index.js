import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="course-time-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <div className="course-tags-list">
        {tagsList.map(eachTag => (
          <ul className="course-tag-item" key={eachTag.id}>
            <p className="course-tag">{eachTag.name}</p>
          </ul>
        ))}
      </div>
    </>
  )
}

export default CourseTimelineCard
