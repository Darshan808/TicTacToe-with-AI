import "./TicTacToe.css";
import Grid from "../Grid/Grid";
import { useState } from "react";
import { checkWin, checkTie, bestMove } from "../../algorithms/gridAlgo";
import Robot from "../Robot/Robot";

let grid = ["", "", "", "", "", "", "", "", ""];
let count2 = 0;

const TicTacToe = () => {
  const [isLock, setIsLock] = useState(false);
  const [robotText, setRobotText] = useState("Your turn");

  const winHandler = (n) => {
    setRobotText("Yeah, I Won!");
    let img =
      grid[n] === "o"
        ? `<img src="src/assets/circle.png"/>`
        : `<img src="src/assets/cross.png"/>`;
    setRobotText("Yeah, I Won!");
    setIsLock(true);
    document.getElementsByClassName(
      "title"
    )[0].innerHTML = `<span class="yellow">Congratulations</span> ${img} <span class="green">won</span>!`;
  };

  const tieHandler = () => {
    setRobotText("Ahh, Its a tie!");
    setIsLock(true);
    document.getElementsByClassName(
      "title"
    )[0].innerHTML = `<span class="yellow">Its a</span><span class="green">tie!</span>`;
  };

  const addMove = (e, n) => {
    const img = count2 % 2 == 0 ? "circle.png" : "cross.png";
    grid[n] = count2 % 2 == 0 ? "o" : "x";
    e.innerHTML = `<img src="src/assets/${img}" />`;
    // setCount(count + 1);
    ++count2;
    let exit = false;
    if (checkWin(grid)) {
      winHandler(n);
      exit = true;
    } else if (checkTie(grid)) {
      tieHandler();
      exit = true;
    }
    return exit;
  };

  const makeBotThink = () => {
    setRobotText("");
    let dots = " . . .";
    for (let i = 0; i < dots.length; i++) {
      setTimeout(() => {
        setRobotText((t) => t + dots[i]);
      }, 100 * i);
    }
  };

  const handleClick = (e, n) => {
    if (grid[n] != "" || isLock) return;
    let exit = addMove(e.target, n);
    if (exit) return;
    let boxes = document.getElementsByClassName("box");
    let tempGrid = [...grid];
    let compMove = bestMove(tempGrid);
    makeBotThink();
    setTimeout(() => {
      if (!addMove(boxes[compMove], compMove)) setRobotText("Your turn");
    }, 700);
  };

  const resetHandler = () => {
    let boxes = document.getElementsByClassName("box");
    setIsLock(false);
    document.getElementsByClassName(
      "title"
    )[0].innerHTML = `<span class="yellow">Tic </span>
        <span class="green">Tac </span>
        <span class="blue">Toe</span>`;
    for (let i = 0; i < boxes.length; i++) {
      grid[i] = "";
      boxes[i].innerHTML = "";
      boxes[i].style.backgroundColor = "#153540";
    }
    count2 = 0;
    setRobotText("Your turn");
  };

  return (
    <>
      <h1 className="title">
        <span className="yellow">Tic </span>
        <span className="green">Tac </span>
        <span className="blue">Toe</span>
      </h1>
      <div className="button" onClick={resetHandler}>
        Reset
      </div>
      <Grid handleClick={handleClick} />
      <Robot text={robotText} />
    </>
  );
};

export default TicTacToe;
