<template>
  <div id="app">
    <!-- Nuxt 3 Tic Tac Toe Game -->
    <h2 class="status">{{ status }}</h2>
    <button id="reset-btn" @click="resetGame">🔁 Reset</button>

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
// Nuxt 3 + Composition API
import { ref, computed } from 'vue'

const varFiltersCg = ref(Array(9).fill("")) // board state
const currentPlayer = ref("X")
const winner = ref(null)
const varOcg = ref(null) // required variable

const status = computed(() => {
  return winner.value ? `🎉 ${winner.value} wins!` : `Next player: ${currentPlayer.value}`
})

function handleClick(index) {
  if (varFiltersCg.value[index] || winner.value) return

  varFiltersCg.value[index] = currentPlayer.value

  if (checkWinner()) {
    winner.value = currentPlayer.value
  } else {
    currentPlayer.value = currentPlayer.value === "X" ? "O" : "X"
  }
}

function checkWinner() {
  const b = varFiltersCg.value
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  return lines.some(([a, b1, c]) => b[a] && b[a] === b[b1] && b[a] === b[c])
}

function resetGame() {
  varFiltersCg.value = Array(9).fill("")
  currentPlayer.value = "X"
  winner.value = null
}
</script>

<style scoped>
#app {
  max-width: 100%;
  margin: 40px auto;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  padding: 0 15px;
}

.status {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
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
