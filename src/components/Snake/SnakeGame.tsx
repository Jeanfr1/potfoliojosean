import { useState, useEffect, useRef } from 'react';

interface SnakeGameProps {
  onComplete: () => void;
}

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const GAME_SPEED = 200; // Slower speed for better visibility
const FOOD_COUNT_TO_WIN = 5; // Reduced from 10 to 5

const SnakeGame: React.FC<SnakeGameProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [foodLeft, setFoodLeft] = useState(FOOD_COUNT_TO_WIN);
  const [message, setMessage] = useState<string>('Click "start-game" to begin the animation');

  // Generate random food position
  const generateFood = (): Position => {
    const x = Math.floor(Math.random() * GRID_SIZE);
    const y = Math.floor(Math.random() * GRID_SIZE);
    return { x, y };
  };

  // Start the game
  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection('RIGHT');
    setFoodLeft(FOOD_COUNT_TO_WIN);
    setMessage('Snake is moving automatically...');
  };

  // Skip the game
  const skipGame = () => {
    setGameStarted(false);
    setScore(FOOD_COUNT_TO_WIN);
    setFoodLeft(0);
    setMessage('Game skipped!');
    onComplete();
  };

  // Determine next direction to move towards food
  const getDirectionToFood = (head: Position, food: Position): Direction => {
    // First try to align horizontally
    if (head.x < food.x) return 'RIGHT';
    if (head.x > food.x) return 'LEFT';

    // Then try to align vertically
    if (head.y < food.y) return 'DOWN';
    if (head.y > food.y) return 'UP';

    // Default direction if somehow at the same position
    return 'RIGHT';
  };

  // Game loop
  useEffect(() => {
    if (!gameStarted) return;

    const gameLoop = setInterval(() => {
      // Get current head position
      const head = { ...snake[0] };

      // Determine direction to move towards food
      const newDirection = getDirectionToFood(head, food);
      setDirection(newDirection);

      // Move snake based on direction
      switch (newDirection) {
        case 'UP':
          head.y = (head.y - 1 + GRID_SIZE) % GRID_SIZE; // Wrap around
          break;
        case 'DOWN':
          head.y = (head.y + 1) % GRID_SIZE; // Wrap around
          break;
        case 'LEFT':
          head.x = (head.x - 1 + GRID_SIZE) % GRID_SIZE; // Wrap around
          break;
        case 'RIGHT':
          head.x = (head.x + 1) % GRID_SIZE; // Wrap around
          break;
      }

      // Create new snake with new head
      const newSnake = [head, ...snake];

      // Check for food collision
      if (Math.abs(head.x - food.x) <= 1 && Math.abs(head.y - food.y) <= 1) {
        setScore(score + 1);
        setFoodLeft(foodLeft - 1);
        setMessage(`Food collected! ${foodLeft - 1} more to go.`);

        // Check if game is won
        if (foodLeft <= 1) {
          setGameStarted(false);
          setMessage('Game completed successfully!');
          onComplete();
          clearInterval(gameLoop);
          return;
        }

        // Generate new food
        setFood(generateFood());
      } else {
        // Remove tail if no food was eaten
        newSnake.pop();
      }

      setSnake(newSnake);
    }, GAME_SPEED);

    return () => clearInterval(gameLoop);
  }, [gameStarted, snake, food, score, foodLeft, onComplete]);

  // Draw game
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    ctx.fillStyle = '#1D293D';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid lines (optional)
    ctx.strokeStyle = '#2A3A50';
    for (let i = 0; i <= GRID_SIZE; i++) {
      // Vertical lines
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0);
      ctx.lineTo(i * CELL_SIZE, GRID_SIZE * CELL_SIZE);
      ctx.stroke();

      // Horizontal lines
      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(GRID_SIZE * CELL_SIZE, i * CELL_SIZE);
      ctx.stroke();
    }

    // Draw snake
    snake.forEach((segment, index) => {
      // Head is a different color
      if (index === 0) {
        ctx.fillStyle = '#43D9AD'; // Green for head

        // Draw the head with a direction indicator
        ctx.fillRect(
          segment.x * CELL_SIZE,
          segment.y * CELL_SIZE,
          CELL_SIZE,
          CELL_SIZE
        );

        // Draw eyes based on direction
        ctx.fillStyle = '#1D293D';
        const eyeSize = CELL_SIZE / 5;
        const eyeOffset = CELL_SIZE / 4;

        if (direction === 'RIGHT') {
          // Right-facing eyes
          ctx.fillRect(
            segment.x * CELL_SIZE + CELL_SIZE - eyeOffset,
            segment.y * CELL_SIZE + eyeOffset,
            eyeSize,
            eyeSize
          );
          ctx.fillRect(
            segment.x * CELL_SIZE + CELL_SIZE - eyeOffset,
            segment.y * CELL_SIZE + CELL_SIZE - eyeOffset - eyeSize,
            eyeSize,
            eyeSize
          );
        } else if (direction === 'LEFT') {
          // Left-facing eyes
          ctx.fillRect(
            segment.x * CELL_SIZE + eyeOffset - eyeSize,
            segment.y * CELL_SIZE + eyeOffset,
            eyeSize,
            eyeSize
          );
          ctx.fillRect(
            segment.x * CELL_SIZE + eyeOffset - eyeSize,
            segment.y * CELL_SIZE + CELL_SIZE - eyeOffset - eyeSize,
            eyeSize,
            eyeSize
          );
        } else if (direction === 'UP') {
          // Up-facing eyes
          ctx.fillRect(
            segment.x * CELL_SIZE + eyeOffset,
            segment.y * CELL_SIZE + eyeOffset - eyeSize,
            eyeSize,
            eyeSize
          );
          ctx.fillRect(
            segment.x * CELL_SIZE + CELL_SIZE - eyeOffset - eyeSize,
            segment.y * CELL_SIZE + eyeOffset - eyeSize,
            eyeSize,
            eyeSize
          );
        } else if (direction === 'DOWN') {
          // Down-facing eyes
          ctx.fillRect(
            segment.x * CELL_SIZE + eyeOffset,
            segment.y * CELL_SIZE + CELL_SIZE - eyeOffset,
            eyeSize,
            eyeSize
          );
          ctx.fillRect(
            segment.x * CELL_SIZE + CELL_SIZE - eyeOffset - eyeSize,
            segment.y * CELL_SIZE + CELL_SIZE - eyeOffset,
            eyeSize,
            eyeSize
          );
        }
      } else {
        // Gradient from green to blue for body
        const ratio = index / snake.length;
        const r = Math.floor(67 * (1 - ratio) + 97 * ratio);
        const g = Math.floor(217 * (1 - ratio) + 95 * ratio);
        const b = Math.floor(173 * (1 - ratio) + 255 * ratio);
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;

        ctx.fillRect(
          segment.x * CELL_SIZE,
          segment.y * CELL_SIZE,
          CELL_SIZE,
          CELL_SIZE
        );
      }
    });

    // Draw food
    ctx.fillStyle = '#FFB86A'; // Orange for food
    ctx.beginPath();
    ctx.arc(
      food.x * CELL_SIZE + CELL_SIZE / 2,
      food.y * CELL_SIZE + CELL_SIZE / 2,
      CELL_SIZE / 2,
      0,
      Math.PI * 2
    );
    ctx.fill();

  }, [snake, food, direction]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full mb-4">
        <div className="text-text-primary">
          <p className="text-sm text-accent-green">// automatic snake</p>
          <p className="text-sm text-accent-green">// animation</p>
        </div>
        <div className="text-text-primary">
          <p className="text-sm text-accent-green">// food left: {foodLeft}</p>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        width={GRID_SIZE * CELL_SIZE}
        height={GRID_SIZE * CELL_SIZE}
        className="border border-border-color rounded-lg mb-4"
      />

      <p className="text-text-secondary mb-4 text-center">{message}</p>

      <div className="flex justify-between w-full">
        {!gameStarted && (
          <button
            onClick={startGame}
            className="btn btn-primary"
          >
            start-game
          </button>
        )}

        {gameStarted && (
          <button
            onClick={() => {
              setGameStarted(false);
              setMessage('Game paused. Click "start-game" to continue.');
            }}
            className="btn btn-primary"
          >
            pause-game
          </button>
        )}

        <button
          onClick={skipGame}
          className="btn btn-outline"
        >
          skip
        </button>
      </div>
    </div>
  );
};

export default SnakeGame;
