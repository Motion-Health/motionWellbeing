import { useRouter } from 'next/router';
import blob from 'public/assets/images/games/quizzical/blob.png';
import React from 'react';

import styles from './quizzical.module.css';
const Quizzical = () => {
  const [showStart, setShowStart] = React.useState(true);
  const [score, setScore] = React.useState(0);
  const [showAnswers, setShowAnswers] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [allComplete, setAllComplete] = React.useState(false);

  function startQuiz() {
    setShowStart(false);
  }

  function playAgain() {
    setShowStart(true);
    setShowAnswers(false);
    setAllComplete(false);
  }

  function checkAnswers() {
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
      if (typeof questions[i].selected_answer !== 'undefined') {
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
    if (showStart === false) {
      fetch('https://opentdb.com/api.php?amount=5')
        .then((res) => res.json())
        .then((data) =>
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
          )
        );
    }
  }, [showStart]);

  React.useEffect(() => {
    setAllComplete(
      questions.every((quest) => typeof quest.selected_answer !== 'undefined')
    );
  }, [questions]);

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

  return (
    <div className={styles.app}>
      <h1>Quizzical</h1>
      <p>
        Test your knowledge with our quiz. Answer the questions to the best of
        your ability. Good luck!
      </p>
      <button onClick={() => router.back()}>Go Back</button>
      {showStart ? (
        <Start startQuiz={startQuiz} />
      ) : (
        <div className={styles.quizContainer}>
          {quests}
          {showAnswers ? (
            <div className={styles.buttonContainer}>
              <h3 className={styles.buttonContainerScore}>
                {'You scored ' + score + '/5 correct answers'}
              </h3>
              <button className={styles.button} onClick={playAgain}>
                Play Again
              </button>
            </div>
          ) : (
            <button
              className={styles.button}
              disabled={!allComplete}
              onClick={checkAnswers}
            >
              Check Answers
            </button>
          )}
        </div>
      )}
      <img className={styles.blob1} src={blob} alt="" />
      <img className={styles.blob2} src={blob} alt="" />
    </div>
  );
};

function Start(props) {
  return (
    <div className={styles.startContainer}>
      <h1 className={styles.startContainerTitle}>Quizzical</h1>
      <h2 className={styles.startContainerSubtitle}>Query Your Brain</h2>
      <button className={styles.startContainerButton} onClick={props.startQuiz}>
        Start Quiz
      </button>
    </div>
  );
}

function Quest(props) {
  function styler(option, index) {
    if (props.showAnswers === true) {
      if (props.question.correct_answer === option) {
        return { backgroundColor: '#94D7A2' };
      } else if (props.question.selected_answer === index) {
        return { backgroundColor: '#F8BCBC' };
      } else {
        return { backgroundColor: '#F5F7FB' };
      }
    } else {
      return props.question.selected_answer === index
        ? { backgroundColor: '#D6DBF5' }
        : { backgroundColor: '#F5F7FB' };
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
      <h1
        className={styles.quizContainerQuestionTitle}
        dangerouslySetInnerHTML={{ __html: props.question.question }}
      />
      <div className={styles.quizContainerQuestionOptionsContainer}>
        {options}
      </div>
      <hr className={styles.quizContainerQuestionDivider} />
    </div>
  );
}

export default Quizzical;
