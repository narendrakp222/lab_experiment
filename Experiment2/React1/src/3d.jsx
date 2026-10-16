import React, { useState } from "react";
function App() {
 const [name, setName] = useState("");
 const handleSubmit = (e) => {
 e.preventDefault();
 alert("Student Name: " + name);
 };
 return (
 <div>
 <h2>Student Form</h2>
 <form onSubmit={handleSubmit}>
 <input
 type="text"
 placeholder="Enter Name"
 value={name}
 onChange={(e) => setName(e.target.value)}
 />
 <br /><br />
 <button type="submit">
 Submit
 </button>
 </form>
 </div>
 );
}
export default App;
