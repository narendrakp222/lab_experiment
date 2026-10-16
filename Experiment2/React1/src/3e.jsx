import React from "react";
function App() {
 const students = [
 "Ganesh",
 "Arun",
 "Priya",
 "Karthik",
 "Divya"
 ];
 return (
 <div>
 <h2>Student List</h2>
 <ul>
 {students.map((student, index) => (
 <li key={index}>
 {student}
 </li>
 ))}
 </ul>
 </div>
 );
}
export default App