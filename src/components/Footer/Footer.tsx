import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-border-color py-4">
      <div className="container-wrapper flex justify-between items-center">
        <div className="flex items-center">
          <div className="py-4 px-6 border-r border-border-color">
            <span className="text-text-secondary">find me in:</span>
          </div>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-r border-border-color"
          >
            <FaTwitter className="text-[#62748E] hover:text-text-primary transition-colors" />
          </a>

          <a
            href="https://linkedin.com/in/josean-araujo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4"
          >
            <FaLinkedin className="text-[#62748E] hover:text-text-primary transition-colors" />
          </a>
        </div>

        <a
          href="https://github.com/Jeanfr1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-4 border-l border-border-color"
        >
          <FaGithub className="text-[#62748E]" />
          <span className="text-text-secondary">@Jeanfr1</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
