# AQA A-Level Philosophy Flashcards

Mobile-friendly flashcard app for revising **Metaphysics of God** and **Moral Philosophy** (AQA Specification 7172, Paper 2 — meta-ethics excluded).

**65 cards** across 9 decks:

- God: Concept (divine attributes, Euthyphro, paradox of the stone)
- Ontological arguments (Anselm, Descartes, Malcolm)
- Design arguments (Paley, fine-tuning, Hume's critique)
- Cosmological arguments (Aquinas, Kalam, Leibniz)
- Problem of evil (Mackie, Rowe, Hick, Plantinga)
- Utilitarianism (Bentham, Mill, Singer)
- Kantian ethics (Categorical Imperative)
- Virtue ethics (Aristotle, Hursthouse)
- Applied ethics (stealing, simulated killing, eating animals, lying)

## How to use

- **Tap the card** (or hit Space/Enter, or the Flip button) to reveal the answer
- **Swipe left/right** on mobile, or use **Prev/Next** buttons or arrow keys
- Tap a **topic chip** at the top to filter to one deck
- Tap **Shuffle** (on the back of any card, or press S) to randomise the deck

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `philosophy-flashcards`)
2. Upload `index.html`, `cards.js`, `app.js`, and `README.md`
3. Go to **Settings → Pages**
4. Under "Branch", select `main` (or `master`) and `/ (root)`, then click Save
5. Wait a minute, then visit `https://<your-username>.github.io/philosophy-flashcards/`

Share that URL with your kid — they can add it to their home screen for instant access.

## Adding your own cards

Open `cards.js`. Each card is an object with `q` (question) and `a` (answer, HTML allowed):

```js
{
  q: "Your question?",
  a: "<p>Your answer. <strong>Bold</strong>, <em>italics</em>, and <ul><li>lists</li></ul> all work.</p>"
}
```

Add it to any existing deck or create a new one following the same pattern.

## Files

- `index.html` — markup and styling
- `cards.js` — all flashcard content (edit this to change cards)
- `app.js` — interaction logic (flip, swipe, shuffle, navigation)
