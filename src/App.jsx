import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Graphics from './pages/Graphics';
import Render from './pages/Render';
import LandingPages from './pages/LandingPages';
import Renderdetail from './components/Renderdetail';
import Walkthrough from './pages/Walkthrough';

function App() {
  return (
    <Router >
      <Routes >
        <Route path='/' element={<LandingPages />} />
        <Route path='/graphics' element={<Graphics />} />
        <Route path='/render' element={<Render />} />
        <Route path='/render/:category' element={<Renderdetail />} />
        <Route path='/animation' element={<Walkthrough />} />
      </Routes>
    </Router>
 
  );
}

export default App;
