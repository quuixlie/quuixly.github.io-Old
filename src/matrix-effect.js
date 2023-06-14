const textElement = document.getElementsByClassName("decorative-text")[1];
const originalText = textElement.innerHTML;

function scrambleText() {
  let scrambledText = '';

  for (let i = 0; i < originalText.length; i++) {
    if (Math.random() < 0.5) {
      scrambledText += String.fromCharCode(Math.random());
    } else {
      scrambledText += originalText[i] + " ";
    }
  }

  scrambledText = scrambledText.substring(0, originalText.length);

  textElement.innerHTML = scrambledText;
}

setInterval(scrambleText, 100);