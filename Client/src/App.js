import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
        <Router>
          <Routes >
            <Route path="/home" element={Home()} />
            <Route exact path="/" element={Welcome()} />
            <Route path="*" element={NotFound()} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
