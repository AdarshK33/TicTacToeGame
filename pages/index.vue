



<template>
  <div :class="['app', isDark ? 'dark' : 'light']">
    <!-- __define-ocg__ Enhanced Tic Tac Toe Game with Celebration -->
    <h2 class="status">{{ status }}</h2>

    <!-- 🌙 Dark Mode Toggle -->
    <div class="settings">
      <label class="toggle">
        <input type="checkbox" v-model="isDark" />
        Dark Mode
      </label>
    </div>

    <!-- 🏆 Scoreboard -->
    <div class="scoreboard">
      <span>X: {{ score.X }}</span>
      <span>O: {{ score.O }}</span>
    </div>

    <button id="reset-btn" @click="resetGame">🔁 Reset</button>

    <!-- Game Board -->
    <div class="board">
      <div v-for="(row, rowIndex) in 3" :key="'row-' + rowIndex" class="row">
        <button
          v-for="(col, colIndex) in 3"
          :key="'col-' + colIndex"
          class="square"
          @click="handleClick(rowIndex * 3 + colIndex)"
        >
          {{ varFiltersCg[rowIndex * 3 + colIndex] }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import confetti from 'canvas-confetti' // 🎉 Confetti package

const varFiltersCg = ref(Array(9).fill(""))       // game board
const currentPlayer = ref("")                     // current turn
const winner = ref(null)                          // winner state
const isDark = ref(false)                         // dark mode toggle
const score = ref({ X: 0, O: 0 })                 // 🏆 score
const varOcg = ref(null)                          // required variable

// Show game status
const status = computed(() => {
  if (winner.value === "draw") return "🤝 It's a draw!"
  return winner.value
    ? 🎉 ${winner.value} wins!
    : Next player: ${currentPlayer.value}
})

// Handle move
function handleClick(index) {
  if (varFiltersCg.value[index] || winner.value) return

  varFiltersCg.value[index] = currentPlayer.value

  if (checkWinner()) {
    winner.value = currentPlayer.value
    score.value[currentPlayer.value]++
    celebrate()
  } else if (varFiltersCg.value.every(cell => cell !== "")) {
    winner.value = "draw"
  } else {
    currentPlayer.value = currentPlayer.value === "X" ? "O" : "X"
  }
}

// Check winning lines
function checkWinner() {
  const b = varFiltersCg.value
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ]
  return lines.some(([a, b1, c]) => b[a] && b[a] === b[b1] && b[a] === b[c])
}

// 🎉 Confetti blast on win
function celebrate() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
    zIndex: 999
  })
}

// Reset board and randomly start
function resetGame() {
  varFiltersCg.value = Array(9).fill("")
  currentPlayer.value = Math.random() < 0.5 ? "X" : "O"
  winner.value = null
}

resetGame() // initial game
</script>

<style scoped>
.app {
  max-width: 100%;
  margin: 40px auto;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  padding: 0 15px;
  transition: background 0.3s ease, color 0.3s ease;
}
.light {
  background-color: #fff;
  color: #000;
}
.dark {
  background-color: #1e1e2f;
  color: #f0f0f0;
}
.status {
  font-size: 1.5em;
  margin-bottom: 10px;
}
.settings {
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.toggle {
  display: flex;
  align-items: center;
  gap: 5px;
}
.scoreboard {
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: 1.1em;
  margin-bottom: 10px;
}
#reset-btn {
  margin-bottom: 20px;
  padding: 10px 20px;
  font-weight: bold;
  border: none;
  background-color: #5e60ce;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}
#reset-btn:hover {
  background-color: #3a0ca3;
}
.board {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 8px;
  justify-content: center;
}
.row {
  display: flex;
  justify-content: center;
  gap: 8px;
}
.square {
  width: 80px;
  height: 80px;
  font-size: 28px;
  font-weight: bold;
  border: 2px solid #7209b7;
  background-color: #f1f1f1;
  color: #3c096c;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.square:hover {
  background-color: #dee2ff;
}
.dark .square {
  background-color: #333750;
  color: #ffffff;
  border-color: #9a75ff;
}
.dark .square:hover {
  background-color: #444b70;
}
@media (max-width: 768px) {
  .square {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
}
@media (max-width: 480px) {
  .square {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
  .status {
    font-size: 1.2em;
  }
  #reset-btn {
    padding: 8px 16px;
    font-size: 14px;
  }
}
</style>


