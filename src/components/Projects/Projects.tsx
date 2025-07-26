import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Gift Tracker",
    description: "A modern fullstack solution for tracking gifts, events & reminders with AWS cloud infrastructure. Features secure authentication, real-time notifications, and image storage.",
    technologies: ["React", "TypeScript", "TailwindCSS", "AWS DynamoDB", "Lambda", "S3"],
    imageUrl: "/illustrations/gifttracker.svg",
    githubUrl: "https://github.com/Jeanfr1/marie-mobile-canvas",
    liveUrl: "https://mgiftlist.netlify.app"
  },
  {
    id: 2,
    title: "KASST MVP",
    description: "🚀 Currently in production - An MVP financial technology platform for investment tracking and market analysis. Actively being developed with new features added regularly.",
    technologies: ["React", "TypeScript", "Next.js", "Node.js", "Express", "Chart.js"],
    imageUrl: "/illustrations/kasstmvp.svg",
    githubUrl: "https://mvpkasst.netlify.app",
    liveUrl: "https://mvpkasst.netlify.app"
  },
  {
    id: 3,
    title: "CrisEnergy",
    description: "A modern energy management platform with real-time monitoring, analytics, and optimization tools for sustainable energy consumption.",
    technologies: ["React", "TypeScript", "Next.js", "Chart.js", "Tailwind CSS"],
    imageUrl: "/illustrations/crisenergy.svg",
    githubUrl: "https://github.com/Jeanfr1/crisenergy",
    liveUrl: "https://crisenergy.netlify.app"
  },
  {
    id: 4,
    title: "KASST",
    description: "A financial technology platform that helps users track investments, analyze market trends, and make data-driven financial decisions.",
    technologies: ["React", "TypeScript", "Redux", "Node.js", "Express"],
    imageUrl: "/illustrations/kasst.svg",
    githubUrl: "https://github.com/Jeanfr1/KASST",
    liveUrl: "https://kasst.netlify.app"
  },
  {
    id: 5,
    title: "Viajantes Sem Fronteiras",
    description: "A travel community platform for sharing experiences, tips, and organizing group trips. Features interactive maps and destination guides.",
    technologies: ["React", "TypeScript", "Firebase", "Google Maps API"],
    imageUrl: "/illustrations/vsfwebsite.svg",
    githubUrl: "https://github.com/Jeanfr1/vsfwebsite",
    liveUrl: "https://viajantesemfronteiras.netlify.app"
  },
  {
    id: 6,
    title: "Agence Jaraujo",
    description: "A professional portfolio and service showcase for a digital agency specializing in web development, design, and digital marketing.",
    technologies: ["React", "TypeScript", "Next.js", "Framer Motion", "Tailwind CSS"],
    imageUrl: "/illustrations/agencejaraujo.svg",
    githubUrl: "https://github.com/Jeanfr1/agencejaraujo",
    liveUrl: "https://agencyjaraujo.netlify.app"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
  };

  return (
    <div className="relative">
      {/* Background blur effects */}
      <div className="background-blur-container">
        <div className="blue-blur"></div>
        <div className="green-blur"></div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-medium text-text-primary">My Projects</h2>

        <p className="text-text-secondary">
          Here are some of my recent projects. Each one represents different challenges and learning experiences.
          Click on a project to see more details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`bg-foreground-dark border border-border-color rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-accent-green ${activeProject?.id === project.id ? 'ring-2 ring-accent-green' : ''}`}
              onClick={() => handleProjectClick(project)}
            >
              <div className="h-48 bg-snake-bg flex items-center justify-center p-4">
                <img src={project.imageUrl} alt={project.title} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-4">
                <h3 className="text-xl text-text-primary mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="text-xs bg-background-dark text-accent-green px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-background-dark text-accent-orange px-2 py-1 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-green transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-orange transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeProject && (
          <div className="mt-8 bg-foreground-dark border border-border-color rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="w-full md:w-1/3 bg-snake-bg rounded-lg p-4 flex items-center justify-center">
                <img src={activeProject.imageUrl} alt={activeProject.title} className="max-h-48 max-w-full object-contain" />
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl text-accent-orange">{activeProject.title}</h3>
                  <div className="flex gap-4">
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-secondary hover:text-accent-green transition-colors"
                    >
                      <FaGithub size={20} />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-text-secondary hover:text-accent-orange transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

                <p className="text-text-secondary mb-6">{activeProject.description}</p>

                <div className="mb-6">
                  <h4 className="text-text-primary mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech, index) => (
                      <span key={index} className="text-sm bg-background-dark text-accent-green px-3 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="code-block">
              <span className="code-line code-comment">// Project Structure</span>
              <span className="code-line">
                <span className="code-keyword">const</span> <span className="code-function">{activeProject.title.toLowerCase().replace(/\s+/g, '')}</span> = {'{'}
              </span>
              <span className="code-line">  <span className="code-keyword">name</span>: <span className="code-string">"{activeProject.title}"</span>,</span>
              <span className="code-line">  <span className="code-keyword">stack</span>: [<span className="code-string">{activeProject.technologies.map(t => `"${t}"`).join(', ')}</span>],</span>
              <span className="code-line">  <span className="code-keyword">features</span>: {'{'}...{'}'},</span>
              <span className="code-line">  <span className="code-keyword">github</span>: <span className="code-string">"{activeProject.githubUrl}"</span>,</span>
              <span className="code-line">  <span className="code-keyword">live</span>: <span className="code-string">"{activeProject.liveUrl}"</span></span>
              <span className="code-line">{'}'}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
