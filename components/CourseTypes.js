import React, { useState } from 'react';

function CourseTypes() {
  const [courseTypes, setCourseTypes] = useState(["Individual", "Group", "Special"]);
  const [newType, setNewType] = useState("");

  const addCourseType = () => {
    if (newType) {
      setCourseTypes([...courseTypes, newType]);
      setNewType("");
    }
  };

  const deleteCourseType = (type) => {
    setCourseTypes(courseTypes.filter((courseType) => courseType !== type));
  };

  return (
    <div>
      <h2>Course Types</h2>
      <input
        type="text"
        value={newType}
        onChange={(e) => setNewType(e.target.value)}
        placeholder="Enter new course type"
      />
      <button onClick={addCourseType}>Add</button>
      
      <ul>
        {courseTypes.map((type, index) => (
          <li key={index}>
            {type}
            <button onClick={() => deleteCourseType(type)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseTypes;
