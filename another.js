document.getElementById("spinButton").addEventListener("click", function() {
  const form = document.getElementById("playerForm");
  const formData = new FormData(form);
  const playerName = formData.get("name");
  const playerPosition = formData.get("position");

  if (!playerName || !playerPosition) {
    alert("Please enter your name and select your position.");
    return;
  }

  const players = Array.from(formData.entries());
  const shuffledPlayers = players.sort(() => Math.random() - 0.5);
  currentPlayer = shuffledPlayers[0];

  const currentPlayerPara = document.getElementById("currentPlayer");
  currentPlayerPara.textContent = `Current Player: ${currentPlayer[1]}`;

  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("hidden");

  const optionsDiv = document.getElementById("options");
  optionsDiv.classList.remove("hidden");

  const questionArea = document.getElementById("questionArea");
  questionArea.classList.add("hidden");

  const answerArea = document.getElementById("answerArea");
  answerArea.classList.add("hidden");

  const questionInput = document.getElementById("questionInput");
  questionInput.value = "";

  const answerInput = document.getElementById("answerInput");
  answerInput.value = "";

  // Trigger bottle spin animation after 5 seconds
  setTimeout(function() {
    document.getElementById("bottle").classList.add("spin");
  }, 5000);
});