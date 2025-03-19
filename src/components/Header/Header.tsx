import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const isActive = (path: string) => {
    return activeTab === path;
  };

  const handleTabClick = (path: string) => {
    setActiveTab(path);
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

          <nav className="flex">
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
          className={`nav-item border-l ${isActive('/contact') ? 'nav-item-active' : ''}`}
          onClick={() => handleTabClick('/contact')}
        >
          _contact-me
        </Link>
      </div>
    </header>
  );
};

export default Header;
