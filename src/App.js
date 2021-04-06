import { useEffect } from "react"
import logo from './logo.svg';
import './App.css';

// "start": "react-scripts start",
// "client": "npm start",
// "dev": "npx concurrently --kill-others-on-fail \"npm server\" \"npm client\""

function App() {
  fetch("https://mtzger.github.io/react_chat_odata/")
    .then(result => result.json())
    .then(result => console.log(result))
  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
