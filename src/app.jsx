import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Gallery from './pages/GalleryPage';
import HairServicesPage from './pages/HairServicesPage';
import SkincareServicesPage from './pages/SkincareServicesPage';
import MakeupServicesPage from './pages/MakeupServicesPage';
import NailsSpaServicesPage from './pages/NailsSpaServicesPage';
import WeddingServicesPage from './pages/WeddingServicesPage';
import ScrollToTop from './components/ScrollToTop';
import CoursePage from './pages/CoursePage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/hair" element={<HairServicesPage />} />
        <Route path="/services/skincare" element={<SkincareServicesPage />} />
        <Route path="/services/makeup" element={<MakeupServicesPage />} />
        <Route path="/services/nails-spa" element={<NailsSpaServicesPage />} />
        <Route path="/services/wedding" element={<WeddingServicesPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;
