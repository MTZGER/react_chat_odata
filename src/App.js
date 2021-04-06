import { useEffect } from "react"
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// "start": "react-scripts start",
// "client": "npm start",
// "dev": "npx concurrently --kill-others-on-fail \"npm server\" \"npm client\""

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/react_chat_odata/">
          <div className="App">
              <h1 onClick={() => {
                fetch("https://mtzger.github.io/react_chat_odata")
                  .then(oResult => oResult.json())
                  .then(result => console.log(result))
              }}>App</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
