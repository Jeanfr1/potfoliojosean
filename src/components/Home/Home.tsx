import { useState } from "react";
import SnakeGame from "../Snake/SnakeGame";

const Home = () => {
  const [gameCompleted, setGameCompleted] = useState(false);

  const handleGameComplete = () => {
    setGameCompleted(true);
  };

  return (
    <div className="relative">
      {/* Background blur effects */}
      <div className="background-blur-container">
        <div className="blue-blur"></div>
        <div className="green-blur"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left column - Introduction */}
        <div className="flex flex-col justify-center space-y-16">
          <div className="space-y-2">
            <p className="text-lg text-text-secondary">Hi all. I am</p>
            <h1 className="text-5xl md:text-6xl font-medium text-text-primary">
              Josean Araujo
            </h1>
            <h2 className="text-xl md:text-2xl text-accent-blue leading-relaxed max-w-3xl">
              &gt; GenAI Developer | Frontend Engineer
            </h2>
            <p className="text-text-secondary mt-4 max-w-3xl">
              A GenAI Developer with a solid foundation in frontend engineering,
              communication, and technical training. I design intelligent
              systems using GPT APIs, automation tools, and AI agents to
              streamline workflows and boost productivity. Passionate about
              innovation and learning, I blend modern web technologies with
              generative AI to build impactful digital experiences.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-text-secondary">
              // complete the game to continue
            </p>
            <p className="text-text-secondary">// find my profile on Github:</p>
            <p className="text-text-primary">
              const githubLink ={" "}
              <a
                href="https://github.com/Jeanfr1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-orange hover:underline"
              >
                "https://github.com/Jeanfr1"
              </a>
            </p>
          </div>
        </div>

        {/* Right column - Snake Game */}
        <div className="snake-game-container">
          <SnakeGame onComplete={handleGameComplete} />
        </div>
      </div>

      {/* Additional content revealed after game completion */}
      {gameCompleted && (
        <div className="mt-12 p-6 bg-foreground-dark border border-border-color rounded-lg">
          <h3 className="text-xl text-text-primary mb-4">🎮 Game Completed!</h3>
          <p className="text-text-secondary mb-2">
            Thanks for playing! Now you can explore more about my work and
            skills.
          </p>
          <p className="text-text-secondary">
            Feel free to check out my projects or get in touch if you'd like to
            collaborate.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
