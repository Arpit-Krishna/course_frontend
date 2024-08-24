import React, { useState, useEffect } from 'react';
import { getInstances } from '../api';
import { Link } from 'react-router-dom';

const CourseInstanceList = () => {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [instances, setInstances] = useState([]);

  

  useEffect(() => {
    const handleFetchInstances = () => {
        if (year && semester) {
          getInstances(year, semester)
            .then(response => {
              setInstances(response.data);
            })
            .catch(error => {
              console.error('There was an error fetching the course instances!', error);
            });
        }
      };
     handleFetchInstances();
  }, [year, semester]);

  return (
    <div>
      <h2>Course Instances</h2>
      <label>
        Year:
        <input
          type="text"
          value={year}
          onChange={e => setYear(e.target.value)}
        />
      </label>
      <label>
        Semester:
        <input
          type="text"
          value={semester}
          onChange={e => setSemester(e.target.value)}
        />
      </label>
      <button onClick={() => getInstances(year, semester)}>Fetch Instances</button>
      <ul>
        {instances.map(instance => (
          <li key={instance.id}>
            <Link to={`/instances/${instance.year}/${instance.semester}/${instance.id}`}>
              Course ID: {instance.course_id} | Year: {instance.year} | Semester: {instance.semester}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseInstanceList;
