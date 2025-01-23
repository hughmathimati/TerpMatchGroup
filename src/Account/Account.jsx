import React from 'react';
import { useState } from 'react';
import './Account.css';

const Account = () => {
  const [majorMinor, setMajorMinor] = useState([]);
  const [interests, setInterests] = useState([]);
  const [courses, setCourses] = useState([]);
  const [groupSize, setGroupSize] = useState([]);
  const [studyTime, setStudyTime] = useState([]);

  const majors = ['Computer Science', 'Mathematics', 'Physics', 'Biology', 'English', 'History'];
  const hobbies = ['Reading', 'Gaming', 'Hiking', 'Cooking', 'Gym', 'Dance'];
  const classes = ['CMSC131', 'CMSC132', 'MATH140', 'Math141', 'COMM107', 'ENES100'];
  const sizes = ['2', '3-5', '6-9', '10-12', '13-15', '15+'];
  const times = ['<6am','6am-9am', '9am-12pm', '12pm-3pm', '3pm-6pm', '6pm-9pm', '9pm-12am', '12am<'];

  const handleSelectChange = (event, setState) => {
    const options = event.target.options;
    const selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }
    setState(selectedOptions);
  };

  return (
    <div className="account-container">
      <h1>Account</h1>
      <form>
        <div className="form-group">
          <label htmlFor="majorMinor">Major/Minor:</label>
          <select
            id="majorMinor"
            multiple
            value={majorMinor}
            onChange={(e) => handleSelectChange(e, setMajorMinor)}
          >
            {majors.map((major) => (
              <option key={major} value={major}>
                {major}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="interests">Hobbies/Interests:</label>
          <select
            id="interests"
            multiple
            value={interests}
            onChange={(e) => handleSelectChange(e, setInterests)}
          >
            {hobbies.map((hobby) => (
              <option key={hobby} value={hobby}>
                {hobby}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="courses">Courses:</label>
          <select
            id="courses"
            multiple
            value={courses}
            onChange={(e) => handleSelectChange(e, setCourses)}
          >
            {classes.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="groupSize">Preferred Group Size:</label>
          <select
            id="groupSize"
            multiple
            value={groupSize}
            onChange={(e) => handleSelectChange(e, setGroupSize)}
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="studyTime">Preferred Study Time:</label>
          <select
            id="studyTime"
            multiple
            value={studyTime}
            onChange={(e) => handleSelectChange(e, setStudyTime)}
          >
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Account;