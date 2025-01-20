import React from 'react';
import { useState } from 'react';
import './Account.css';

const Account = () => {
  const [majorMinor, setMajorMinor] = useState('');
  const [interests, setInterests] = useState('');
  const [courses, setCourses] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [studyTime, setStudyTime] = useState('');

  return (
    <div className="account-container">
      <h1>Account</h1>
      <form>
      <div className="form-group">
          <label htmlFor="majorMinor">Major/Minor:</label>
          <input
            type="text"
            id="majorMinor"
            value={majorMinor}
            onChange={(e) => setMajorMinor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="interests">Hobbies/Interests:</label>
          <input
            type="text"
            id="interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courses">Courses:</label>
          <input
            type="text"
            id="courses"
            value={courses}
            onChange={(e) => setCourses(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="groupSize">Preferred Group Size:</label>
          <input
            type="number"
            id="groupSize"
            value={groupSize}
            onChange={(e) => setGroupSize(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="studyTime">Preferred Study Time:</label>
          <input
            type="text"
            id="studyTime"
            value={studyTime}
            onChange={(e) => setStudyTime(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Account;