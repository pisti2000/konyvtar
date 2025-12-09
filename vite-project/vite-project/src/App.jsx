import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KonyvAd from './konyvad';
import KonyvTorol from './konyvtorol';

import './App.css';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Konyvek />} />
          <Route path="/konyvad" element={<KonyvAd />} />
          <Route path="/konyvtorol" element={<KonyvTorol/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;