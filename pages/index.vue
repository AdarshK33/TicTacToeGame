<template>
  <div :class="['app', isDark ? 'dark' : 'light']">
    <h2 class="status">{{ status }}</h2>

    <!-- 🌙 Dark Mode Toggle -->
    <div class="settings">
      <label class="toggle">
        <input type="checkbox" v-model="isDark" />
        Dark Mode
      </label>
    </div>

    <!-- 📝 Name Input Screen -->
    <div v-if="!namesSet" class="name-inputs">
      <input v-model="playerNames.X" placeholder="Enter Player X name" />
      <input v-model="playerNames.O" placeholder="Enter Player O name" />
      <button @click="startGame">✅ Start Game</button>
    </div>

    <!-- 🏆 Scoreboard -->
    <div v-else class="scoreboard">
      <span>{{ playerNames.X }}: {{ score.X }}</span>
      <span>{{ playerNames.O }}: {{ score.O }}</span>
    </div>

    <button v-if="namesSet" id="reset-btn" @click="resetGame">🔁 Reset</button>

    <!-- Game Board -->
    <div v-if="namesSet" class="board">
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
import confetti from 'canvas-confetti'

const varFiltersCg = ref(Array(9).fill("")) // game board
const currentPlayer = ref("")               // current turn
const winner = ref(null)                    // winner state
const isDark = ref(false)                   // dark mode toggle
const score = ref({ X: 0, O: 0 })            // 🏆 score
const varOcg = ref(null)                     // required variable

// Player names
const playerNames = ref({ X: "", O: "" })
const namesSet = ref(false)

// Game status text
const status = computed(() => {
  if (!namesSet.value) return "Enter player names to start 🎮"
  if (winner.value === "draw") return "🤝 It's a draw!"
  return winner.value
    ? `🎉 ${playerNames.value[winner.value]} wins!`
    : `Next player: ${playerNames.value[currentPlayer.value]}`
})

// Start game after setting names
function startGame() {
  if (!playerNames.value.X.trim() || !playerNames.value.O.trim()) {
    alert("Please enter both player names!")
    return
  }
  namesSet.value = true
  resetGame()
}

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

// Check win condition
function checkWinner() {
  const b = varFiltersCg.value
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ]
  return lines.some(([a, b1, c]) => b[a] && b[a] === b[b1] && b[a] === b[c])
}

// 🎉 Confetti on win
function celebrate() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
    zIndex: 999
  })
}

// Reset board
function resetGame() {
  varFiltersCg.value = Array(9).fill("")
  currentPlayer.value = Math.random() < 0.5 ? "X" : "O"
  winner.value = null
}
</script>

<style scoped>
.name-inputs {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 250px;
  margin: 20px auto;
}
.name-inputs input {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.name-inputs button {
  padding: 8px;
  background: #5e60ce;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
