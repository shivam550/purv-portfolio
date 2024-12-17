import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Graphics from './pages/Graphics';
import Render from './pages/Render';
import LandingPages from './pages/LandingPages';
import Renderdetail from './components/Renderdetail';
import Walkthrough from './pages/Walkthrough';
import DriftGuru from './pages/DriftGuru';
import NeonHunter from './pages/Neonhunter';
import MachinasFall from './pages/MachineFall';
import SafetyGame from './pages/Safety';
import SprintGame from './pages/Sprint';
import Games from './pages/Games';

function App() {
  return (
    <Router >
      <Routes >
        <Route path='/' element={<LandingPages />} />
        <Route path='/graphics' element={<Graphics />} />
        <Route path='/render' element={<Render />} />
        <Route path='/render/:category' element={<Renderdetail />} />
        <Route path='/games' element={<Games />} />
        <Route path='/animation' element={<Walkthrough />} />
        <Route path='/drift-guru' element={<DriftGuru />} />
        <Route path='/neon' element={<NeonHunter />} />
        <Route path='/machinas' element={<MachinasFall />} />
        <Route path='/safety' element={<SafetyGame />} />
        <Route path='/sprint' element={<SprintGame />} />
      </Routes>
    </Router>
 
  );
}

export default App;
