import React, { useState } from 'react';

function CourseOfferings() {
  const [courseOfferings, setCourseOfferings] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCourseType, setSelectedCourseType] = useState("");

  const courseTypes = ["Individual", "Group", "Special"];
  const courses = ["Hindi", "English", "Urdu"];

  const addOffering = () => {
    if (selectedCourse && selectedCourseType) {
      const offering = `${selectedCourseType} - ${selectedCourse}`;
      setCourseOfferings([...courseOfferings, offering]);
    }
  };

  return (
    <div>
      <h2>Course Offerings</h2>
      <select onChange={(e) => setSelectedCourseType(e.target.value)}>
        <option value="">Select Course Type</option>
        {courseTypes.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>

      <select onChange={(e) => setSelectedCourse(e.target.value)}>
        <option value="">Select Course</option>
        {courses.map((course, index) => (
          <option key={index} value={course}>{course}</option>
        ))}
      </select>

      <button onClick={addOffering}>Add Offering</button>

      <ul>
        {courseOfferings.map((offering, index) => (
          <li key={index}>{offering}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseOfferings;
