import React, { useState } from "react";
function App() {
 const [show, setShow] = useState(true);
 return (
 <div>
 <button onClick={() => setShow(!show)}>
 Toggle
 </button>
 {show ? (
 <h2>Welcome to React.js</h2>
 ) : (
 <h2>Component Hidden</h2>
 )}
 </div>
 );
}
export default App;