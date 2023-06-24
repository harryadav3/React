import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Main";
import StartScreen from "./components/StartScreen";
import FinishScreen from "./components/FinishScreen";
import Error from './components/Error';
import Progress from "./components/Progress";
import Question from "./components/Question";
import Footer from "./components/Footer";
import Timer from './components/Timer';


const SECONDSPERQUESTION = 30;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECONDSPERQUESTION,
      };
    case "answer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    case "timer":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Action unknowsn");
  }
}

export default function App() {

    const [{questions,status, index, answer, points, highscore, secondsRemaining}, dispatch] = useReducer(reducer,initialState);

    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce((prev,cur) => prev + cur.points,0);

    useEffect(function () {
        fetch("http://localhost:9000/questions")
          .then((res) => res.json())
          .then((data) => dispatch({ type: "dataReceived", payload: data }))
          .catch((err) => dispatch({ type: "dataFailed" }));
      }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === 'loading' && <Loader/>}
        {status === 'error' && <Error/>}
        {status === 'ready' && ( <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>)}
        {status === "active" && (
            <>
            <Progress index={index} numQuestions={numQuestions} points={points} maxPossiblePoints={maxPossiblePoints} answer={answer}/>
            <Question question={questions[index]} dispatch={dispatch} answer={answer}/>
            <Footer><Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/></Footer>
            </>
        )}
        {status === "finished" && ( <FinishScreen points={points} maxPossiblePoints={maxPossiblePoints} highScore={highscore} dispatch={dispatch}/>)}

      </Main>
    </div>
  );
}
