#  The Flower and The Wind

A creative 2-player strategy game built for the web using HTML, CSS, and JavaScript. It was developed as part of a hackathon to demonstrate game logic, interactivity, and a clean UI using only open-source technologies.

---

##  How to Play

**The Flower and The Wind** is a 2-player game played on a 5x5 grid. Players take alternate turns playing as **The Flower** and **The Wind**.

###  Objective
- **Flower Player:** Fill the entire grid with flowers (🌸).
- **Wind Player:** Prevent the grid from being filled using directional seed placements (•).

###  Flower Turn – How to Play
1. Flower Player clicks on any empty cell.
2. A flower (🌸) is placed in that cell.
3. Flower cannot overwrite existing seeds or flowers.
4. After placing, the turn switches to the Wind.

### 🌬 Wind Turn – How to Play
1. Wind has **7 total turns** in the entire game.
2. On each turn, Wind selects one **direction** from:
   - N, NE, E, SE, S, SW, W, NW
3. From each flower on the grid, a seed (•) is placed **one step** in the selected direction if that cell is empty.
4. A direction **can only be used once**.

###  Turn Switching
- The game starts with Flower's turn.
- Turns alternate automatically.
- The turn indicator at the top shows whose turn it is.

###  Game End Conditions
- **Flower Wins** if all 25 cells are filled with flowers (🌸).
- **Wind Wins** if all 7 wind turns are used and empty cells remain.

###  Rules Recap
- No overwriting of existing cells.
- Wind spreads seeds from all flowers at once.
- Directions disable after use.
- Game status updates after every move.

---

##  Tech Stack
- **HTML5** – Structure
- **CSS3** – Styling with Flexbox and Grid
- **Vanilla JavaScript (ES6)** – Game logic

No external libraries, frameworks, or AI-generated assets were used.

---

##  File Structure
```
index.html
style.css
main.js
```


