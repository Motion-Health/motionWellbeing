import React, { useCallback, useEffect, useRef, useState } from 'react';

import defaultStyes from '@/pages/wellbeing/games/gameDefaults.module.css';

import styles from './Snake.module.css';
interface Props {
  color1: string;
  color2: string;
  backgroundColor: string;
  restart: number;
}

const Snake: React.FC<Props> = (props) => {
  const [dim, setDim] = useState<number>(0);
  const [chunk, setChunk] = useState<number>(0);
  const [direction, setDirection] = useState('right');
  const [fruit, setFruit] = useState<number>(26);
  const [points, setPoints] = useState<number>(0);
  const [game, setGame] = useState<boolean>(false);
  const width: number = window.innerWidth;
  const speedRef = useRef(100);
  const [difficulty, setDifficulty] = useState('1'); // Default to easy
  useEffect(() => {
    // Set speed based on difficulty
    switch (difficulty) {
      case '1':
        speedRef.current = 500;
        break;
      case '2':
        speedRef.current = 300;
        break;
      case '3':
        speedRef.current = 150;
        break;
      case '4':
        speedRef.current = 100;
        break;
      case '5':
        speedRef.current = 50;
        break;
      default:
        speedRef.current = 100;
    }
    // ... rest of your useEffect code
  }, [difficulty]);

  const [snake, setSnake] = useState<any>([
    {
      direction: 'right',
      part: [186, 185, 184, 183],
    },
  ]);
  useEffect(() => {
    // Reset game state when the restart prop changes
    reset();
  }, [props.restart]);

  const reset = () => {
    speedRef.current = 100;
    setPoints(0);
    setDirection('right');
    setSnake([
      {
        direction: 'right',
        part: [186, 185, 184, 183],
      },
    ]);
    setGame(false);
  };

  const pieces = () => {
    //functionally label snake pieces (bang) and return
    let arr = [];
    for (let i = 0; i < 400; i++) {
      let addToArr: boolean = false;
      let j = 0;
      while (j < snake.length) {
        if (snake[j].part.indexOf(i) >= 0) {
          addToArr = true;
          break;
        } else {
          addToArr = false;
        }
        j++;
      }
      addToArr
        ? arr.push('bang')
        : i === fruit
        ? arr.push('fruit')
        : arr.push('');
    }
    return arr;
  };

  //handle direction changes
  const turn = useCallback(
    (dir: string, opp: string) => {
      let tempSnake: any = [...snake];
      if (direction !== opp && direction !== dir) {
        setDirection(dir);
        tempSnake.unshift({
          direction: dir,
          part: [],
        });
      }
      setSnake(tempSnake);
    },
    [snake, direction]
  );

  useEffect(() => {
    //determine relative dimensions of game portal

    setDim(width * 0.5);

    setChunk(dim / 20);

    //points and get longer after eating
    if (snake[0].part[0] === fruit) {
      setPoints(points + 1);
      let sneak = [...snake];
      let firstSection = sneak[0];
      if (firstSection.direction === 'up') {
        let y = firstSection.part[0] - 20;
        if (y < 0) {
          firstSection.part.unshift(y + 400);
        } else {
          firstSection.part.unshift(y);
        }
      } else if (firstSection.direction === 'right') {
        let y = firstSection.part[0] + 1;
        if (y % 20 === 0) {
          firstSection.part.unshift(y + -20);
        } else {
          firstSection.part.unshift(y);
        }
      } else if (firstSection.direction === 'down') {
        let y = firstSection.part[0] + 20;
        if (y >= 400) {
          firstSection.part.unshift(y - 400);
        } else {
          firstSection.part.unshift(y);
        }
      } else if (firstSection.direction === 'left') {
        let y = firstSection.part[0] - 1;
        if (y % 20 === 19) {
          firstSection.part.unshift(y + 20);
        } else {
          firstSection.part.unshift(y);
        }
      }
      speedRef.current = speedRef.current - 2;
      setSnake(sneak);
      setFruit(Math.floor(Math.random() * Math.floor(400)));
    }

    //gameover if you eat your tail
    let totalArr: any[] = [];
    for (let k = 0; k < snake.length; k++) {
      totalArr = [...totalArr, ...snake[k].part];
    }
    let head = snake[0].part[0];
    totalArr.filter((item) => item === head).length >= 2 && setGame(true);

    if (!game) {
      //if GAMEOVER pause events

      //listen for directions and update snake instructions accordingly
      const handleKeydown = (e: any) => {
        //let tempSnake: any = [...snake];
        switch (e.code) {
          case 'ArrowUp':
            e.preventDefault();
            turn('up', 'down');
            break;
          case 'ArrowRight':
            e.preventDefault();
            turn('right', 'left');
            break;
          case 'ArrowDown':
            e.preventDefault();
            turn('down', 'up');
            break;
          case 'ArrowLeft':
            e.preventDefault();
            turn('left', 'right');
            break;
        }
      };
      document.addEventListener('keydown', handleKeydown);

      //event interval
      const interval = setInterval(() => {
        //handle snake piece movement
        let dupSneak: any = [...snake];

        for (let i = snake.length - 1; i > 0; i--) {
          //increment through current snake and reduce to head direction
          if (dupSneak[i].part.length !== 0) {
            let next = dupSneak[i - 1];
            let chunk = dupSneak[i].part.shift();
            next.part.push(chunk);
          } else {
            dupSneak.pop();
          }
        }

        //perform movement changes to each chunk
        let sneak: any[] = dupSneak;
        sneak.map((section: any) => {
          if (section.direction === 'right') {
            section.part.map((x: number, i: number) => {
              let y = x + 1;
              if (y % 20 === 0) {
                return (section.part[i] = y - 20);
              } else {
                return (section.part[i] = y);
              }
            });
          } else if (section.direction === 'up') {
            section.part.map((x: number, i: number) => {
              let y = x - 20;
              if (y < 0) {
                return (section.part[i] = y + 400);
              } else {
                return (section.part[i] = y);
              }
            });
          } else if (section.direction === 'left') {
            section.part.map((x: number, i: number) => {
              let y = x - 1;
              if (y % 20 === 19) {
                return (section.part[i] = y + 20);
              } else {
                return (section.part[i] = y);
              }
            });
          } else if (section.direction === 'down') {
            section.part.map((x: number, i: number) => {
              let y = x + 20;
              if (y >= 400) {
                return (section.part[i] = y - 400);
              } else {
                return (section.part[i] = y);
              }
            });
          }
          return '';
        });
        setSnake(sneak);
      }, speedRef.current);

      //remove interval and listeners
      return () => {
        clearInterval(interval);
        document.removeEventListener('keydown', handleKeydown);
      };
    }
  }, [turn, width, dim, chunk, snake, direction, points, fruit, game]);

  return (
    <div className={styles.snakeContainer} id="snake-container">
      <div style={{ marginLeft: '85px' }}>
        <div
          className={styles.gameBorder}
          style={{
            width: dim,
            height: dim,
            backgroundColor: props.backgroundColor,
          }}
        >
          {pieces().map((piece, i) => {
            return (
              <div
                key={'piece' + i}
                style={
                  piece === 'bang'
                    ? {
                        width: chunk,
                        height: chunk,
                        backgroundColor: props.color1,
                      }
                    : piece === 'fruit'
                    ? {
                        width: chunk,
                        height: chunk,
                        backgroundColor: props.color2,
                      }
                    : { width: chunk, height: chunk }
                }
              ></div>
            );
          })}
          {game && (
            <div className={styles.gameSplash} style={{ height: dim }}>
              <div>Game Over!</div>
              <button
                className={defaultStyes.defaultStyes}
                onClick={() => reset()}
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={styles.snakeMobileButtons} style={{ width: dim }}>
        <div className={styles.PointBar}>
          <div className={styles.score} style={{ color: props.color2 }}>
            Score: {points}
          </div>
        </div>
        <div className={styles.controls}>
          <div>
            <button onClick={() => turn('up', 'down')}>&#8593;</button>
          </div>
          <div>
            <button onClick={() => turn('left', 'right')}>&#8592;</button>
            <button onClick={() => turn('right', 'left')}>&#8594;</button>
          </div>
          <div>
            <button onClick={() => turn('down', 'up')}>&#8595;</button>
          </div>
        </div>

        <div className={styles.difficultySelector}>
          <button
            className={`${defaultStyes.button} ${
              difficulty === '1' ? defaultStyes.buttonActive : ''
            }`}
            onClick={() => setDifficulty('1')}
          >
            Level 1
          </button>
          <button
            className={`${defaultStyes.button} ${
              difficulty === '2' ? defaultStyes.buttonActive : ''
            }`}
            onClick={() => setDifficulty('2')}
          >
            Level 2
          </button>
          <button
            className={`${defaultStyes.button} ${
              difficulty === '3' ? defaultStyes.buttonActive : ''
            }`}
            onClick={() => setDifficulty('3')}
          >
            Level 3
          </button>
          <button
            className={`${defaultStyes.button} ${
              difficulty === '4' ? defaultStyes.buttonActive : ''
            }`}
            onClick={() => setDifficulty('4')}
          >
            Level 4
          </button>
          <button
            className={`${defaultStyes.button} ${
              difficulty === '5' ? defaultStyes.buttonActive : ''
            }`}
            onClick={() => setDifficulty('5')}
          >
            Level 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default Snake;
