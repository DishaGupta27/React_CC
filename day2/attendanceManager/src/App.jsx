import React, { useState } from 'react';

const AttendanceManager = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice', present: true },
    { id: 2, name: 'Bob', present: false },
    { id: 3, name: 'Charlie', present: true },
    { id: 4, name: 'Diana', present: false },
    { id: 5, name: 'Ethan', present: true }
  ]);

  const [filter, setFilter] = useState('All');

  const toggleAttendance = (id) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updated);
  };

  const filteredStudents = students.filter((student) => {
    if (filter === 'All') return true;
    if (filter === 'Present') return student.present;
    if (filter === 'Absent') return !student.present;
    return true;
  });

  const presentCount = students.filter((s) => s.present).length;

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Attendance Manager</h1>

      <label>Filter: </label>
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option>All</option>
        <option>Present</option>
        <option>Absent</option>
      </select>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {filteredStudents.map((student) => (
          <li key={student.id} style={{ margin: '10px 0' }}>
            <span
              style={{
                color: student.present ? 'green' : 'red',
                fontWeight: 'bold',
              }}
            >
              {student.name} - {student.present ? 'Present' : 'Absent'}
            </span>
            <button
              onClick={() => toggleAttendance(student.id)}
              style={{ marginLeft: '10px' }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>

      <h3>Total Present: {presentCount}</h3>
    </div>
  );
};

export default AttendanceManager;
