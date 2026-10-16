import React from "react";
function App() {
 const college = "ABC Engineering College";
 const course = "Web Technologies Laboratory";
 const subject = "React.js";
 return (
 <div>
 <h2>{college}</h2>
 <h3>{course}</h3>
 <p>Subject: {subject}</p>
 <p>{"Welcome to React using String Literals."}</p>
 </div>
 );
}
export default App;