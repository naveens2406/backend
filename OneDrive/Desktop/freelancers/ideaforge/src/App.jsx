import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './pages/Landing';
import Generate from './pages/Generate';
import Saved from './pages/Saved';
import IdeaDetail from './pages/IdeaDetail';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'var(--bg-card)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
              fontFamily: 'var(--font-body)',
            }
          }}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/idea/:id" element={<IdeaDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
