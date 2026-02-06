import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import LandingPage from './pages/LandingPage';
import ScrollToTop from './components/Utils/ScrollToTop';

import MoodboardDetail from './pages/MoodboardDetail';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/moodboard/:id" element={<MoodboardDetail />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
