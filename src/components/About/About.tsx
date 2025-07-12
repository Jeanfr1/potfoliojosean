import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaCode,
  FaDatabase,
  FaGlobe,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

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
          <h2 className="text-3xl font-medium text-text-primary mb-6">
            About Me
          </h2>
          <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
            <p className="text-text-secondary mb-4">
              A GenAI Developer with a solid foundation in frontend engineering,
              communication, and technical training. I design intelligent
              systems using GPT APIs, automation tools, and AI agents to
              streamline workflows and boost productivity. Passionate about
              innovation and learning, I blend modern web technologies with
              generative AI to build impactful digital experiences.
            </p>
            <p className="text-text-secondary mb-4">
              My diverse background includes leading projects in customer
              service, technical training, and development across global
              companies. This unique combination of technical expertise and
              business acumen enables me to tackle complex challenges with
              innovative AI-driven solutions.
            </p>
            <p className="text-text-secondary">
              Currently, I'm focused on building high-impact, next-generation
              applications that leverage GenAI capabilities. I work closely with
              teams to deliver exceptional digital products that integrate
              modern web technologies with artificial intelligence.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-medium text-text-primary mb-6">
            Skills
          </h2>
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
                  <SiTailwindcss className="text-accent-green mr-2" /> Tailwind
                  CSS
                </li>
                <li className="flex items-center text-text-secondary">
                  <FaCode className="text-accent-orange mr-2" /> Responsive
                  Design
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
                  <FaDatabase className="text-accent-blue mr-2" /> PostgreSQL
                </li>
                <li className="flex items-center text-text-secondary">
                  <FaDatabase className="text-accent-blue mr-2" /> RESTful APIs
                </li>
                <li className="flex items-center text-text-secondary">
                  <FaAws className="text-accent-orange mr-2" /> AWS
                </li>
              </ul>
            </div>

            {/* GenAI & Automation */}
            <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
              <h3 className="text-xl text-accent-orange mb-4 flex items-center">
                <FaCode className="mr-2" /> GenAI & Automation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-text-secondary">
                  <FaCode className="text-accent-green mr-2" /> Make / Zapier
                </li>
                <li className="flex items-center text-text-secondary">
                  <FaCode className="text-accent-blue mr-2" /> Prompt Engineering
                </li>
                <li className="flex items-center text-text-secondary">
                  <FaCode className="text-accent-orange mr-2" /> OpenAI / Claude / Gemini
                </li>
                <li className="flex items-center text-text-secondary">
                  <FaCode className="text-accent-green mr-2" /> Cursor
                </li>
                <li className="flex items-center text-text-secondary">
                  <FaCode className="text-accent-blue mr-2" /> Cline
                </li>
                <li className="flex items-center text-text-secondary">
                  <FaCode className="text-accent-orange mr-2" /> Copilot
                </li>
              </ul>
            </div>

            {/* Languages */}
            <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
              <h3 className="text-xl text-accent-orange mb-4 flex items-center">
                <FaGlobe className="mr-2" /> Languages
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-text-secondary">
                  <span className="w-4 h-4 bg-accent-blue rounded-full mr-2"></span>{" "}
                  English (Fluent)
                </li>
                <li className="flex items-center text-text-secondary">
                  <span className="w-4 h-4 bg-accent-green rounded-full mr-2"></span>{" "}
                  French (Fluent)
                </li>
                <li className="flex items-center text-text-secondary">
                  <span className="w-4 h-4 bg-accent-orange rounded-full mr-2"></span>{" "}
                  Portuguese (Native)
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
              <p className="text-text-primary mb-2">Frontend Developer | Freelance</p>
              <p className="text-text-secondary mb-4">FRANCE | 2024 - Present</p>
              <ul className="space-y-2">
                <li className="text-text-secondary">• Developed high-performance user interfaces using React.js, Next.js, and TypeScript</li>
                <li className="text-text-secondary">• Created reusable components with Redux and React Query for state management</li>
                <li className="text-text-secondary">• Enhanced UI interactivity using Framer Motion animations</li>
                <li className="text-text-secondary">• Integrated Supabase and RESTful APIs for real-time data interactions</li>
                <li className="text-text-secondary">• Applied SEO strategies and accessibility standards for optimal reach</li>
                <li className="text-text-secondary">• Supported minor GenAI chatbot integrations via API</li>
              </ul>
            </div>

            <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
              <h3 className="text-xl text-accent-orange">Agence Jaraujo</h3>
              <p className="text-text-primary mb-2">GenAI Developer & AI Automation Engineer | Freelance</p>
              <p className="text-text-secondary mb-4">PARIS, FRANCE | 2023 - 2024</p>
              <ul className="space-y-2">
                <li className="text-text-secondary">• Building autonomous AI agents (CEO > PM > agents) with Relevance AI and LangChain</li>
                <li className="text-text-secondary">• Integrating OpenAI GPT APIs to automate WhatsApp via Twilio: auto-replies, scheduling, CRM workflows</li>
                <li className="text-text-secondary">• Developing smart content generation pipelines for LinkedIn and Instagram using LLMs</li>
                <li className="text-text-secondary">• Automating tasks with Make.com: from market research to travel planning and document generation</li>
                <li className="text-text-secondary">• Structuring vector database memory systems for persistent chatbots using Pinecone and Supabase</li>
                <li className="text-text-secondary">• Designing dashboards powered by AI agents for customer insights and lead tracking</li>
              </ul>
            </div>

            <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
              <h3 className="text-xl text-accent-orange">HPE | TD SYNNEX</h3>
              <p className="text-text-primary mb-2">Head of Presentation and Training</p>
              <p className="text-text-secondary mb-4">PARIS, FRANCE | 2022 - 2023</p>
              <ul className="space-y-2">
                <li className="text-text-secondary">• Delivered engaging AI-centric tech presentations and training across Europe</li>
                <li className="text-text-secondary">• Created onboarding content with LMS tools (Articulate, Adobe Captivate, Camtasia)</li>
                <li className="text-text-secondary">• Introduced internal AI workflow documentation and GPT-based presentation builders</li>
                <li className="text-text-secondary">• Built dashboards with Power BI and Excel Advanced to track AI training KPIs</li>
                <li className="text-text-secondary">• Conducted webinars using MS Teams, Zoom, GoToWebinar — boosting adoption by 20%</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
