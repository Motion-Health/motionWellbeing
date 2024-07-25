import React, { useState, useEffect, useRef } from "react";
import styles from "./pong.module.css"; // make sure this path is correct
import mainTheme from "@/styles/theme.module.css";
const Pong = ({ restart }) => {
  const [isTwoPlayer, setIsTwoPlayer] = useState(false); // State for two-player mode

  const canvasRef = useRef(null);
  const requestRef = useRef();
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [context, setContext] = useState(null);
  const [difficulty, setDifficulty] = useState(0.1); // Difficulty level, can be adjusted with buttons
  const [isGameRunning, setIsGameRunning] = useState(true);

  const aiMaxSpeed = useRef(1);
  const gameSize = { width: 600, height: 400 };
  const paddle = { width: 10, height: 100 };
  const playerPosition = useRef(gameSize.height / 2 - paddle.height / 2);
  const aiPosition = useRef(gameSize.height / 2 - paddle.height / 2);
  const playerTargetPosition = useRef(gameSize.height / 2 - paddle.height / 2);
  const player2Position = useRef(gameSize.height / 2 - paddle.height / 2);
  const player2TargetPosition = useRef(gameSize.height / 2 - paddle.height / 2);
  const ball = useRef({
    x: gameSize.width / 2,
    y: gameSize.height / 2,
    radius: 7,
    speedX: 2,
    speedY: 2,
  });
  useEffect(() => {
    // Reset game state here
    resetGame();
  }, [restart]);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    playerTargetPosition.current = e.clientY - rect.top - paddle.height / 2;
    playerTargetPosition.current = Math.max(
      Math.min(playerTargetPosition.current, gameSize.height - paddle.height),
      0
    );
  };
  const handleScore = (scorer) => {
    if (scorer === "player") {
      setPlayerScore((prevScore) => prevScore + 1);
    } else {
      setAiScore((prevScore) => prevScore + 1);
    }
    // Reset the ball position using the current property
    ball.current.x = gameSize.width / 2;
    ball.current.y = gameSize.height / 2;
    ball.current.speedX = -ball.current.speedX;
    ball.current.speedY = -ball.current.speedY;
  };
  // Event handler for touch movement
  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const rect = canvasRef.current.getBoundingClientRect();
    const touchY = touch.clientY - rect.top - paddle.height / 2;

    if (touch.clientX < window.innerWidth / 2) {
      // Touch on the left side, move player 1 paddle
      playerTargetPosition.current = Math.max(
        Math.min(touchY, gameSize.height - paddle.height),
        0
      );
    } else {
      // Touch on the right side, move player 2 paddle
      player2TargetPosition.current = Math.max(
        Math.min(touchY, gameSize.height - paddle.height),
        0
      );
    }
  };

  const resetGame = () => {
    setPlayerScore(0);
    setAiScore(0);
    // Reset the ball position and speed using the current property
    ball.current.x = gameSize.width / 2;
    ball.current.y = gameSize.height / 2;
    ball.current.speedX = 2;
    ball.current.speedY = 2;
    setIsGameRunning(true);
  };

  const draw = () => {
    if (context) {
      context.clearRect(0, 0, gameSize.width, gameSize.height);
      context.fillStyle = "white";

      // Draw player paddle
      context.fillRect(0, playerPosition.current, paddle.width, paddle.height);

      let paddle2Position = isTwoPlayer
        ? player2Position.current
        : aiPosition.current;

      context.fillRect(
        gameSize.width - paddle.width,
        paddle2Position,
        paddle.width,
        paddle.height
      );

      // Draw ball
      context.beginPath();
      context.arc(
        ball.current.x,
        ball.current.y,
        ball.current.radius,
        0,
        Math.PI * 2
      );
      context.fill();
    }
  };

  const resetBall = () => {
    ball.current.x = gameSize.width / 2;
    ball.current.y = gameSize.height / 2;
    const baseSpeed = 2; // Base speed of the ball
    ball.current.speedX = baseSpeed + difficulty * 10;
    ball.current.speedY = baseSpeed + difficulty * 10;
  };
  const resetAiPosition = () => {
    aiPosition.current = gameSize.height / 2 - paddle.height / 2;
  };

  const update = (time) => {
    if (isGameRunning) {
      if (ball.current.x < 0) {
        handleScore("ai");
        resetBall();
      } else if (ball.current.x > gameSize.width) {
        handleScore("player");
        resetBall();
      }
      // Update ball position
      ball.current.x += ball.current.speedX;
      ball.current.y += ball.current.speedY;

      const moveStep = 5; // Speed of paddle movement, adjust as needed
      if (playerPosition.current < playerTargetPosition.current) {
        playerPosition.current = Math.min(
          playerPosition.current + moveStep,
          playerTargetPosition.current
        );
      } else if (playerPosition.current > playerTargetPosition.current) {
        playerPosition.current = Math.max(
          playerPosition.current - moveStep,
          playerTargetPosition.current
        );
      }

      if (player2Position.current < player2TargetPosition.current) {
        player2Position.current = Math.min(
          player2Position.current + moveStep,
          player2TargetPosition.current
        );
      } else if (player2Position.current > player2TargetPosition.current) {
        player2Position.current = Math.max(
          player2Position.current - moveStep,
          player2TargetPosition.current
        );
      }

      // Collision with top and bottom
      if (
        ball.current.y < ball.current.radius ||
        ball.current.y > gameSize.height - ball.current.radius
      ) {
        ball.current.speedY *= -1;
      }

      // Collision with paddles
      if (
        (ball.current.x < paddle.width &&
          ball.current.y > playerPosition.current &&
          ball.current.y < playerPosition.current + paddle.height) ||
        (ball.current.x > gameSize.width - paddle.width &&
          ball.current.y > aiPosition.current &&
          ball.current.y < aiPosition.current + paddle.height)
      ) {
        ball.current.speedX *= -1.1;
        ball.current.speedY *= 1.1;
      }

      // AI movement
      if (!isTwoPlayer) {
        let aiMovement =
          (ball.current.y - aiPosition.current - paddle.height / 2) *
          difficulty *
          10;
        aiMovement = Math.max(
          Math.min(aiMovement, aiMaxSpeed.current),
          -aiMaxSpeed.current
        );
        aiPosition.current += aiMovement;
      }
    }

    draw();
    requestRef.current = requestAnimationFrame(update);

    // console.log('Updating game state.'); // Debug log
  };
  const changeDifficulty = (level) => {
    setDifficulty(level);
    aiMaxSpeed.current = 1 + level * 5; // Update the AI max speed ref based on difficulty
    resetBall(); // Reset the ball to apply new speed
  };

  useEffect(() => {
    resetBall();
  }, [difficulty]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const renderCtx = canvas.getContext("2d");
      if (renderCtx) {
        setContext(renderCtx);
      } else {
        console.log("Failed to get canvas context");
      }
    }
  }, []);

  useEffect(() => {
    if (context) {
      requestRef.current = requestAnimationFrame(update);
    }
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [context]); // Add context as a dependency here

  return (
    <div className={styles.gameContainer}>
      <div className={styles.scoreBoard}>
        Player: {playerScore} | Computer: {aiScore}
      </div>
      <canvas
        ref={canvasRef}
        width={gameSize.width}
        height={gameSize.height}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove} // Enable touch control
        className={styles.canvas}
      />
      <div className={styles.controls}>
        {/* <button
          className={`${mainTheme.smallButton} ${mainTheme.button}`}
          onClick={() => {
            setIsTwoPlayer((prevMode) => {
              if (prevMode) {
                resetAiPosition(); // Reset AI position when switching to single-player
              }
              return !prevMode;
            });
          }}
        >
          {isTwoPlayer ? 'Single Player' : 'Two Player'}
        </button> */}

        <button
          className={`${mainTheme.smallButton} ${mainTheme.button}`}
          onClick={() => changeDifficulty(0.1)}
        >
          Easy
        </button>
        <button
          className={`${mainTheme.smallButton} ${mainTheme.button}`}
          onClick={() => changeDifficulty(0.2)}
        >
          Medium
        </button>
        <button
          className={`${mainTheme.smallButton} ${mainTheme.button}`}
          onClick={() => changeDifficulty(0.3)}
        >
          Hard
        </button>
      </div>
    </div>
  );
};

export default Pong;
