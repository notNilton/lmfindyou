import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Homepage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;