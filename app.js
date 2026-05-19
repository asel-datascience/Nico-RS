// ============================================
// AQA Philosophy Flashcards · App Logic
// ============================================

let currentTopic = 'all';
let currentIndex = 0;
let order = [];

const cardEl = document.getElementById('card');
const flipBtn = document.getElementById('flipBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');

function getDeck() { return decks[currentTopic]; }
function getCard() {
  const deck = getDeck();
  return deck.cards[order[currentIndex]];
}

// ---------- Topic bar ----------
function renderTopics() {
  const bar = document.getElementById('topicBar');
  bar.innerHTML = '';
  for (const [key, deck] of Object.entries(decks)) {
    const btn = document.createElement('button');
    btn.className = 'topic' + (key === currentTopic ? ' active' : '');
    btn.textContent = deck.name + ' · ' + deck.cards.length;
    btn.addEventListener('click', () => switchTopic(key));
    bar.appendChild(btn);
  }
}

function switchTopic(key) {
  currentTopic = key;
  currentIndex = 0;
  resetOrder();
  renderTopics();
  renderCard(true);
}

function resetOrder() {
  order = getDeck().cards.map((_, i) => i);
}

// ---------- Card rendering ----------
function renderCard(animate = false) {
  const card = getCard();
  const deck = getDeck();
  if (!card) return;

  const topicLabel = card._topic ? card._topic.toUpperCase() : deck.name.toUpperCase();
  document.getElementById('frontTag').textContent = topicLabel;
  document.getElementById('backTag').textContent = topicLabel + ' · answer';
  document.getElementById('question').innerHTML = card.q;
  document.getElementById('answer').innerHTML = card.a;
  document.getElementById('cardCounter').textContent = (currentIndex + 1) + ' / ' + deck.cards.length;

  // Always reset to front face when navigating
  cardEl.classList.remove('flipped');

  if (animate) {
    cardEl.classList.remove('enter');
    void cardEl.offsetWidth;
    cardEl.classList.add('enter');
  }

  const pct = Math.round(((currentIndex + 1) / deck.cards.length) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent = pct + '%';
}

// ---------- Actions ----------
function flipCard() {
  cardEl.classList.toggle('flipped');
}

function nextCard() {
  const deck = getDeck();
  if (currentIndex >= deck.cards.length - 1) {
    bounce(-10);
    return;
  }
  cardEl.classList.add('swipe-left');
  setTimeout(() => {
    cardEl.classList.remove('swipe-left', 'flipped');
    currentIndex++;
    renderCard(true);
  }, 280);
}

function prevCard() {
  if (currentIndex <= 0) {
    bounce(10);
    return;
  }
  cardEl.classList.add('swipe-right');
  setTimeout(() => {
    cardEl.classList.remove('swipe-right', 'flipped');
    currentIndex--;
    renderCard(true);
  }, 280);
}

function bounce(dx) {
  cardEl.animate(
    [{ transform: 'translateX(0)' }, { transform: `translateX(${dx}px)` }, { transform: 'translateX(0)' }],
    { duration: 200 }
  );
}

function shuffle() {
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  currentIndex = 0;
  renderCard(true);
}

// ---------- Button listeners ----------
flipBtn.addEventListener('click', flipCard);
prevBtn.addEventListener('click', prevCard);
nextBtn.addEventListener('click', nextCard);
shuffleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  shuffle();
});

// ---------- Card gesture handling (clean rewrite) ----------
// We track touch/pointer position. If movement is small → it's a TAP (flip).
// If movement is a large horizontal sweep → it's a SWIPE (navigate).
// Vertical scrolling inside the answer is preserved.

let pointerStart = null;
let pointerMoved = false;
let isScrollingAnswer = false;

const TAP_THRESHOLD = 10;      // px — below this counts as a tap
const SWIPE_THRESHOLD = 60;    // px — horizontal distance to trigger swipe
const SWIPE_RATIO = 1.3;       // horizontal must dominate vertical by this factor

function onPointerDown(e) {
  // Only respond to primary pointer / single touch
  if (e.touches && e.touches.length > 1) return;
  const point = e.touches ? e.touches[0] : e;

  pointerStart = { x: point.clientX, y: point.clientY, time: Date.now() };
  pointerMoved = false;

  // If user is touching the answer area, don't hijack scrolling
  const answerEl = document.getElementById('answer');
  isScrollingAnswer = answerEl.contains(e.target);
}

function onPointerMove(e) {
  if (!pointerStart) return;
  const point = e.touches ? e.touches[0] : e;
  const dx = point.clientX - pointerStart.x;
  const dy = point.clientY - pointerStart.y;
  if (Math.abs(dx) > TAP_THRESHOLD || Math.abs(dy) > TAP_THRESHOLD) {
    pointerMoved = true;
  }
}

function onPointerUp(e) {
  if (!pointerStart) return;
  const point = e.changedTouches ? e.changedTouches[0] : e;
  const dx = point.clientX - pointerStart.x;
  const dy = point.clientY - pointerStart.y;
  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);

  // Decision tree:
  // 1. Small movement → TAP → flip
  // 2. Dominant horizontal movement above threshold → SWIPE → navigate
  // 3. Otherwise → ignore (was probably a vertical scroll on the answer)

  if (!pointerMoved) {
    // Pure tap — flip the card
    flipCard();
  } else if (absDx > SWIPE_THRESHOLD && absDx > absDy * SWIPE_RATIO && !isScrollingAnswer) {
    if (dx < 0) nextCard();
    else prevCard();
  }
  // else: scroll or ambiguous — do nothing

  pointerStart = null;
  pointerMoved = false;
  isScrollingAnswer = false;
}

// Use touch events on touch devices, mouse events otherwise.
// We attach both — the browser will fire whichever applies.
cardEl.addEventListener('touchstart', onPointerDown, { passive: true });
cardEl.addEventListener('touchmove', onPointerMove, { passive: true });
cardEl.addEventListener('touchend', onPointerUp);
cardEl.addEventListener('touchcancel', () => { pointerStart = null; pointerMoved = false; });

// For mouse: only flip on click, no swipe needed (desktop has buttons + keyboard)
cardEl.addEventListener('click', (e) => {
  // Ignore if the click was on the shuffle button or a child of it
  if (e.target.closest('#shuffleBtn')) return;
  // On touch devices, touchend already handled it — detect by checking
  // if this click was synthesised after a touch. The simplest safeguard:
  // only run this handler when there was no recent touch interaction.
  if (lastTouchTime && Date.now() - lastTouchTime < 500) return;
  flipCard();
});

let lastTouchTime = 0;
cardEl.addEventListener('touchend', () => { lastTouchTime = Date.now(); });

// ---------- Keyboard shortcuts (desktop) ----------
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevCard();
  else if (e.key === 'ArrowRight') nextCard();
  else if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    flipCard();
  } else if (e.key.toLowerCase() === 's') {
    shuffle();
  }
});

// ---------- Init ----------
resetOrder();
renderTopics();
renderCard();
