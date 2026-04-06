import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import logoImage from './assets/nav logo.jpg';

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <nav className="topbar">
          <NavLink className="brand" to="/">
            <img className="brand-mark" src={logoImage} alt="ConstructPro logo" />
            <span>Supreme Aqua Seal</span>
          </NavLink>
          <div className="nav-links">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about">About Us</NavLink>
            <NavLink className="nav-link" to="/services">Services</NavLink>
            <NavLink className="nav-link" to="/projects">Projects</NavLink>
            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-block">
            <NavLink className="brand footer-brand" to="/">Supreme Aqua Seal</NavLink>
            <p className="footer-text">Proven Seal of Trust.</p>
            <div className="footer-socials">
              <a className="social-link" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.6.4-1 1-1Z" fill="currentColor" /></svg>
              </a>
              <a className="social-link" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5.2A3.8 3.8 0 1 0 12 16a3.8 3.8 0 0 0 0-7.8Zm5.3-1.4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill="currentColor" /></svg>
              </a>
              <a className="social-link" href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8.5a3 3 0 0 0-2.1-2.1C17 6 12 6 12 6s-5 0-6.9.4A3 3 0 0 0 3 8.5 31 31 0 0 0 3 12a31 31 0 0 0 .1 3.5 3 3 0 0 0 2.1 2.1C7 18 12 18 12 18s5 0 6.9-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 21 12a31 31 0 0 0 0-3.5ZM10 14.8V9.2l4.8 2.8-4.8 2.8Z" fill="currentColor" /></svg>
              </a>
              <a className="social-link" href="https://maps.app.goo.gl/w8Q5RjzdSKUL7oqNA?g_st=aw" target="_blank" rel="noreferrer" aria-label="Map">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" fill="currentColor" /></svg>
              </a>
            </div>
          </div>

          <div className="footer-block">
            <h3>Navigation</h3>
            <div className="footer-links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </div>
          </div>

          <div className="footer-block">
            <h3>Regional Office</h3>
            <div className="footer-links">
              <span>A 603, Rajpur Greens, </span>
<span>Rajpur Road, Dehradun, 248009 U.K.</span>
<span>+91-135-3151122</span>
<span>+91-9873233999</span>
            </div>
          </div>

          <div className="footer-block">
            <h3>Corporate Address</h3>
            <div className="footer-links">
             <span>Supreme Aqua Seal Pvt. Ltd.</span>
              <span>
3rd Floor, 43/2 East Patel Nagar, </span>
<span>Central Delhi, 110008</span>
<span>CIN : U74899DL1988PTC031900</span>

    
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
