import React, { useState } from 'react';

function Courses() {
  const [courses, setCourses] = useState(["Hindi", "English", "Urdu"]);
  const [newCourse, setNewCourse] = useState("");

  const addCourse = () => {
    if (newCourse) {
      setCourses([...courses, newCourse]);
      setNewCourse("");
    }
  };

  const deleteCourse = (course) => {
    setCourses(courses.filter((c) => c !== course));
  };

  return (
    <div>
      <h2>Courses</h2>
      <input
        type="text"
        value={newCourse}
        onChange={(e) => setNewCourse(e.target.value)}
        placeholder="Enter new course"
      />
      <button onClick={addCourse}>Add</button>
      
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course}
            <button onClick={() => deleteCourse(course)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
