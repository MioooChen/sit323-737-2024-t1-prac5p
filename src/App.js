import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}


export default App;
