export const checkWin = (grid, isCheck) => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let boxes = document.getElementsByClassName("box");

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (grid[a] != "" && grid[a] === grid[b] && grid[a] === grid[c]) {
      if (!isCheck) {
        boxes[a].style.backgroundColor = "#3f8aa3";
        boxes[b].style.backgroundColor = "#3f8aa3";
        boxes[c].style.backgroundColor = "#3f8aa3";
      }
      return true;
    }
  }
  return false;
};

export const checkTie = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i] === "") return false;
  }
  return true;
};

// export const bestMove = (grid, turn) => {
//   let box = -1;
//   let obj = { win: "" };
//   checkWin(grid, obj);
//   if (obj.win === "x") return { maxScore: 10 };
//   else if (obj.win === "o") return { maxScore: -10 };
//   else if (checkTie(grid)) return { maxScore: 0 };
//   let maxScore = -999;
//   let score = 0;
//   for (let i = 0; i < grid.length; i++) {
//     if (grid[i] === "") {
//       grid[i] = turn;
//       turn = turn === "x" ? "o" : "x";
//       score = bestMove(grid, turn).maxScore;
//       if (score > maxScore) {
//         maxScore = score;
//         box = i;
//       }
//       grid[i] = "";
//     }
//   }
//   return { maxScore, box };
// };

function miniMax(grid, isAi) {
  if (checkWin(grid, true)) {
    return isAi ? -10 : 10;
  } else if (checkTie(grid)) return 0;

  if (isAi) {
    let score = 0,
      bestScore = -999;
    for (let i = 0; i < grid.length; i++) {
      if (grid[i] === "") {
        grid[i] = "x";
        score = miniMax(grid, false);
        if (score > bestScore) bestScore = score;
        grid[i] = "";
      }
    }
    return bestScore;
  } else {
    let score = 0,
      bestScore = 999;
    for (let i = 0; i < grid.length; i++) {
      if (grid[i] === "") {
        grid[i] = "o";
        score = miniMax(grid, true);
        if (score < bestScore) bestScore = score;
        grid[i] = "";
      }
    }
    return bestScore;
  }
}

export const bestMove = (grid) => {
  let index = -1;
  let score = 0,
    bestScore = -999;
  for (let i = 0; i < grid.length; i++) {
    if (grid[i] === "") {
      grid[i] = "x";
      score = miniMax(grid, false);
      if (score > bestScore) {
        bestScore = score;
        index = i;
      }
      grid[i] = "";
    }
  }
  return index;
};
