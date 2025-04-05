const size = 5;
const board = document.getElementById("board");
const turnDisplay = document.getElementById("turnDisplay");
const directionsDiv = document.getElementById("directions");
const statusText = document.getElementById("status");

let grid = Array(size).fill(null).map(() => Array(size).fill(""));
let flowerTurn = true;
let windTurns = 0;
let usedDirections = new Set();

const directions = {
  N: [-1, 0], NE: [-1, 1], E: [0, 1], SE: [1, 1],
  S: [1, 0], SW: [1, -1], W: [0, -1], NW: [-1, -1]
};

function createBoard() {
  board.innerHTML = "";
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.row = r;
      cell.dataset.col = c;
      if (grid[r][c] === "F") {
        cell.classList.add("flower");
        cell.textContent = "🌸";
      } else if (grid[r][c] === "S") {
        cell.classList.add("seed");
        cell.textContent = "•";
      }

      if (!grid[r][c] && flowerTurn) {
        cell.addEventListener("click", () => placeFlower(r, c));
      }

      board.appendChild(cell);
    }
  }
}

function placeFlower(r, c) {
  if (!grid[r][c]) {
    grid[r][c] = "F";
    flowerTurn = false;
    updateGame();
  }
}

function placeSeeds(dir) {
  const [dr, dc] = directions[dir];
  let newSeeds = [];

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (grid[r][c] === "F") {
        let nr = r + dr;
        let nc = c + dc;
        if (nr >= 0 && nr < size && nc >= 0 && nc < size && grid[nr][nc] === "") {
          newSeeds.push([nr, nc]);
        }
      }
    }
  }

  newSeeds.forEach(([r, c]) => grid[r][c] = "S");
  windTurns++;
  usedDirections.add(dir);
  flowerTurn = true;
  updateGame();
}

function updateGame() {
  createBoard();
  if (flowerTurn) {
    turnDisplay.textContent = "Flower's Turn: Click a square to plant a flower.";
    directionsDiv.classList.add("disabled");
  } else {
    turnDisplay.textContent = "Wind's Turn: Choose a direction to blow.";
    directionsDiv.classList.remove("disabled");
    [...directionsDiv.querySelectorAll("button")].forEach(btn => {
      btn.disabled = usedDirections.has(btn.dataset.dir);
    });
  }

  checkGameOver();
}

function checkGameOver() {
  const flat = grid.flat();
  if (!flat.includes("")) {
    statusText.textContent = "Flower wins! The board is full.";
    endGame();
  } else if (windTurns >= 7) {
    statusText.textContent = "Wind wins! The board is not full after 7 turns.";
    endGame();
  }
}

function endGame() {
  flowerTurn = false;
  directionsDiv.classList.add("disabled");
  createBoard();
}

if (directionsDiv) {
  directionsDiv.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      placeSeeds(e.target.dataset.dir);
    }
  });
}

if (typeof createBoard === "function") createBoard();
