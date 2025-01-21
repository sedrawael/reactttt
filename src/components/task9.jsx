import React from 'react';

function Task9() {
  // كائن يحتوي على قائمة الطلاب
  const students = [
    { id: 1, name: "Mohammad", age: 23 },
    { id: 2, name: "Sarah", age: 20 },
    { id: 3, name: "Ali", age: 22 },
    { id: 4, name: "Lina", age: 21 },
  ];

  return (
    <div>
      <h1>List of Students</h1>
      <ul>
        {/* نستخدم .map() لإنشاء عناصر القائمة */}
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - Age: {student.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task9;