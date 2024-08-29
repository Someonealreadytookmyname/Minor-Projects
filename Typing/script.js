let startTime;
let totalTypedChars = 0;
let totalCorrectChars = 0;

function checkTyping() {
  if (!startTime) {
    startTime = new Date();
  }

  const originalText = document.getElementById('original-text').innerText;
  const typedText = document.getElementById('typed-text').value;

  let i;
  for (i = 0; i < typedText.length; i++) {
    if (typedText[i] !== originalText[i]) {
      break;
    }
  }

  totalTypedChars = typedText.length;
  totalCorrectChars = i;

  updateResults();
}

function updateResults() {
  const elapsedTime = (new Date() - startTime) / 1000 || 0;
  const speed = Math.round((totalCorrectChars / 5) / (elapsedTime / 60)) || 0; // Assuming average word length of 5 characters

  document.getElementById('time-elapsed').innerText = elapsedTime.toFixed(2) + 's';
  document.getElementById('speed').innerText = speed + ' WPM';
}
