# OCR Religious Studies Flashcards

Mobile-friendly flashcard app for revising **OCR A-Level Religious Studies (H573)**, Year 1 content across all three components.

**124 cards** across **22 decks**, grouped by exam component.

## Philosophy of Religion (H573/01)

41 cards across 8 topics:

- **Plato** — Theory of Forms, Analogy of the Cave, criticisms
- **Aristotle** — Four Causes, Prime Mover, contrast with Plato
- **Soul, Mind & Body** — Plato, Aristotle, Descartes, materialism
- **Teleological arguments** — Aquinas's Fifth Way, Paley, Tennant, Hume, Darwin
- **Cosmological arguments** — Aquinas's Three Ways, Hume, Russell vs Copleston
- **Ontological arguments** — Anselm (Proslogion 2 and 3), Gaunilo, Descartes, Kant, Malcolm
- **Religious Experience** — James, Otto, Swinburne, naturalistic critiques
- **Problem of Evil** — logical/evidential, Augustinian, Irenaean / Hick

## Religion and Ethics (H573/02)

45 cards across 6 topics:

- **Natural Law** — Aquinas, Four Tiers, Primary/Secondary Precepts, Double Effect
- **Situation Ethics** — Fletcher, agape, Four Working / Six Fundamental Principles
- **Kantian Ethics** — Good Will, three formulations of the Categorical Imperative, postulates
- **Utilitarianism** — Bentham, Mill, Singer, act vs rule
- **Euthanasia** — sanctity vs quality of life, the four theories applied
- **Business Ethics** — Friedman, stakeholders, whistleblowing, globalisation

## Developments in Religious Thought — Buddhism (H573/03)

38 cards across 8 topics:

- **Buddha & Sources** — Siddhartha's life, Three Refuges, Theravada vs Mahayana, Pali Canon and Mahayana sutras
- **Four Noble Truths** — Dukkha, Samudaya, Nirodha, Magga (Eightfold Path)
- **Three Marks of Existence** — Anicca, Dukkha, Anatta
- **Dependent Origination** — Twelve Nidanas, Nagarjuna, emptiness (sunyata)
- **Karma & Rebirth** — intention, three poisons, rebirth without a self
- **Nirvana** — with/without remainder, arhat vs bodhisattva
- **Meditation** — samatha, vipassana, anapanasati, brahmaviharas, Mahayana traditions
- **Sangha & Ethics** — Five Precepts, monasticism, women in the Sangha, engaged Buddhism

## How to use

- **Tap the card** (or hit Space/Enter, or the Flip button) to reveal the answer
- **Swipe left/right** on mobile, or use **Prev/Next** buttons or arrow keys
- Tap a **topic chip** at the top to filter to one deck
- Tap **Shuffle** (on the back of any card, or press S) to randomise the deck

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `religious-studies-flashcards`)
2. Upload `index.html`, `cards.js`, `app.js`, and `README.md` directly to the repo root (not inside a subfolder)
3. Go to **Settings → Pages**
4. Under "Build and deployment", set:
   - Source: **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)`
5. Click Save and wait a minute
6. Visit `https://<your-username>.github.io/religious-studies-flashcards/`

To add the site to a phone's home screen so it behaves like an app: in iOS Safari, tap the share icon → "Add to Home Screen". In Android Chrome, tap the three-dot menu → "Add to Home screen".

## Adding or editing cards

Open `cards.js`. Each card is an object with `q` (question) and `a` (answer, HTML allowed):

```js
{
  q: "Your question?",
  a: "<p>Your answer. <strong>Bold</strong>, <em>italics</em>, and <ul><li>lists</li></ul> all work.</p>"
}
```

Add it to any existing deck (e.g. `decks.natural_law.cards`) or create a new one following the same pattern. The `all` deck rebuilds automatically.

## Spec scope and known limitations

Built for **OCR H573 Year 1 content only**. Year 2 topics (nature/attributes of God, religious language, meta-ethics, conscience, sexual ethics, gender/secularism, pluralism) are not included.

The Buddhism deck names scholars and texts on the OCR spec (Nagarjuna, Buddhaghosa, Thich Nhat Hanh, Lotus Sutra, Heart Sutra, Pali Canon). If a teacher focused on different scholars, those cards become skippable rather than wrong.

Religious Experience and Problem of Evil sit in Philosophy of Religion. Some schools cover them in Year 1, others save them for Year 2 — skip those two decks if not yet covered.

This isn't a substitute for the OCR specification document or class notes; it's a drilling tool for content already learned.

## Files

- `index.html` — markup and styling (no build step, no dependencies)
- `cards.js` — all flashcard content (edit this to change cards)
- `app.js` — interaction logic (flip, swipe, shuffle, navigation, progress)
- `README.md` — this file

## Credits

Built as a revision aid. Content drawn from the OCR Religious Studies specification (H573) and standard A-Level textbooks. Corrections and additions welcome via pull request.
