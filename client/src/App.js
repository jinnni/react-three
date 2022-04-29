import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import ThreeDModels from './components/ThreeDModels';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route exact path={`/`} element={<Home />}></Route>
            <Route exact path={`/Login`} element={<Login />}></Route>
            <Route exact path={`/Register`} element={<Register />}></Route>
            {Array(4).fill(0).map((el, i) =>
              <Route key={i+1} exact path={`/P${i+1}.glb`} element={< ThreeDModels model={`/P${i+1}.glb`} />}></Route>
            )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
