import styles from "./HangmanWord.module.css";

type HangmanWordProps = {
  guessLetters: string[];
  wordToGuess: string;
  result?: boolean;
};

const HangmanWord = ({
  guessLetters,
  wordToGuess,
  result = false,
}: HangmanWordProps) => {
  return (
    <div className={styles.wordContainer}>
      {/* take the word, create individual characters, write with map */}
      {wordToGuess.split("").map((letter, index) => (
        <span className={styles.letterContainer} key={index}>
          <span
            className={styles.letter}
            style={{
              visibility:
                guessLetters.includes(letter) || result ? "visible" : "hidden",
              color:
                !guessLetters.includes(letter) && result
                  ? "#BE123C"
                  : "#1C1917",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
