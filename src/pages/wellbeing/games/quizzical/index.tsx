import { useRouter } from "next/router";
import blob from "public/assets/images/games/quizzical/blob.png";
import React, { useEffect, useRef } from "react";
import Confetti from "react-confetti";

import { GameWindow } from "@/components/GameWindow";
import { useCompleteActivity } from "@/services/activities/useCompleteActivity";

import styles from "./quizzical.module.css";
const Quizzical = () => {
  const completeActivity = useCompleteActivity();
  const completeActivityCalled = useRef(false);

  useEffect(() => {
    if (!completeActivityCalled.current) {
      completeActivityCalled.current = true;
      completeActivity.mutate(
        { activityId: 203 },
        {
          onSuccess: (res) => {
            console.log("res", res);
          },
        }
      );
    }
  }, []);

  const [score, setScore] = React.useState(0);
  const [showAnswers, setShowAnswers] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [allComplete, setAllComplete] = React.useState(false);
  const [gameStatus, setGameStatus] = React.useState("playing"); // ['playing', 'finished', 'reviewing']
  const fetchQuestions = () => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results && Array.isArray(data.results)) {
          setQuestions(
            data.results.map(function (question) {
              return {
                question: question.question,
                options: question.incorrect_answers
                  .concat([question.correct_answer])
                  .map((value) => ({ value, sort: Math.random() }))
                  .sort((a, b) => a.sort - b.sort)
                  .map(({ value }) => value),
                selected_answer: undefined,
                correct_answer: question.correct_answer,
              };
            })
          );
        } else {
          console.error("Unexpected data structure:", data);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  React.useEffect(() => {
    fetchQuestions(); // Fetch questions when component mounts
  }, []);

  function playAgain() {
    setGameStatus("playing");
    setShowAnswers(false);
    setAllComplete(false);
    fetchQuestions(); // Fetch new questions
  }
  function checkAnswers() {
    setGameStatus("finished");
    setShowAnswers(true);
  }

  function selectAnswer(event, quest_id, option_id) {
    setQuestions(function (prev) {
      return questions.map(function (quest, qid) {
        if (quest_id === qid) {
          return { ...quest, selected_answer: option_id };
        } else {
          return quest;
        }
      });
    });
  }
  const router = useRouter();

  React.useEffect(() => {
    var count = 0;
    for (var i = 0; i < questions.length; i++) {
      if (typeof questions[i].selected_answer !== "undefined") {
        if (
          questions[i].options[questions[i].selected_answer] ===
          questions[i].correct_answer
        ) {
          count++;
        }
      }
    }
    setScore(count);
  }, [showAnswers]);

  React.useEffect(() => {
    setAllComplete(
      questions.every((quest) => typeof quest.selected_answer !== "undefined")
    );
  }, [questions]);

  const handleResume = () => {
    // Code to resume the game
    console.log("Resuming game");
  };

  const handleRestart = () => {
    // Code to restart the game
    console.log("Restarting game");
    // reload page
    router.reload();
  };

  const reviewAnswers = () => {};

  const quests = questions.map(function (question, index) {
    return (
      <Quest
        key={index}
        question={question}
        showAnswers={showAnswers}
        selectAnswer={selectAnswer}
        id={index}
      />
    );
  });
  const game = {
    id: 1,
    name: "Quizzical",
    description: "A Quiz Game",
    instructions:
      "Test your knowledge with our quiz. Answer the questions to the best of your ability. Good luck!",
    link: "/wellbeing/games/quizzical",
  };

  return (
    <>
      <div className={styles.app}>
        <GameWindow
          game={game}
          onRestart={handleRestart}
          onResume={handleResume}
        />

        <div className={styles.quizContainer}>
          {quests}

          {gameStatus === "playing" && (
            <button
              className={styles.button}
              disabled={!allComplete}
              onClick={checkAnswers}
            >
              Check answers
            </button>
          )}
          {gameStatus === "finished" && (
            <>
              <div className={styles.overlay}>
                <Confetti />
              </div>
              <div className={styles.buttonContainer}>
                <h3 className={styles.buttonContainerScore}>
                  {"You scored " + score + "/10 correct answers"}
                </h3>
                <button className={styles.button} onClick={playAgain}>
                  Play Again
                </button>
                <button
                  className={styles.button}
                  onClick={() => setGameStatus("reviewing")}
                >
                  Review Answers
                </button>
              </div>
            </>
          )}
          {gameStatus === "reviewing" && (
            <button className={styles.button} onClick={playAgain}>
              Play Again
            </button>
          )}
        </div>
      </div>
      <img className={styles.blob1} src={blob} alt="" />
      <img className={styles.blob2} src={blob} alt="" />
    </>
  );
};

function Quest(props) {
  function styler(option, index) {
    if (props.showAnswers === true) {
      if (props.question.correct_answer === option) {
        return { backgroundColor: "#94D7A2" };
      } else if (props.question.selected_answer === index) {
        return { backgroundColor: "#F8BCBC" };
      } else {
        return { backgroundColor: "#F5F7FB" };
      }
    } else {
      return props.question.selected_answer === index
        ? { backgroundColor: "#D6DBF5" }
        : { backgroundColor: "#F5F7FB" };
    }
  }

  const options = props.question.options.map((option, index) => (
    <button
      key={index}
      dangerouslySetInnerHTML={{ __html: option }}
      onClick={(event) => props.selectAnswer(event, props.id, index)}
      style={styler(option, index)}
      disabled={props.showAnswers}
      className={styles.quizContainerQuestionOptionsContainerOption}
    />
  ));

  return (
    <div className={styles.quizContainerQuestion}>
      <h3 className={styles.quizContainerQuestionNumber}>
        Question {props.id + 1}
      </h3>
      <h1
        className={styles.quizContainerQuestionTitle}
        dangerouslySetInnerHTML={{ __html: props.question.question }}
      ></h1>
      <div className={styles.quizContainerQuestionOptionsContainer}>
        {options}
      </div>
      <hr className={styles.quizContainerQuestionDivider} />
    </div>
  );
}

export default Quizzical;
