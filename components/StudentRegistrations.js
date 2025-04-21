import React, { useState } from 'react';

function StudentRegistrations() {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [selectedOffering, setSelectedOffering] = useState("");

  const courseOfferings = ["Individual - Hindi", "Group - English", "Special - Urdu"];

  const registerStudent = () => {
    if (studentName && selectedOffering) {
      setStudents([...students, { name: studentName, offering: selectedOffering }]);
      setStudentName("");
      setSelectedOffering("");
    }
  };

  return (
    <div>
      <h2>Student Registrations</h2>
      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Enter student name"
      />
      <select onChange={(e) => setSelectedOffering(e.target.value)}>
        <option value="">Select Course Offering</option>
        {courseOfferings.map((offering, index) => (
          <option key={index} value={offering}>{offering}</option>
        ))}
      </select>

      <button onClick={registerStudent}>Register</button>

      <h3>Registered Students</h3>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.offering}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentRegistrations;
