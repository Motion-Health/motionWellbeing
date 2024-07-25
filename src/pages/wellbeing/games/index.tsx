import { Grid } from "@mui/material";
import Head from "next/head";

import { GameCard } from "@/components/GameCard";
import PageHeader from "@/components/PageHeader/index";
import { useAccountContext } from "@/context/AccountContext";
import { Main } from "@/templates/Main";

const Games = () => {
  const {
    account: { accountStatus },
  } = useAccountContext();

  const games = [
    {
      id: 1,
      name: "Snake",
      description: "A classic game of snake",
      instructions:
        "Use the arrow keys to move the snake around the screen. Eat the apples to grow longer. Avoid hitting yourself.",
      link: "/wellbeing/games/snake-game",
    },
    {
      id: 2,
      name: "Quizzical",
      description: "A quiz game",
      instructions: "Answer the questions to get points.",
      link: "/wellbeing/games/quizzical",
    },
    {
      id: 3,
      name: "Colour Memory",
      description: "A memory game",
      instructions:
        "Remember the colours your have clicked and don't repeat them.",
      link: "/wellbeing/games/colour-game",
    },
    {
      id: 4,
      name: "Noughts and Crosses",
      description: "A classic game of noughts and crosses",
      instructions:
        "Get three in a row to win! Click the button below to go back to the Wellbeing page.",
      link: "/wellbeing/games/noughts-crosses",
    },
    {
      id: 5,
      name: "Hangman",
      description: "A classic game of hangman",
      instructions:
        "Guess the word by clicking on the letters. You have 6 lives.",
      link: "/wellbeing/games/hangman",
    },
    // {
    //   id: 6,
    //   name: 'Tetris',
    //   description: 'A classic game of Tetris',
    //   instructions:
    //     'Use the arrow keys to move the blocks around the screen. Use the space bar to rotate the blocks. Fill a row to clear it.',
    //   link: '/wellbeing/games/tetris',
    // },
    {
      id: 7,
      name: "Sudoku",
      description: "A classic game of sudoku",
      instructions:
        "Use the arrow keys to move the blocks around the screen. Use the space bar to rotate the blocks. Fill a row to clear it.",
      link: "/wellbeing/games/sudoku",
    },
    {
      id: 8,
      name: "Pong",
      description: "A classic game of pong",
      instructions:
        "Use the arrow keys to move the blocks around the screen. Use the space bar to rotate the blocks. Fill a row to clear it.",
      link: "/wellbeing/games/pong",
    },
  ];

  return (
    <Main>
      <Head>
        <title>Games | Motion Wellbeing</title>
        <meta name="description" content="Games" />
      </Head>

      <PageHeader title="Games"></PageHeader>

      <div className="activities_parent">
        <Grid
          className="curved-corners activities"
          container
          sx={{
            minWidth: 300,
          }}
        >
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </Grid>
      </div>
    </Main>
  );
};

export default Games;
