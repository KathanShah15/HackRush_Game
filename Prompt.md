#  Prompt – The Flower and The Wind

Design a 2-player browser-based strategy game on a **5x5 grid** using only **HTML**, **CSS**, and **JavaScript**.

### Player Roles

- **Player 1 – Flower (🌸)**  
  Places a flower in any empty cell on their turn.

- **Player 2 – Wind (🌬️)**  
  Has a total of **7 turns** in the game. On each turn, Wind selects **one direction** to spread seeds (•) from every existing flower:
  - Allowed directions: N, NE, E, SE, S, SW, W, NW
  - Each direction can be used only **once** during the game.
  - Seeds can be placed **only in empty cells**.

### Game Mechanics

- The game begins with the Flower’s turn.
- Turns alternate between Flower and Wind.
- The turn status must be clearly indicated in the UI.
- Wind spreads seeds by one step in the chosen direction from each flower.

### Win Conditions

- **Flower wins** if all 25 grid cells are filled with flowers (🌸).
- **Wind wins** if all 7 wind moves are used and **any cell remains empty**.

### Constraints

- Use **only HTML, CSS, and Vanilla JavaScript** (no external libraries or frameworks).
- Ensure clean game logic and user-friendly visual feedback.
- Must run locally in any modern web browser.

---

This prompt guided the design and logic of the game **The Flower and The Wind**.
