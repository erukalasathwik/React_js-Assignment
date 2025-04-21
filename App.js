import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CourseTypes from './components/CourseTypes';
import Courses from './components/Courses';
import CourseOfferings from './components/CourseOfferings';
import StudentRegistrations from './components/StudentRegistrations';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="my-4">Student Registration System</h1>

        <nav>
          <Link to="/course-types">Course Types</Link> |{" "}
          <Link to="/courses">Courses</Link> |{" "}
          <Link to="/offerings">Course Offerings</Link> |{" "}
          <Link to="/registrations">Student Registrations</Link>
        </nav>

        <Routes>
          <Route path="/course-types" element={<CourseTypes />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/offerings" element={<CourseOfferings />} />
          <Route path="/registrations" element={<StudentRegistrations />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

