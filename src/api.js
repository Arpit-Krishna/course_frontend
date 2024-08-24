import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const getCourses = () => axios.get(`${API_URL}/courses`);    
export const getCourseDetails = (id) => axios.get(`${API_URL}/courses/${id}`);
export const createCourse = (courseData) => axios.post(`${API_URL}/courses`, courseData);
export const deleteCourse = (id) => axios.delete(`${API_URL}/courses/${id}`);
export const createInstance = (instanceData) => axios.post(`${API_URL}/add-instance`, instanceData);
export const getInstances = (year, semester) => axios.get(`${API_URL}/instances/${year}/${semester}`);
export const getInstanceDetails = (year, semester, id) => axios.get(`${API_URL}/instances/${year}/${semester}/${id}`);
export const deleteInstance = (year, semester, id) => axios.delete(`${API_URL}/instances/${year}/${semester}/${id}`);
 