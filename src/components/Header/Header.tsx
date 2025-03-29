import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return activeTab === path;
  };

  const handleTabClick = (path: string) => {
    setActiveTab(path);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="border-b border-border-color py-4">
      <div className="container-wrapper flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="py-4 px-6">
            <Link to="/" className="text-text-primary font-medium">
              josean-araujo
            </Link>
          </div>

          {/* Mobile menu button - temporarily visible on all screens for testing */}
          <button
            className="block text-text-primary hover:text-accent-orange focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop navigation - hidden on small screens */}
          <nav className="hidden md:flex">
            <Link
              to="/"
              className={`nav-item ${isActive('/') ? 'nav-item-active' : ''}`}
              onClick={() => handleTabClick('/')}
            >
              _hello
            </Link>
            <Link
              to="/about"
              className={`nav-item ${isActive('/about') ? 'nav-item-active' : ''}`}
              onClick={() => handleTabClick('/about')}
            >
              _about-me
            </Link>
            <Link
              to="/projects"
              className={`nav-item ${isActive('/projects') ? 'nav-item-active' : ''}`}
              onClick={() => handleTabClick('/projects')}
            >
              _projects
            </Link>
          </nav>
        </div>

        <Link
          to="/contact"
          className={`nav-item border-l hidden md:block ${isActive('/contact') ? 'nav-item-active' : ''}`}
          onClick={() => handleTabClick('/contact')}
        >
          _contact-me
        </Link>
      </div>

      {/* Mobile menu - only visible when open on small screens */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col bg-foreground-dark border-t border-border-color">
          <Link
            to="/"
            className={`py-4 px-6 border-b border-border-color ${isActive('/') ? 'text-text-primary border-l-2 border-l-accent-orange' : 'text-text-secondary'}`}
            onClick={() => handleTabClick('/')}
          >
            _hello
          </Link>
          <Link
            to="/about"
            className={`py-4 px-6 border-b border-border-color ${isActive('/about') ? 'text-text-primary border-l-2 border-l-accent-orange' : 'text-text-secondary'}`}
            onClick={() => handleTabClick('/about')}
          >
            _about-me
          </Link>
          <Link
            to="/projects"
            className={`py-4 px-6 border-b border-border-color ${isActive('/projects') ? 'text-text-primary border-l-2 border-l-accent-orange' : 'text-text-secondary'}`}
            onClick={() => handleTabClick('/projects')}
          >
            _projects
          </Link>
          <Link
            to="/contact"
            className={`py-4 px-6 border-b border-border-color ${isActive('/contact') ? 'text-text-primary border-l-2 border-l-accent-orange' : 'text-text-secondary'}`}
            onClick={() => handleTabClick('/contact')}
          >
            _contact-me
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
