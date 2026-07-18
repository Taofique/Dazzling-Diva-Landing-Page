import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <h1 className="text-2xl font-extrabold underline text-red-500">MugaMuga</h1>
  );
}

export default App;
