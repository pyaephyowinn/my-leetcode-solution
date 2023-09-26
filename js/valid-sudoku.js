const isValidSudoku = (board) => {
  // check row and cols
  for (let i = 0; i < board.length; i++) {
    let horizontalArr = [];
    let verticalArr = [];

    for (let j = 0; j < board[i].length; j++) {
      let num = board[i][j];
      let num2 = board[j][i];

      if (num !== ".") {
        if (horizontalArr.includes(num)) {
          return false;
        } else {
          horizontalArr.push(num);
        }
      }

      if (num2 !== ".") {
        if (verticalArr.includes(num2)) {
          return false;
        } else {
          verticalArr.push(num2);
        }
      }
    }
  }

  // check square
  for (let i = 0; i <= 8; i++) {
    let first = 0,
      second = 0;
    switch (i) {
      case 1:
        first = 3;
        break;
      case 2:
        first = 6;
        break;
      case 3:
        second = 3;
        break;
      case 4:
        first = 3;
        second = 3;
        break;
      case 5:
        first = 6;
        second = 3;
        break;
      case 6:
        second = 6;
        break;
      case 7:
        first = 3;
        second = 6;
        break;
      case 8:
        first = 6;
        second = 6;
        break;
    }

    // one square
    let square = [];
    for (let j = 0; j <= 2; j++) {
      for (let k = 0; k <= 2; k++) {
        let num = board[j + first][k + second];
        if (num !== ".") {
          if (square.includes(num)) {
            return false;
          }
          square.push(num);
        }
      }
    }
  }
};

isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
