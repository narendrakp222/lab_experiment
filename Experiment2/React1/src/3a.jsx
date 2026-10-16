import React, { useState } from "react";
function App() {
 const [count, setCount] = useState(0);
 const increment = () => {
 setCount(count + 1);
 };
 return (
 <div style={{ textAlign: "center" }}>
 <h2>React useState Hook</h2>
 <h3>Counter: {count}</h3>
 <button onClick={increment}>
 Increment
 </button>
 </div>
 );
}
export default App;