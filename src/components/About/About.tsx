import { FaReact, FaNodeJs, FaAws, FaCode, FaDatabase, FaGlobe } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';

const About = () => {
  return (
    <div className="relative">
      {/* Background blur effects */}
      <div className="background-blur-container">
        <div className="blue-blur"></div>
        <div className="green-blur"></div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-medium text-text-primary mb-6">About Me</h2>
          <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
            <p className="text-text-secondary mb-4">
              I'm a Frontend Developer specializing in React, TypeScript, Node.js, and Web3 technologies, building scalable,
              high-performance applications with a focus on blockchain integration and user experience.
              With expertise in both frontend architecture and Web3 development, I create solutions that bridge traditional web
              applications with decentralized technologies.
            </p>
            <p className="text-text-secondary mb-4">
              My diverse background includes leading projects in customer service, technical training, and fullstack development
              across global companies like Microsoft and HP. This unique combination of technical expertise and business
              acumen enables me to tackle complex challenges with innovative solutions.
            </p>
            <p className="text-text-secondary">
              Currently, at KASST as a freelance Frontend Developer, I'm focused on building high-impact, next-generation Web3
              applications that redefine decentralized user experiences. I work closely with designers, blockchain engineers,
              and product teams to deliver exceptional digital products.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-medium text-text-primary mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Skills */}
            <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
              <h3 className="text-xl text-accent-orange mb-4 flex items-center">
                <FaCode className="mr-2" /> Frontend Development
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-text-secondary">
                  <FaReact className="text-accent-blue mr-2" /> React.js
                </li>
                <li className="flex items-center text-text-secondary">
                  <SiNextdotjs className="text-text-primary mr-2" /> Next.js
                </li>
                <li className="flex items-center text-text-secondary">
                  <SiTypescript className="text-accent-blue mr-2" /> TypeScript
                </li>
                <li className="flex items-center text-text-secondary">
                  <SiTailwindcss className="text-accent-green mr-2" /> Tailwind CSS
                </li>
                <li className="flex items-center text-text-secondary">
                  <FaCode className="text-accent-orange mr-2" /> Responsive Design
                </li>
              </ul>
            </div>

            {/* Backend Skills */}
            <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
              <h3 className="text-xl text-accent-orange mb-4 flex items-center">
                <FaNodeJs className="mr-2" /> Backend Development
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-text-secondary">
                  <FaNodeJs className="text-accent-green mr-2" /> Node.js
                </li>
                <li className="flex items-center text-text-secondary">
                  <FaDatabase className="text-accent-blue mr-2" /> RESTful APIs
                </li>
                <li className="flex items-center text-text-secondary">
                  <FaAws className="text-accent-orange mr-2" /> AWS
                </li>
              </ul>
            </div>

            {/* Web3 & Blockchain */}
            <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
              <h3 className="text-xl text-accent-orange mb-4 flex items-center">
                <FaCode className="mr-2" /> Web3 & Blockchain
              </h3>
              <p className="text-text-secondary mb-2">
                I specialize in blockchain technology and decentralized applications development:
              </p>
              <ul className="space-y-2">
                <li className="text-text-secondary">• Ethers.js & Web3.js Integration</li>
                <li className="text-text-secondary">• Smart Contract Development with Hardhat</li>
                <li className="text-text-secondary">• DApp Architecture & Development</li>
                <li className="text-text-secondary">• DeFi Applications</li>
                <li className="text-text-secondary">• Gas Optimization Techniques</li>
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
              <h3 className="text-xl text-accent-orange mb-4 flex items-center">
                <FaGlobe className="mr-2" /> Languages
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-text-secondary">
                  <span className="w-4 h-4 bg-accent-blue rounded-full mr-2"></span> English (Fluent)
                </li>
                <li className="flex items-center text-text-secondary">
                  <span className="w-4 h-4 bg-accent-green rounded-full mr-2"></span> French (Fluent)
                </li>
                <li className="flex items-center text-text-secondary">
                  <span className="w-4 h-4 bg-accent-orange rounded-full mr-2"></span> Portuguese (Native)
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-medium text-text-primary mb-6">Experience</h2>
          <div className="space-y-6">
            <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
              <h3 className="text-xl text-accent-orange">KASST</h3>
              <p className="text-text-primary mb-2">Frontend Developer | React | TypeScript | Web3 Enthusiast | UX/UI</p>
              <p className="text-text-secondary mb-4">Dec 2024 - Present (4 mos) • Freelance • Remote</p>
              <ul className="space-y-2">
                <li className="text-text-secondary">• Developing modern and scalable frontend architectures using React, TypeScript, and Node.js</li>
                <li className="text-text-secondary">• Integrating Web3 solutions with Ethers.js, Hardhat, and smart contracts for decentralized applications</li>
                <li className="text-text-secondary">• Translating UI/UX designs into pixel-perfect, responsive, and interactive user interfaces</li>
                <li className="text-text-secondary">• Leading 0-to-1 project initiatives for innovative Web3 solutions in decentralized finance (DeFi)</li>
                <li className="text-text-secondary">• Optimizing performance, debugging, and implementing best practices for dApp development</li>
              </ul>
            </div>

            <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
              <h3 className="text-xl text-accent-orange">Agence Jaraujo</h3>
              <p className="text-text-primary mb-2">Frontend Developer</p>
              <p className="text-text-secondary mb-4">2023 - 2024</p>
              <ul className="space-y-2">
                <li className="text-text-secondary">• Developed AI-driven tools to automate repetitive tasks, reducing manual workload by 40%</li>
                <li className="text-text-secondary">• Integrated data analysis pipelines using AI models for predictive insights</li>
                <li className="text-text-secondary">• Implemented smart automation workflows that enhanced project delivery efficiency by 25%</li>
              </ul>
            </div>

            <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
              <h3 className="text-xl text-accent-orange">HP (HPE Flex Offers Program)</h3>
              <p className="text-text-primary mb-2">Technical Trainer</p>
              <p className="text-text-secondary mb-4">2020 - 2023</p>
              <ul className="space-y-2">
                <li className="text-text-secondary">• Led strategic outreach and training initiatives across France</li>
                <li className="text-text-secondary">• Designed customized training solutions that improved customer engagement</li>
                <li className="text-text-secondary">• Contributed to a 20% increase in program adoption</li>
              </ul>
            </div>

            <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
              <h3 className="text-xl text-accent-orange">Microsoft</h3>
              <p className="text-text-primary mb-2">Business Technology Specialist</p>
              <p className="text-text-secondary mb-4">2018 - 2020</p>
              <ul className="space-y-2">
                <li className="text-text-secondary">• Supported business technology projects that streamlined processes</li>
                <li className="text-text-secondary">• Enhanced client solutions through innovative automation strategies</li>
                <li className="text-text-secondary">• Increased productivity metrics within client organizations</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
