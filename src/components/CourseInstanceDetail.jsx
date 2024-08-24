import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getInstanceDetails } from '../api';

const CourseInstanceDetail = () => {
  const { year, semester, id } = useParams();
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    getInstanceDetails(year, semester, id)
      .then(response => {
        setInstance(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the instance details!', error);
      });
  }, [year, semester, id]);

  if (!instance) return <div>Loading...</div>;

  return (
    <div>
      <h2>Course Instance Details</h2>
      <p>Course ID: {instance.course_id}</p>
      <p>Year: {instance.year}</p>
      <p>Semester: {instance.semester}</p>
    </div>
  );
};

export default CourseInstanceDetail;
