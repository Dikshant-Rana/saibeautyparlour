import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import Gallery from './GalleryPage';
import HairServicesPage from './HairServicesPage';
import SkincareServicesPage from './SkincareServicesPage';
import MakeupServicesPage from './MakeupServicesPage';
import NailsSpaServicesPage from './NailsSpaServicesPage';
import WeddingServicesPage from './WeddingServicesPage';
import ScrollToTop from './ScrollToTop';
import CoursePage from './CoursePage';

function App() {
  return (
    <Router basename="/saibeautyparlour">
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
