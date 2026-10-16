import React, { useState } from "react";
function App() {
 const [message, setMessage] = useState("");
 const handleClick = () => {
 setMessage("Welcome to React Event Handling");
 };
 return (
 <div>
 <h2>Button Click Event</h2>
 <button onClick={handleClick}>
 Click Here
 </button>
 <h3>{message}</h3>
 </div>
 );
}
export default App;