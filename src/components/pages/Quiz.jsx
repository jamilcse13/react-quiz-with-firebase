import Answers from "../Quiz/Answers";
import ProgressBar from "../Quiz/ProgressBar";
import MiniPlayer from "../Quiz/MiniPlayer";

export default function Quiz() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
}
