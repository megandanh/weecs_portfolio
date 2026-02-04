const typedEl = document.getElementById("typed");
if (typedEl) {
  const lines = [
    // Put in the text you want to loop through
    "hi, i'm (your name)",
    "Full-stack • ML • UI/UX",
    "Let’s make something meaningful."
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const TYPE_SPEED = 50;
  const DELETE_SPEED = 25;
  const HOLD_TIME = 900;

  function typeLoop() {
    const currentLine = lines[lineIndex];

    if (!deleting) {
      typedEl.textContent = currentLine.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentLine.length) {
        deleting = true;
        return setTimeout(typeLoop, HOLD_TIME);
      }
      setTimeout(typeLoop, TYPE_SPEED);
    } else {
      typedEl.textContent = currentLine.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
      }
      setTimeout(typeLoop, DELETE_SPEED);
    }
  }

  typeLoop();
}
