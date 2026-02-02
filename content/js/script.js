const words = [
  "Hello",
  "JavaScript",
  "Webdev",
  "Fun",
  "Internet",
  "Coding",
  "Programming",
  "Random",
];
const MIN_SIZE = 12;
const MAX_SIZE = 96;
const INTERVAL_MS = 1000;

const container = document.createElement("div");
container.style.position = "fixed";
container.style.inset = "0";
container.style.pointerEvents = "none";
container.style.zIndex = "999999";

document.body.appendChild(container);

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addRandomWord() {
  const word = words[randInt(0, words.length - 1)];
  const fontSize = randInt(MIN_SIZE, MAX_SIZE);

  const el = document.createElement("span");
  el.textContent = word;
  el.style.position = "absolute";
  el.style.fontSize = fontSize + "px";
  el.style.fontFamily =
    "system-ui,-apple-system, Segoe UI, Roboto, Arial, sans-serif";
  el.style.fontWeight = "700";
  el.style.opacity = "0.9";
  el.style.whiteSpace = "noWrap";

  container.appendChild(el);

  const rect = el.getBoundingClientRect();
  const maxX = Math.max(0, window.innerWidth - rect.width);
  const maxY = Math.max(0, window.innerHeight - rect.height);

  el.style.left = randInt(0, Math.floor(maxX)) + "px";
  el.style.top = randInt(0, Math.floor(maxY)) + "px";
}

const timerId = setInterval(addRandomWord, INTERVAL_MS);
