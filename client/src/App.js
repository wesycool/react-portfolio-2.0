import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import MainPage from "./mainpage/index"
import Dashboard from "./dashboard/index"

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/:user" component={Dashboard}/>
      </div>
    </Router>

  );
}

export default App;
