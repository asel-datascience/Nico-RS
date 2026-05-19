// ============================================
// OCR A-Level Religious Studies (H573) — Year 1
// Components: Philosophy of Religion · Religion and Ethics · Developments (Buddhism)
// ============================================
const decks = {
  all: { name: "All Cards", cards: [] },

  // ===== PHILOSOPHY OF RELIGION =====
  plato: {
    name: "Plato",
    cards: [
      {
        q: "What is Plato's Theory of Forms?",
        a: "<p>Reality has two levels:</p><ul><li>The <strong>World of Forms</strong> — eternal, unchanging, perfect, accessed by reason. Contains Forms like Beauty, Justice, the Good</li><li>The <strong>World of Appearances</strong> — material, changing, imperfect, accessed by senses. Objects here are imperfect <em>copies</em> of the Forms</li></ul><p>The <strong>Form of the Good</strong> is the highest Form — it illuminates all other Forms (like the sun illuminates the visible world).</p>"
      },
      {
        q: "Explain Plato's Analogy of the Cave.",
        a: "<p>Prisoners chained in a cave see only shadows of objects cast on a wall — they take these for reality.</p><ul><li>One prisoner escapes, sees the objects, then the sun (= the Form of the Good)</li><li>He returns to free the others, but they don't believe him and want to kill him</li></ul><p><strong>Meaning:</strong> most people live in ignorance, mistaking appearances for reality. The philosopher's task is to escape, grasp the Forms, and return to enlighten others — even at personal cost (Socrates).</p>"
      },
      {
        q: "How does Plato argue for the Forms? (Two arguments)",
        a: "<p><strong>1. Argument from concepts:</strong> we recognise that two sticks are 'equal' but never perfectly so. We must have prior knowledge of perfect Equality — which exists only as a Form.</p><p><strong>2. Argument from the existence of universals:</strong> many beautiful things share 'beauty'. This universal must exist independently — as the Form of Beauty.</p><p>Plato also uses the doctrine of <em>anamnesis</em> (recollection) — learning is remembering knowledge of the Forms from before birth.</p>"
      },
      {
        q: "Key criticisms of Plato's Theory of Forms.",
        a: "<ul><li><strong>Aristotle's Third Man argument:</strong> if particulars relate to a Form by resemblance, we need another Form to explain the resemblance — infinite regress</li><li><strong>Empiricist objection:</strong> no evidence Forms exist; we can explain universals through experience alone</li><li><strong>Forms of trivial things?</strong> Is there a Form of mud, hair, dirt? Plato struggled to answer</li><li><strong>Two-worlds problem:</strong> if Forms are separate, how do they connect to material things?</li></ul>"
      }
    ]
  },

  aristotle: {
    name: "Aristotle",
    cards: [
      {
        q: "Aristotle's Four Causes — name and explain each.",
        a: "<ul><li><strong>Material cause</strong> — what something is made of (bronze of a statue)</li><li><strong>Formal cause</strong> — its shape or structure (the form of Hermes)</li><li><strong>Efficient cause</strong> — what brought it about (the sculptor)</li><li><strong>Final cause</strong> (<em>telos</em>) — its purpose or end (to honour Hermes)</li></ul><p>For Aristotle, <strong>final cause is most important</strong> — everything has a purpose toward which it strives.</p>"
      },
      {
        q: "What is the Prime Mover?",
        a: "<p>Aristotle argues all motion and change require a cause. To avoid infinite regress, there must be a <strong>Prime Mover</strong>:</p><ul><li><strong>Unmoved</strong> — itself does not change</li><li><strong>Eternal and necessary</strong></li><li><strong>Pure actuality</strong> — no potential (since potential requires change)</li><li><strong>Final cause of the universe</strong> — moves things by being the object of their desire/love, not by physical push</li></ul><p>'<em>It moves as the object of love moves the lover.</em>'</p>"
      },
      {
        q: "How do Plato and Aristotle differ on knowledge?",
        a: "<p><strong>Plato (rationalist):</strong> true knowledge comes from reason, grasping the eternal Forms. The senses deceive. Knowledge is innate, recovered through recollection.</p><p><strong>Aristotle (empiricist):</strong> knowledge begins with sense experience of the material world. We abstract universals from particulars. Forms exist <em>in</em> things, not separately.</p><p>Aristotle was Plato's student but rejected the separation of Forms from the world.</p>"
      },
      {
        q: "Criticisms of Aristotle's Four Causes and Prime Mover.",
        a: "<ul><li><strong>Final cause challenged by science:</strong> evolution explains apparent purpose without intrinsic <em>telos</em></li><li><strong>Why only one Prime Mover?</strong> Aristotle doesn't justify this clearly</li><li><strong>The Prime Mover doesn't act:</strong> it just exists — it's not the personal God of theism</li><li><strong>Russell:</strong> the universe may just be a brute fact — no need for a first cause</li></ul>"
      }
    ]
  },

  soul_mind_body: {
    name: "Soul, Mind & Body",
    cards: [
      {
        q: "Plato's view of the soul.",
        a: "<p>The soul is <strong>immortal, immaterial, and pre-existent</strong>. It belongs to the World of Forms and is temporarily 'imprisoned' in the body.</p><p>Plato's <strong>tripartite soul</strong> (from <em>Republic</em>):</p><ul><li><strong>Reason</strong> — seeks truth, should rule (head)</li><li><strong>Spirit</strong> — courage, ambition (chest)</li><li><strong>Appetite</strong> — desires, pleasure (stomach)</li></ul><p>Justice in the soul = reason ruling spirit and appetite. <em>Phaedo</em> arguments for immortality include cyclical, recollection, and affinity arguments.</p>"
      },
      {
        q: "Aristotle's view of the soul.",
        a: "<p>The soul is the <strong>form of the body</strong> — not a separate substance.</p><p>Soul and body are inseparable like 'the impression in wax'. When the body dies, the soul ceases.</p><p>Three types of soul:</p><ul><li><strong>Vegetative</strong> (plants) — nutrition, growth</li><li><strong>Sensitive</strong> (animals) — perception, movement</li><li><strong>Rational</strong> (humans) — reason</li></ul><p>This is an early form of <strong>monism</strong> — though Aristotle leaves open whether <em>nous</em> (intellect) might survive.</p>"
      },
      {
        q: "Descartes' substance dualism.",
        a: "<p>Mind and body are <strong>two distinct substances</strong>:</p><ul><li><strong>Mind</strong> — <em>res cogitans</em>, thinking, unextended, indivisible</li><li><strong>Body</strong> — <em>res extensa</em>, extended in space, divisible</li></ul><p><strong>Argument from doubt:</strong> I can doubt I have a body but not that I think (<em>cogito ergo sum</em>) — so mind and body must be different.</p><p><strong>Argument from divisibility:</strong> body can be divided; mind cannot — so they're different substances.</p>"
      },
      {
        q: "Main criticisms of substance dualism.",
        a: "<ul><li><strong>Interaction problem (Princess Elisabeth):</strong> how can an immaterial mind cause changes in a physical body? Descartes' answer (pineal gland) is unconvincing</li><li><strong>Ryle's 'category mistake':</strong> talking of mind as a separate thing is like asking to see 'the university' after visiting all the colleges. Mind = patterns of behaviour, not a 'ghost in the machine'</li><li><strong>Neuroscience:</strong> mental states correlate tightly with brain states — suggests they are brain states</li></ul>"
      },
      {
        q: "Materialism vs Dualism on personal identity.",
        a: "<p><strong>Materialist (Dawkins, Ryle):</strong> the mind <em>is</em> the brain (or its functions). No soul survives death. Personal identity = bodily/psychological continuity.</p><p><strong>Dualist (Plato, Descartes):</strong> the soul/mind is separate and can survive bodily death. Personal identity is grounded in the soul.</p><p><strong>For Christianity:</strong> resurrection of the body (1 Corinthians 15) differs from Greek soul-immortality — but many Christians blend the two.</p>"
      }
    ]
  },

  teleological_ocr: {
    name: "Teleological",
    cards: [
      {
        q: "Outline Aquinas's Fifth Way (design qua regularity).",
        a: "<p>From the <em>Summa Theologica</em>:</p><ul><li>Natural bodies (without intelligence) act toward an end</li><li>This regular, goal-directed behaviour is not accidental</li><li>Things without intelligence cannot direct themselves to ends — like an arrow needs an archer</li><li>∴ there must be an intelligent being directing all natural things — God</li></ul><p>Design <em>qua regularity</em> — the universe's order and lawlike behaviour points to a designer.</p>"
      },
      {
        q: "Outline Paley's watchmaker argument (design qua purpose).",
        a: "<p>From <em>Natural Theology</em> (1802):</p><ul><li>If you found a watch on a heath, its intricate <strong>adjustment of parts to a function</strong> would force the conclusion it had a designer</li><li>This is true even if you'd never seen one before, even if it didn't always work</li><li>Living organisms (e.g. the eye) display <em>greater</em> functional complexity than any watch</li><li>∴ they have a designer — God</li></ul>"
      },
      {
        q: "Hume's criticisms of the design argument.",
        a: "<p>From <em>Dialogues Concerning Natural Religion</em>, voiced through Philo:</p><ul><li><strong>Weak analogy:</strong> the universe is more like a vegetable or animal than a machine — analogy fails</li><li><strong>Limited conclusion:</strong> at most a finite, fallible designer — could be plural, evil, an apprentice, dead</li><li><strong>Epicurean hypothesis:</strong> given infinite time, random atoms could produce apparent order without design</li><li><strong>No comparison class:</strong> we've only seen one universe — can't judge if 'well-designed'</li></ul>"
      },
      {
        q: "How does Darwinian evolution challenge the design argument?",
        a: "<p>Natural selection explains apparent biological design <strong>without invoking a designer</strong>. Adaptations are filtered by differential survival, not chosen.</p><p>Dawkins: 'The Blind Watchmaker' — natural selection is the watchmaker, and it has no foresight or purpose.</p><p><strong>Theist response:</strong> shift to <strong>cosmic fine-tuning</strong> — evolution presupposes life-permitting laws, which themselves cry out for explanation (Swinburne, Tennant).</p>"
      },
      {
        q: "What is the anthropic principle (Tennant)?",
        a: "<p>F.R. Tennant distinguishes:</p><ul><li><strong>Weak anthropic principle:</strong> the universe must permit observers, since we observe it</li><li><strong>Strong anthropic principle:</strong> the universe is fine-tuned for life — this is improbable on chance, points to design</li></ul><p>Tennant adds the <strong>aesthetic argument:</strong> the universe contains beauty unnecessary for survival — design is the best explanation.</p>"
      }
    ]
  },

  cosmological_ocr: {
    name: "Cosmological",
    cards: [
      {
        q: "Outline Aquinas's First Three Ways.",
        a: "<p>From the <em>Summa Theologica</em>:</p><ul><li><strong>First Way (Motion):</strong> things in motion are moved by another; no infinite regress; ∴ an unmoved mover exists — God</li><li><strong>Second Way (Causation):</strong> every effect has a cause; no infinite regress of causes; ∴ a first uncaused cause exists — God</li><li><strong>Third Way (Contingency):</strong> contingent things might not exist; if all were contingent, at some point nothing would have existed; nothing comes from nothing; ∴ a necessary being exists — God</li></ul>"
      },
      {
        q: "How does Aquinas use Aristotle in the cosmological argument?",
        a: "<p>Aquinas adopts Aristotle's framework:</p><ul><li><strong>Potentiality and actuality:</strong> motion is the actualisation of potential — something else must actualise it</li><li><strong>Prime Mover:</strong> Aquinas's unmoved mover echoes Aristotle's, but Aquinas identifies it with the personal God of Christianity</li><li><strong>Efficient causation:</strong> from Aristotle's four causes</li></ul><p>Aquinas Christianises Aristotle — turning a philosophical first principle into a worshipable creator.</p>"
      },
      {
        q: "Hume's challenge to the causal principle.",
        a: "<p>Causation is observed only through <strong>constant conjunction</strong> in experience — we cannot establish a priori that 'everything must have a cause'.</p><p>We have <strong>no experience of universes coming into being</strong>, so cannot confidently apply causal reasoning to the universe as a whole.</p><p><strong>Hume's bolder claim:</strong> the universe could be its own cause, or simply <em>be</em> — a brute fact.</p>"
      },
      {
        q: "Russell vs Copleston (1948 BBC debate).",
        a: "<p>The classic clash on the cosmological argument:</p><p><strong>Copleston:</strong> argues from Leibniz — the universe is contingent and demands a sufficient reason outside itself.</p><p><strong>Russell:</strong> '<em>I should say that the universe is just there, and that's all.</em>' Rejects the demand for sufficient reason — committing the <strong>fallacy of composition</strong> (what's true of parts isn't always true of the whole).</p><p><strong>Russell's analogy:</strong> every human has a mother, but the human race doesn't have a mother.</p>"
      },
      {
        q: "Why doesn't the cosmological argument deliver the God of theism?",
        a: "<p>Even if successful, it gives only a <strong>first cause</strong> or <strong>necessary being</strong> — not necessarily one that is:</p><ul><li>Omnibenevolent</li><li>Personal</li><li>Continuing to be involved with creation</li><li>Worthy of worship</li></ul><p><strong>Aquinas's reply:</strong> the cosmological argument is one part of a cumulative case — combined with revelation and other arguments, it points to the Christian God.</p>"
      }
    ]
  },

  ontological_ocr: {
    name: "Ontological",
    cards: [
      {
        q: "Outline Anselm's first ontological argument (Proslogion 2).",
        a: "<p><strong>God = 'that than which nothing greater can be conceived' (TTWNGCBC).</strong></p><ul><li>Even the fool understands this concept (so it exists in the understanding)</li><li>It is greater to exist in reality than in the understanding alone</li><li>If God existed only in the mind, we could conceive of something greater (one that also exists in reality)</li><li>That contradicts the definition</li><li>∴ God must exist in reality</li></ul><p>An <em>a priori</em> argument — from concept alone.</p>"
      },
      {
        q: "Outline Anselm's second ontological argument (Proslogion 3).",
        a: "<p>A being whose non-existence is impossible is greater than one whose non-existence is possible.</p><ul><li>God = TTWNGCBC</li><li>If God's non-existence were possible, He wouldn't be the greatest conceivable being</li><li>∴ God's existence must be <strong>necessary</strong> — He cannot fail to exist</li></ul><p>This version focuses on <em>necessary existence</em> as a perfection — anticipating Malcolm's modal version.</p>"
      },
      {
        q: "Gaunilo's 'Perfect Island' objection.",
        a: "<p>By Anselm's logic we could 'define into existence' a perfect island: the greatest conceivable island must exist, because existing is greater than not existing. Absurd.</p><p><strong>Anselm's reply:</strong> only God, as TTWNGCBC, has a maximum. Islands have no intrinsic upper limit — you can always imagine more palm trees. So the parody fails for islands but the argument still works for God.</p>"
      },
      {
        q: "Descartes' ontological argument.",
        a: "<p>From <em>Meditation V</em>:</p><ul><li>I have a clear and distinct idea of God as a supremely perfect being</li><li>Existence is a perfection</li><li>A supremely perfect being lacking existence would be self-contradictory — like a triangle without three sides, or a mountain without a valley</li><li>∴ God exists</li></ul><p>Existence is treated as a property bundled into the concept of perfection.</p>"
      },
      {
        q: "Kant's 'existence is not a predicate'.",
        a: "<p>Saying 'X exists' does not <em>add</em> anything to the concept of X — it merely says the concept is instantiated.</p><p>So existence cannot be a perfection that gets bundled into the definition of God. The ontological argument illegitimately treats existence as a property like 'being omnipotent'.</p><p><strong>Kant's example:</strong> 100 real thalers contain no more <em>concept</em> than 100 possible thalers — existence adds nothing to the idea.</p><p>Widely regarded as the most damaging objection to classical ontological arguments.</p>"
      },
      {
        q: "Malcolm's modal ontological argument.",
        a: "<ul><li>God's existence is either <strong>necessary</strong> or <strong>impossible</strong> — He cannot be a merely contingent being</li><li>The concept of God is not self-contradictory, so His existence is not impossible</li><li>∴ His existence is necessary — God exists</li></ul><p>Avoids Kant's objection by treating <em>necessary</em> existence (not existence itself) as a property. Revives the argument in 20th century philosophy.</p>"
      }
    ]
  },

  religious_experience: {
    name: "Religious Experience",
    cards: [
      {
        q: "William James — four marks of mystical experience.",
        a: "<p>From <em>The Varieties of Religious Experience</em> (1902):</p><ul><li><strong>Ineffable</strong> — defies expression in ordinary language</li><li><strong>Noetic</strong> — gives insight into truths not known by reason</li><li><strong>Transient</strong> — brief, though after-effects last</li><li><strong>Passive</strong> — the recipient feels grasped by a power beyond them</li></ul><p>James thinks these experiences are <strong>real psychological events</strong> with transformative effects — strong pragmatic evidence for their value, if not metaphysical proof of God.</p>"
      },
      {
        q: "Types of religious experience.",
        a: "<ul><li><strong>Mystical</strong> — direct union with the divine (Teresa of Avila)</li><li><strong>Numinous</strong> — sense of awe before the 'wholly other' (Otto: <em>mysterium tremendum et fascinans</em>)</li><li><strong>Conversion</strong> — sudden transformation (Paul on Damascus road)</li><li><strong>Corporate</strong> — shared by many (Toronto Blessing, charismatic revivals)</li><li><strong>Visions, voices, prayers answered</strong></li></ul>"
      },
      {
        q: "Swinburne's Principles of Credulity and Testimony.",
        a: "<p><strong>Principle of Credulity:</strong> if it seems to S that X is present, then probably X <em>is</em> present — unless there's defeating evidence.</p><p><strong>Principle of Testimony:</strong> in the absence of contrary evidence, others' reports should be believed.</p><p>Applied to religious experience: many such reports give some probability that God exists.</p><p>Swinburne lists <strong>special considerations</strong> that defeat credulity — e.g. the perceiver was unreliable, the conditions abnormal, the object couldn't have been there.</p>"
      },
      {
        q: "Rudolf Otto's numinous experience.",
        a: "<p>Religious experience at its core is the encounter with the <strong>'numinous'</strong> — the wholly other, beyond categories of thought.</p><p>Characterised by:</p><ul><li><strong>Mysterium</strong> — mystery, otherness</li><li><strong>Tremendum</strong> — overwhelming, terrifying power</li><li><strong>Fascinans</strong> — fascinating, attractive, drawing the person in</li></ul><p>This combination of fear and attraction is unique to religious experience and cannot be reduced to other categories.</p>"
      },
      {
        q: "Naturalistic / psychological criticisms.",
        a: "<ul><li><strong>Freud:</strong> religious experience is wish-fulfilment — projection of the father figure</li><li><strong>Marx:</strong> 'opium of the people' — religion comforts the oppressed and obscures real conditions</li><li><strong>Neuroscience:</strong> temporal lobe stimulation can produce 'religious' feelings (Persinger's God helmet)</li><li><strong>Drug-induced experiences:</strong> psilocybin produces effects indistinguishable from mystical experience (challenging their unique source)</li></ul><p><strong>Defender's reply:</strong> showing how an experience arises doesn't prove its object unreal — 'genetic fallacy'.</p>"
      },
      {
        q: "Hume's challenge to religious experience.",
        a: "<p>From <em>An Enquiry Concerning Human Understanding</em>, on miracles:</p><ul><li>Testimony for an extraordinary event is always weaker than the uniform experience supporting natural laws</li><li>Witnesses to religious experience are often credulous, emotionally invested, or culturally primed</li><li>Different religions report incompatible experiences — they cannot all be veridical</li></ul><p><strong>Swinburne's reply:</strong> this proves too much — it would block belief in any novel scientific discovery. Testimony in good conditions is reliable.</p>"
      }
    ]
  },

  evil_ocr: {
    name: "Problem of Evil",
    cards: [
      {
        q: "The 'inconsistent triad' (Mackie).",
        a: "<p>The following propositions are <strong>logically inconsistent</strong>:</p><ul><li>God is omnipotent</li><li>God is omnibenevolent</li><li>Evil exists</li></ul><p>Since (3) is undeniable, (1) and (2) cannot both be true — so the God of classical theism does not exist.</p><p>Mackie rejects 'quasi-logical' theist replies (e.g. 'good cannot exist without evil') as ad hoc.</p>"
      },
      {
        q: "Logical vs Evidential problem of evil.",
        a: "<p><strong>Logical (Mackie):</strong> God and evil are logically incompatible. Any evil at all disproves God.</p><p><strong>Evidential (Rowe, Hick):</strong> the <strong>quantity and distribution</strong> of evil makes God's existence highly improbable. Even if logically consistent, gratuitous suffering is hard to square with omnibenevolence.</p><p><strong>Rowe's fawn example:</strong> a fawn dying slowly in a forest fire serves no soul-making purpose — apparently pointless evil.</p>"
      },
      {
        q: "Augustinian theodicy — outline.",
        a: "<ul><li>Creation was originally <strong>perfect</strong></li><li>Evil is <strong>privatio boni</strong> — a privation of good, not a substance God created</li><li><strong>Moral evil</strong> entered through misuse of free will by angels (Lucifer) and humans (the Fall)</li><li><strong>Natural evil</strong> is a consequence of disordered creation after the Fall</li><li>Atonement through Christ enables redemption — humans deserve punishment but God's grace saves some</li></ul><p><strong>Aesthetic principle:</strong> evil contributes to the beauty of the whole, like shadow in a painting.</p>"
      },
      {
        q: "Criticisms of the Augustinian theodicy.",
        a: "<ul><li><strong>Scientific:</strong> evolution and geology contradict a literal Fall. Predation predates humans by hundreds of millions of years</li><li><strong>Logical (Schleiermacher):</strong> if creation was perfect, evil couldn't arise from it — perfection cannot produce imperfection</li><li><strong>Moral:</strong> God punishing all humans for Adam's sin (inherited guilt) seems unjust</li><li><strong>Hell:</strong> eternal damnation for finite sins seems disproportionate</li></ul>"
      },
      {
        q: "Irenaean / Hick's soul-making theodicy — outline.",
        a: "<p>From Irenaeus, developed by John Hick in <em>Evil and the God of Love</em>:</p><ul><li>Humans were created <strong>imperfect</strong> — as 'children' needing to grow</li><li>Made in God's <em>image</em>, must develop into God's <em>likeness</em></li><li>The world is a <strong>'vale of soul-making'</strong> — virtues develop through genuine challenge</li><li>God maintains an <strong>'epistemic distance'</strong> so faith is genuine</li><li><strong>Universal salvation</strong> — eventually all reach God; eternal goodness justifies temporary evil</li></ul>"
      },
      {
        q: "Criticisms of the Irenaean theodicy.",
        a: "<ul><li><strong>Excess of evil:</strong> the quantity and distribution far exceeds what's needed for soul-making — Holocaust, child suffering, dementia</li><li><strong>Animal suffering:</strong> animals have no souls to develop, yet suffer enormously</li><li><strong>Universal salvation problematic:</strong> conflicts with biblical teaching on judgement; if everyone is saved regardless, why bother being good?</li><li><strong>D.Z. Phillips:</strong> framing real suffering as 'soul-making' is morally offensive — it instrumentalises victims</li></ul>"
      }
    ]
  },

  // ===== RELIGION AND ETHICS =====
  natural_law: {
    name: "Natural Law",
    cards: [
      {
        q: "What is Natural Law and where does it come from?",
        a: "<p>A <strong>deontological, religious ethical theory</strong> developed by <strong>Aquinas</strong>, drawing on Aristotle.</p><p>Core idea: there is a <strong>rational, objective moral order</strong> built into creation by God. Humans, using reason, can discover this order and live according to their <em>telos</em> (purpose).</p><p>Acting in accordance with our God-given nature = good. Acting against it = evil.</p>"
      },
      {
        q: "Aquinas's Four Tiers of Law.",
        a: "<ul><li><strong>Eternal Law</strong> — God's mind, the principles by which He governs creation</li><li><strong>Divine Law</strong> — revealed law (the Bible, Ten Commandments)</li><li><strong>Natural Law</strong> — moral law discoverable by human reason, reflecting eternal law</li><li><strong>Human Law</strong> — particular laws made by humans (should reflect natural law)</li></ul><p>Natural Law sits between divine and human — accessible to all rational beings, religious or not.</p>"
      },
      {
        q: "The Five Primary Precepts.",
        a: "<p>Aquinas's <strong>five basic goods</strong> all humans naturally pursue. Remembered as <strong>POWER</strong>:</p><ul><li><strong>P</strong>reservation of life</li><li><strong>O</strong>rdered society</li><li><strong>W</strong>orship of God</li><li><strong>E</strong>ducation of children</li><li><strong>R</strong>eproduction</li></ul><p>From the synderesis principle: '<em>Do good and avoid evil.</em>' These are the goods toward which all human action should be directed.</p>"
      },
      {
        q: "Primary vs Secondary Precepts.",
        a: "<p><strong>Primary precepts</strong> are universal and unchanging (the five above).</p><p><strong>Secondary precepts</strong> are specific applications of primary precepts to situations:</p><ul><li>From 'preservation of life' → 'do not murder', 'do not commit suicide'</li><li>From 'reproduction' → 'no contraception', 'no homosexual acts' (traditional Catholic application)</li><li>From 'ordered society' → 'do not steal'</li></ul><p>Secondary precepts can be debated; primary precepts cannot.</p>"
      },
      {
        q: "Real and Apparent Goods + Interior vs Exterior Acts.",
        a: "<p><strong>Real good:</strong> something genuinely fulfilling our <em>telos</em> (e.g. honest work).</p><p><strong>Apparent good:</strong> something that <em>seems</em> good but isn't (e.g. theft — appears to bring benefit but corrupts the soul).</p><p><strong>Interior act</strong> = intention / motive.</p><p><strong>Exterior act</strong> = the action itself.</p><p>Both must be good for the act to be good. Giving to charity (good exterior) to gain status (bad interior) = bad act.</p>"
      },
      {
        q: "Doctrine of Double Effect.",
        a: "<p>An act with both good and bad effects is permissible if:</p><ul><li>The act itself is morally good or neutral</li><li>The bad effect is <strong>not intended</strong>, only foreseen</li><li>The good effect is not achieved <em>by means of</em> the bad effect</li><li>There's <strong>proportionate reason</strong> for permitting the bad effect</li></ul><p><strong>Classic case:</strong> giving morphine to a dying patient — pain relief (good, intended) is permissible even if it hastens death (bad, foreseen but not intended).</p>"
      },
      {
        q: "Strengths of Natural Law.",
        a: "<ul><li><strong>Universal:</strong> based on shared human nature — applies across cultures</li><li><strong>Objective:</strong> avoids relativism — provides fixed moral standards</li><li><strong>Combines reason and faith:</strong> accessible to non-believers via reason; deepened by revelation</li><li><strong>Flexibility through Double Effect:</strong> allows nuance in hard cases</li><li><strong>Promotes human flourishing</strong> through pursuit of genuine goods</li></ul>"
      },
      {
        q: "Criticisms of Natural Law.",
        a: "<ul><li><strong>Is/Ought problem (Hume):</strong> you can't derive moral 'oughts' from facts about nature</li><li><strong>Naturalistic fallacy (Moore):</strong> defining 'good' as 'natural' is fallacious</li><li><strong>Disputed human nature:</strong> evolution shows no fixed <em>telos</em></li><li><strong>Conservative applications:</strong> secondary precepts on sex and reproduction seem outdated</li><li><strong>Karl Barth:</strong> reason is corrupted by sin — we need revelation, not natural law</li><li><strong>Vardy:</strong> there are many ways to flourish; Aquinas's picture is too narrow</li></ul>"
      }
    ]
  },

  situation_ethics: {
    name: "Situation Ethics",
    cards: [
      {
        q: "What is Situation Ethics and who developed it?",
        a: "<p><strong>Joseph Fletcher</strong>, in <em>Situation Ethics</em> (1966). A <strong>Christian, teleological, relativist</strong> ethical theory.</p><p>Core idea: there is only <strong>one absolute moral law — agape love</strong> (selfless, Christian love). All other rules are guidelines that can be set aside if love demands it.</p><p>'<em>The end justifies the means — but only the end of love.</em>'</p>"
      },
      {
        q: "Fletcher's three approaches to ethics.",
        a: "<ul><li><strong>Legalism</strong> — rigid rules applied without exception. Fletcher rejects (e.g. orthodox Judaism, traditional Catholicism)</li><li><strong>Antinomianism</strong> — no rules at all, total spontaneity. Fletcher also rejects</li><li><strong>Situationism</strong> — Fletcher's view. Rules exist as guidelines, but each situation is judged by love</li></ul><p>Situation ethics is the 'middle way' between rigid rule-following and lawless freedom.</p>"
      },
      {
        q: "The Four Working Principles.",
        a: "<ul><li><strong>Pragmatism</strong> — the proposed action must work in practice, not just in theory</li><li><strong>Relativism</strong> — there are no fixed rules except love; rules are relative to situations</li><li><strong>Positivism</strong> — start by <em>choosing</em> to value love; reason then works out how to apply it</li><li><strong>Personalism</strong> — people come before rules; ethics serves persons, not abstract principles</li></ul>"
      },
      {
        q: "The Six Fundamental Principles.",
        a: "<ul><li>Love is the only absolute good</li><li>Love is the only norm — replaces 'law'</li><li>Love and justice are the same — justice is love distributed</li><li>Love wills the neighbour's good, regardless of feeling</li><li>Only the end (love) justifies the means</li><li>Love decides situationally, not prescriptively</li></ul>"
      },
      {
        q: "Agape — what does Fletcher mean?",
        a: "<p>Greek term used in the New Testament for <strong>Christian, selfless love</strong> — distinct from:</p><ul><li><em>Eros</em> (romantic/desiring love)</li><li><em>Philia</em> (friendship)</li><li><em>Storge</em> (familial affection)</li></ul><p>Agape is <strong>unconditional and impartial</strong> — directed at the wellbeing of others, including enemies (Matt 5:44). It's a deliberate, rational orientation of will, not a feeling.</p><p>Modelled on Jesus' love.</p>"
      },
      {
        q: "Biblical and theological foundations.",
        a: "<ul><li><strong>Jesus on the Sabbath</strong> (Mark 2:27): 'The Sabbath was made for man, not man for the Sabbath' — rules serve people</li><li><strong>Great Commandment</strong> (Matt 22:37–40): love God and love your neighbour — all law hangs on these two</li><li><strong>1 Corinthians 13:</strong> 'Love is patient, love is kind...' — Paul's hymn to agape</li><li><strong>Augustine:</strong> '<em>Love, and do what you will.</em>'</li></ul>"
      },
      {
        q: "Strengths of Situation Ethics.",
        a: "<ul><li><strong>Flexible:</strong> responds to real situations, not abstract rules</li><li><strong>Person-centred:</strong> prioritises wellbeing over legalism</li><li><strong>Christian grounding:</strong> rooted in Jesus' teaching and example</li><li><strong>Reasonable:</strong> uses judgement, not blind obedience</li><li><strong>Allows challenge to harmful rules</strong> — e.g. slavery, oppression</li></ul>"
      },
      {
        q: "Criticisms of Situation Ethics.",
        a: "<ul><li><strong>Subjective:</strong> 'love' is vague — different people interpret it differently</li><li><strong>Consequence-uncertainty:</strong> we can't always predict outcomes</li><li><strong>William Barclay:</strong> dangerous to give individuals such freedom — most lack the moral wisdom to use it</li><li><strong>Pope Pius XII:</strong> condemned situation ethics — bypasses absolute moral law, opens door to relativism</li><li><strong>Can justify almost anything</strong> by appealing to love (e.g. an affair 'done with love')</li><li><strong>Hard cases:</strong> what counts as loving when interests conflict?</li></ul>"
      }
    ]
  },

  kant_ocr: {
    name: "Kantian Ethics",
    cards: [
      {
        q: "Kant's good will and duty.",
        a: "<p>'<em>Nothing in the world — indeed nothing even beyond the world — can possibly be conceived which could be called good without qualification, except a good will.</em>'</p><p>A good will acts <strong>from duty</strong>, not inclination, sympathy, or consequences. Its moral worth lies in the motive, not the outcome.</p><p>Kant distinguishes acting <em>in accordance with</em> duty (right action, possibly wrong motive) from acting <em>from</em> duty (the only morally worthy motive).</p>"
      },
      {
        q: "Hypothetical vs Categorical imperatives.",
        a: "<p><strong>Hypothetical:</strong> 'If you want X, do Y.' Conditional. Tells you means to ends. <em>E.g. 'If you want to be healthy, exercise.'</em></p><p><strong>Categorical:</strong> 'Do Y.' Unconditional. Commands what reason itself requires of all rational beings. <em>E.g. 'Do not lie.'</em></p><p>Morality consists in <strong>categorical</strong> imperatives — universal, binding regardless of desire.</p>"
      },
      {
        q: "First Formulation — Universal Law.",
        a: "<p>'<em>Act only according to that maxim by which you can at the same time will that it should become a universal law.</em>'</p><p>Two ways a maxim can fail:</p><ul><li><strong>Contradiction in conception</strong> — universalising makes the maxim self-defeating (lying promises destroy promising)</li><li><strong>Contradiction in will</strong> — you couldn't rationally will the universal version (no one ever helping anyone — would harm yourself)</li></ul>"
      },
      {
        q: "Second Formulation — Humanity as Ends.",
        a: "<p>'<em>Act so that you treat humanity, whether in your own person or in that of another, always as an end and never as a means only.</em>'</p><p>Rational beings have <strong>intrinsic worth (dignity)</strong>, not mere price. You may use others (the bus driver gets you to work), but never <em>merely</em> as instruments — their rational agency must be respected.</p><p>Powerful basis for human rights.</p>"
      },
      {
        q: "Third Formulation — Kingdom of Ends.",
        a: "<p>'<em>Act as if you were through your maxims a law-making member of a kingdom of ends.</em>'</p><p>Imagine a community where every rational being is both subject to moral law and a co-legislator of it. Act on principles that all rational beings could endorse and live by.</p><p>This combines universalisability (formulation 1) with respect for persons (formulation 2).</p>"
      },
      {
        q: "Kant's three postulates of practical reason.",
        a: "<p>Morality presupposes three things that <em>theoretical</em> reason cannot prove but must be assumed for ethics to make sense:</p><ul><li><strong>Freedom</strong> — moral responsibility requires we can act otherwise</li><li><strong>Immortality of the soul</strong> — moral perfection isn't reached in this life; soul must continue</li><li><strong>God</strong> — to ensure the <em>summum bonum</em> (highest good = virtue + happiness in proportion)</li></ul><p>Not arguments for God's existence, but moral arguments for postulating Him.</p>"
      },
      {
        q: "Strengths of Kantian Ethics.",
        a: "<ul><li><strong>Universal and impartial</strong> — applies equally to all rational beings</li><li><strong>Respects human dignity</strong> — basis for rights, opposition to slavery, torture</li><li><strong>Treats motive as morally central</strong> — captures intuition that intention matters</li><li><strong>Provides clear procedure</strong> (universalisability test)</li><li><strong>Avoids consequentialist horrors</strong> (e.g. torturing one to save many)</li></ul>"
      },
      {
        q: "Criticisms of Kantian Ethics.",
        a: "<ul><li><strong>Ignores consequences:</strong> Kant says don't lie even to the murderer at the door</li><li><strong>Conflicting duties:</strong> no clear procedure when duties clash (lie vs save life)</li><li><strong>Cold:</strong> Schiller mocked Kant — duty without feeling, no moral credit for natural sympathy</li><li><strong>Universalisation problems:</strong> trivial maxims fail; oddly specific ones pass</li><li><strong>Anthropocentric:</strong> only rational beings have direct moral status — animals only matter indirectly</li><li><strong>Hegel:</strong> too abstract — real ethics is rooted in social life</li></ul>"
      }
    ]
  },

  utilitarianism_ocr: {
    name: "Utilitarianism",
    cards: [
      {
        q: "Bentham's principle of utility.",
        a: "<p>'<em>The greatest happiness of the greatest number.</em>'</p><p>An action is right insofar as it produces pleasure and wrong insofar as it produces pain. This is <strong>act utilitarianism</strong> in its purest form — judge each act by its consequences.</p><p>Hedonistic (pleasure-based), consequentialist (outcomes matter), and democratic (each person counts as one).</p>"
      },
      {
        q: "Bentham's Hedonic Calculus.",
        a: "<p>Seven criteria for measuring pleasure/pain:</p><ul><li><strong>Intensity</strong> — how strong</li><li><strong>Duration</strong> — how long</li><li><strong>Certainty</strong> — how likely</li><li><strong>Propinquity</strong> — how soon</li><li><strong>Fecundity</strong> — chance of further pleasures</li><li><strong>Purity</strong> — freedom from pain</li><li><strong>Extent</strong> — how many affected</li></ul><p>All pleasures count equally in kind — '<em>push-pin is as good as poetry</em>'.</p>"
      },
      {
        q: "How does Mill differ from Bentham?",
        a: "<p>Mill rejects pure quantitative hedonism and introduces <strong>qualitative</strong> distinctions:</p><ul><li><strong>Higher pleasures</strong> — intellectual, aesthetic, moral (Socrates dissatisfied)</li><li><strong>Lower pleasures</strong> — bodily, sensory (a pig satisfied)</li></ul><p>'<em>It is better to be a human being dissatisfied than a pig satisfied; better to be Socrates dissatisfied than a fool satisfied.</em>'</p><p>Test: 'competent judges' who have experienced both prefer the higher.</p>"
      },
      {
        q: "Act vs Rule Utilitarianism.",
        a: "<p><strong>Act utilitarianism (Bentham):</strong> in each situation, do the act that maximises utility. Flexible but allows seemingly monstrous acts if they happen to maximise (killing one to save five).</p><p><strong>Rule utilitarianism (Mill):</strong> follow rules whose general adoption maximises utility ('don't kill the innocent'). More stable, but critics say it collapses into act utilitarianism if you add enough exceptions.</p><p>Mill's <em>On Liberty</em> defends rule-based protections for liberty as utility-maximising long-term.</p>"
      },
      {
        q: "Preference Utilitarianism (Singer).",
        a: "<p>Peter Singer's modern version: maximise the <strong>satisfaction of preferences</strong> rather than pleasure.</p><p>Avoids problems with hedonic versions:</p><ul><li>Difficulty measuring pleasure</li><li>Counterintuitive cases (happy slaves — their preferences capture what's wrong)</li><li>Includes preferences of animals (sentient beings have interests in not suffering)</li></ul><p>Still consequentialist — the currency is preference-satisfaction.</p>"
      },
      {
        q: "Strengths of Utilitarianism.",
        a: "<ul><li><strong>Democratic:</strong> each person's happiness counts equally</li><li><strong>Practical:</strong> consequences are observable, not abstract duties</li><li><strong>Intuitive in policy:</strong> good for triage, public health, resource allocation</li><li><strong>Promotes wellbeing:</strong> a tangible goal</li><li><strong>Flexible:</strong> adapts to new situations</li><li><strong>Inclusive:</strong> in Singer's version, includes animals</li></ul>"
      },
      {
        q: "Criticisms of Utilitarianism.",
        a: "<ul><li><strong>Tyranny of the majority:</strong> could justify oppressing minorities if majority's pleasure outweighs minority's pain</li><li><strong>Calculation impossible:</strong> we can't reliably predict consequences</li><li><strong>Ignores justice and rights:</strong> punishing an innocent could maximise utility</li><li><strong>Bernard Williams's integrity objection:</strong> demands we sacrifice our deepest commitments (Jim and the Indians)</li><li><strong>Hard to compare pleasures</strong> — incommensurable</li><li><strong>Mill's higher/lower pleasures elitist?</strong> Who decides what's 'higher'?</li></ul>"
      }
    ]
  },

  euthanasia: {
    name: "Euthanasia",
    cards: [
      {
        q: "Key terms in euthanasia.",
        a: "<ul><li><strong>Voluntary euthanasia</strong> — at the patient's request</li><li><strong>Non-voluntary</strong> — patient cannot consent (e.g. coma, severe dementia)</li><li><strong>Involuntary</strong> — against patient's will (rare, usually = murder)</li><li><strong>Active</strong> — doing something to cause death (lethal injection)</li><li><strong>Passive</strong> — withholding treatment that would prolong life</li><li><strong>Assisted suicide</strong> — providing means for the person to end their own life (Dignitas)</li></ul>"
      },
      {
        q: "Sanctity of Life principle.",
        a: "<p>Human life is <strong>intrinsically valuable</strong> because:</p><ul><li>Made in the image of God (<em>imago Dei</em>, Genesis 1:27)</li><li>God gives and takes life — 'You shall not murder' (Exodus 20:13)</li><li>Life belongs to God, not us</li></ul><p>Strong sanctity: <strong>no killing under any circumstances</strong>.</p><p>Weak sanctity (e.g. modern Catholic teaching): there may be cases (just war, self-defence) but euthanasia is not among them.</p>"
      },
      {
        q: "Quality of Life principle.",
        a: "<p>Life has value only when it has a <strong>certain quality</strong> — capacity for awareness, relationships, freedom from extreme suffering.</p><p><strong>Peter Singer:</strong> personhood (not species membership) is what matters. Severely brain-damaged humans may have less morally relevant 'personhood' than healthy animals.</p><p>Implications: euthanasia can be permissible when quality of life is irretrievably lost.</p><p><strong>Risks:</strong> who decides what counts as 'quality'? Slippery slope to devaluing disabled lives.</p>"
      },
      {
        q: "Natural Law on euthanasia.",
        a: "<p><strong>Generally opposed.</strong></p><ul><li>Violates the primary precept of <strong>preservation of life</strong></li><li>Acting against our <em>telos</em> — life is a basic good</li><li>Replaces God as author of life</li></ul><p><strong>But Doctrine of Double Effect allows:</strong></p><ul><li>Pain relief that hastens death (intention = relief, foreseen but unintended = death)</li><li>Withdrawing 'extraordinary means' of treatment (passive euthanasia under specific conditions)</li></ul><p>Active euthanasia remains absolutely prohibited.</p>"
      },
      {
        q: "Situation Ethics on euthanasia.",
        a: "<p><strong>Joseph Fletcher</strong> was a strong supporter of euthanasia.</p><ul><li>If the most loving thing (<em>agape</em>) is to end suffering, euthanasia is right</li><li>Rules against killing are guidelines, not absolutes</li><li>Personalism — the person matters more than the rule</li><li>Quality of life can outweigh sanctity</li></ul><p>Fletcher distinguished 'humanhood' criteria (consciousness, self-awareness, communication) — without these, ending life can be loving.</p>"
      },
      {
        q: "Kantian Ethics on euthanasia.",
        a: "<p><strong>Generally opposed</strong> (though Kantians divide):</p><ul><li><strong>Suicide cannot be universalised</strong> — Kant argues self-love motivating self-destruction is self-contradictory</li><li>Treats humanity (in oneself) <strong>merely as a means</strong> to end suffering — violates dignity</li><li>Rational beings have unconditional worth, regardless of suffering</li></ul><p><strong>Counter-Kantians:</strong> respecting autonomy means letting rational agents choose to end their own lives — this is the deepest respect for their humanity.</p>"
      },
      {
        q: "Utilitarianism on euthanasia.",
        a: "<p><strong>Generally supportive</strong> (depends on consequences):</p><ul><li>Ending unbearable suffering increases net utility</li><li>Patient's preference for death (preference utilitarianism)</li><li>Resources freed for others</li><li>Family freed from burden of care</li></ul><p><strong>Concerns:</strong></p><ul><li>Slippery slope — pressure on vulnerable to 'choose' death</li><li>Erodes trust in medical profession</li><li>Hard to predict long-term social consequences</li></ul>"
      }
    ]
  },

  business_ethics: {
    name: "Business Ethics",
    cards: [
      {
        q: "Key issues in business ethics.",
        a: "<ul><li><strong>Corporate Social Responsibility (CSR)</strong> — do businesses owe more than profit?</li><li><strong>Whistleblowing</strong> — duty to expose wrongdoing vs loyalty to employer</li><li><strong>Good ethics = good business?</strong> Or are they in tension?</li><li><strong>Globalisation</strong> — exploitation of cheap labour, environmental damage abroad</li><li><strong>Stakeholders vs shareholders</strong> — whose interests matter most?</li></ul>"
      },
      {
        q: "Friedman vs Stakeholder Theory.",
        a: "<p><strong>Milton Friedman (shareholder view):</strong> '<em>The social responsibility of business is to increase its profits.</em>' Managers are agents of shareholders — their only duty is profit (within the law). CSR is a misuse of shareholders' money.</p><p><strong>Stakeholder theory:</strong> businesses have duties to <em>all</em> who are affected — employees, customers, suppliers, communities, environment. Profit is one consideration among many.</p>"
      },
      {
        q: "Whistleblowing — ethical analysis.",
        a: "<p><strong>For (Kant, justice):</strong></p><ul><li>Duty not to participate in wrongdoing</li><li>Respect for those harmed (treating them as ends)</li><li>Public good outweighs employer loyalty</li></ul><p><strong>Against (loyalty, prudence):</strong></p><ul><li>Breach of confidentiality and contract</li><li>Career destruction (Edward Snowden, Frances Haugen)</li><li>May cause unintended damage (loss of jobs)</li></ul><p><strong>Utilitarian view:</strong> depends on whether exposure produces more good than harm overall.</p>"
      },
      {
        q: "Globalisation issues.",
        a: "<ul><li><strong>Sweatshop labour:</strong> exploitation vs providing any income at all (Singer argues we have duty to consider global poor)</li><li><strong>Environmental externalities:</strong> pollution offshored to poorer countries</li><li><strong>Tax avoidance:</strong> multinationals using legal but ethically questionable structures</li><li><strong>Cultural exploitation:</strong> imposing Western consumer culture</li><li><strong>Race to the bottom:</strong> countries undercutting labour and environmental standards to attract investment</li></ul>"
      },
      {
        q: "Natural Law on business ethics.",
        a: "<ul><li><strong>Ordered society</strong> primary precept — businesses should support social good</li><li>Workers have dignity — exploitation violates their <em>telos</em></li><li><strong>Just wage</strong> tradition (Pope Leo XIII, <em>Rerum Novarum</em>)</li><li>Apparent goods (profit) shouldn't override real goods (human flourishing)</li><li>CSR aligns with natural law thinking</li></ul>"
      },
      {
        q: "Utilitarian and Kantian views on business ethics.",
        a: "<p><strong>Utilitarianism:</strong></p><ul><li>Right business = one maximising overall welfare</li><li>CSR justified if it produces more good than harm</li><li>Risk: can justify exploiting minority if majority benefits</li></ul><p><strong>Kantian:</strong></p><ul><li>Employees and customers must be treated as ends, never merely means</li><li>No deception, manipulation, exploitation</li><li>Universalisable practices only — sweatshops fail universalisability</li><li>Strong basis for whistleblowing and rights-based CSR</li></ul>"
      },
      {
        q: "'Good ethics IS good business' — assess.",
        a: "<p><strong>Supporting view (Body Shop, Patagonia model):</strong></p><ul><li>Ethical reputation attracts customers and talent</li><li>Trust reduces transaction costs</li><li>Reduces legal/regulatory risk</li><li>Long-term sustainability of brand</li></ul><p><strong>Counter (Friedman, realists):</strong></p><ul><li>Sometimes unethical practices ARE more profitable</li><li>Ethics-as-strategy isn't real ethics — it's PR</li><li>Companies that lose to less ethical competitors prove ethics costs</li></ul><p>The relationship between ethics and profit is contingent, not necessary.</p>"
      }
    ]
  },

  // ===== BUDDHISM =====
  buddha_life: {
    name: "Buddha & Sources",
    cards: [
      {
        q: "The life of the Buddha — key events.",
        a: "<p><strong>Siddhartha Gautama</strong> (c. 563–483 BCE), born prince in Lumbini (modern Nepal).</p><ul><li><strong>Sheltered upbringing:</strong> father kept him from suffering, predicted to be either great king or great teacher</li><li><strong>Four Sights:</strong> old man, sick man, corpse, holy ascetic — confronted suffering</li><li><strong>Great Renunciation:</strong> aged 29, left palace, wife (Yasodhara), son (Rahula) to seek truth</li><li><strong>Six years of asceticism</strong> — extreme self-denial, found it didn't work</li><li><strong>Enlightenment</strong> under the Bodhi tree at Bodh Gaya, aged 35</li><li><strong>First sermon</strong> at Sarnath — Four Noble Truths to five ascetics</li><li><strong>45 years of teaching</strong> — died at Kushinagar, <em>parinirvana</em></li></ul>"
      },
      {
        q: "The Three Refuges (Three Jewels).",
        a: "<p>What every Buddhist takes refuge in:</p><ul><li><strong>The Buddha</strong> — the awakened one, the example</li><li><strong>The Dhamma</strong> (Sanskrit: Dharma) — the teaching, the truth</li><li><strong>The Sangha</strong> — the community of practitioners, especially monks/nuns</li></ul><p>Recited as: '<em>Buddham saranam gacchami, Dhammam saranam gacchami, Sangham saranam gacchami.</em>'</p><p>Marks formal commitment as a Buddhist.</p>"
      },
      {
        q: "Theravada vs Mahayana — key differences.",
        a: "<table style='width:100%'><tr><td><strong>Theravada</strong></td><td><strong>Mahayana</strong></td></tr><tr><td>'Teaching of the Elders'</td><td>'Great Vehicle'</td></tr><tr><td>Pali Canon authoritative</td><td>Mahayana sutras added (Lotus, Heart, Diamond)</td></tr><tr><td>Ideal = <em>arhat</em> (one who attains nirvana)</td><td>Ideal = <em>bodhisattva</em> (delays nirvana to save others)</td></tr><tr><td>Sri Lanka, Thailand, Burma</td><td>China, Japan, Korea, Tibet, Vietnam</td></tr><tr><td>Closer to early Buddhism</td><td>More philosophical development (emptiness, Buddha-nature)</td></tr></table>"
      },
      {
        q: "The Pali Canon (Tipitaka).",
        a: "<p>The earliest scriptures, in Pali language. 'Tipitaka' = 'three baskets':</p><ul><li><strong>Vinaya Pitaka</strong> — rules of monastic discipline</li><li><strong>Sutta Pitaka</strong> — the Buddha's discourses (most important for teaching)</li><li><strong>Abhidhamma Pitaka</strong> — systematic philosophical analysis</li></ul><p>Includes the <strong>Dhammapada</strong> — short verses, widely read.</p><p>Authoritative in Theravada; Mahayana adds further sutras.</p>"
      },
      {
        q: "Key Mahayana sutras.",
        a: "<ul><li><strong>Lotus Sutra</strong> — all beings can attain Buddhahood; uses parables (burning house, prodigal son); central in East Asian Buddhism</li><li><strong>Heart Sutra</strong> — concise teaching on emptiness (<em>śūnyatā</em>): 'form is emptiness, emptiness is form'</li><li><strong>Diamond Sutra</strong> — emptiness, non-attachment, illusory nature of self</li><li><strong>Pure Land Sutras</strong> — devotion to Amitabha Buddha; salvation through faith</li></ul><p>These developed centuries after the Buddha and are not accepted by Theravada as the Buddha's direct words.</p>"
      }
    ]
  },

  four_noble_truths: {
    name: "Four Noble Truths",
    cards: [
      {
        q: "What are the Four Noble Truths?",
        a: "<p>The Buddha's first teaching, delivered at Sarnath:</p><ul><li><strong>1. Dukkha</strong> — there is suffering / unsatisfactoriness</li><li><strong>2. Samudaya</strong> — suffering has a cause (craving, <em>tanha</em>)</li><li><strong>3. Nirodha</strong> — suffering can be ended (cessation of craving)</li><li><strong>4. Magga</strong> — there is a path to the cessation (the Noble Eightfold Path)</li></ul><p>Structured as a medical diagnosis: symptom, cause, prognosis, treatment.</p>"
      },
      {
        q: "The First Noble Truth — Dukkha.",
        a: "<p><strong>Dukkha</strong> = suffering, unsatisfactoriness, dis-ease.</p><p>Three forms:</p><ul><li><strong>Dukkha-dukkha</strong> — ordinary suffering (pain, illness, loss)</li><li><strong>Viparinama-dukkha</strong> — suffering from change (pleasant things ending)</li><li><strong>Sankhara-dukkha</strong> — the deeper unsatisfactoriness of conditioned existence itself</li></ul><p>Birth, ageing, sickness, death, separation from loved, union with unloved, not getting what one wants — all dukkha.</p><p>Not pessimism — a realistic diagnosis.</p>"
      },
      {
        q: "The Second Noble Truth — Samudaya (origin).",
        a: "<p>Suffering arises from <strong>tanha</strong> — 'craving' or 'thirst'.</p><p>Three types:</p><ul><li><strong>Kama-tanha</strong> — craving for sensory pleasure</li><li><strong>Bhava-tanha</strong> — craving for existence / becoming</li><li><strong>Vibhava-tanha</strong> — craving for non-existence / annihilation</li></ul><p>Craving arises from <strong>ignorance</strong> (<em>avijja</em>) of the true nature of reality, and produces karma that fuels continued rebirth in <em>samsara</em>.</p>"
      },
      {
        q: "The Third Noble Truth — Nirodha (cessation).",
        a: "<p>Suffering can be ended by <strong>extinguishing craving</strong> — and with it, the cycle of rebirth (<em>samsara</em>).</p><p>The state reached = <strong>nirvana</strong> (Pali: <em>nibbana</em>).</p><p>Two stages:</p><ul><li><strong>Nirvana with remainder</strong> — attained during life (like the Buddha after enlightenment); the body and mind continue</li><li><strong>Parinirvana</strong> — final nirvana at death; no further rebirth</li></ul>"
      },
      {
        q: "The Fourth Noble Truth — the Eightfold Path.",
        a: "<p>The path to cessation. Divided into three categories:</p><p><strong>Wisdom (panna):</strong></p><ul><li>Right View</li><li>Right Intention</li></ul><p><strong>Ethics (sila):</strong></p><ul><li>Right Speech</li><li>Right Action</li><li>Right Livelihood</li></ul><p><strong>Meditation (samadhi):</strong></p><ul><li>Right Effort</li><li>Right Mindfulness</li><li>Right Concentration</li></ul><p>The 'Middle Way' between indulgence and extreme asceticism.</p>"
      }
    ]
  },

  three_marks: {
    name: "Three Marks of Existence",
    cards: [
      {
        q: "The Three Marks of Existence (Tilakkhana).",
        a: "<p>Three universal characteristics of all conditioned phenomena:</p><ul><li><strong>Anicca</strong> — impermanence</li><li><strong>Dukkha</strong> — unsatisfactoriness / suffering</li><li><strong>Anatta</strong> — non-self / no permanent soul</li></ul><p>Understanding these is essential to enlightenment. Missing them = ignorance (<em>avijja</em>) and continued suffering.</p>"
      },
      {
        q: "Anicca — impermanence.",
        a: "<p>Everything conditioned is in constant flux. Nothing persists unchanged.</p><ul><li>Physical: bodies age, mountains erode, stars die</li><li>Mental: thoughts, moods, identities shift moment to moment</li><li>Even apparent 'things' are processes — a wave, a flame, a river</li></ul><p>Clinging to impermanent things (relationships, possessions, the self) produces suffering. <strong>Seeing anicca clearly is liberating.</strong></p>"
      },
      {
        q: "Anatta — non-self.",
        a: "<p>There is <strong>no permanent, unchanging self or soul</strong> (no <em>atman</em>, against Hindu teaching).</p><p>What we call 'self' is just the <strong>Five Aggregates</strong> (<em>khandhas</em>) in temporary combination:</p><ul><li>Form (body)</li><li>Feeling (sensation)</li><li>Perception</li><li>Mental formations (volitions)</li><li>Consciousness</li></ul><p>None of these is the 'self'. The belief in self generates craving and suffering.</p><p>Compare: a chariot — no 'chariot' apart from its parts.</p>"
      },
      {
        q: "How does anatta relate to rebirth?",
        a: "<p><strong>This is a deep puzzle:</strong> if there's no self, what gets reborn?</p><p>Buddhist answer: <strong>not a soul, but a stream of conditioned consciousness.</strong> Karmic energy continues, conditioning a new combination of aggregates — like one candle lighting another. The flame isn't 'the same', but isn't entirely different.</p><p>Compared to <strong>Hindu atman:</strong> Hindus believe an eternal soul transmigrates. Buddhists deny this — yet still affirm rebirth.</p><p>Some find this incoherent; defenders say it captures the way identity is constructed.</p>"
      },
      {
        q: "Critique: is anatta coherent with karma?",
        a: "<p><strong>The problem:</strong> if there's no self, who experiences karmic consequences? Who is reborn? Who attains enlightenment?</p><p><strong>Defenders:</strong></p><ul><li>The 'person' is a continuous stream, not a fixed self — like a river, the same in some sense but not in another</li><li>The Buddha refused to answer 'is there a self?' directly — both yes and no mislead</li><li>The doctrine is <em>practical</em> — designed to reduce clinging, not solve metaphysics</li></ul><p><strong>Critics:</strong> if no self, ethics seem to lose grip — why care about future suffering of 'someone else'?</p>"
      }
    ]
  },

  dependent_origination: {
    name: "Dependent Origination",
    cards: [
      {
        q: "What is Dependent Origination (Paticcasamuppada)?",
        a: "<p>Core Buddhist teaching: <strong>everything arises in dependence on conditions</strong>; nothing exists independently.</p><p>Stated abstractly:</p><p>'<em>When this exists, that comes to be; when this ceases, that ceases.</em>'</p><p>Explains:</p><ul><li>How suffering arises (and so how to end it)</li><li>Why there is no permanent self (we are processes, not substances)</li><li>Why karma works without a soul</li><li>The interconnectedness of all phenomena</li></ul>"
      },
      {
        q: "The Twelve Nidanas (links of dependent origination).",
        a: "<p>The chain showing how suffering arises:</p><ol><li>Ignorance (<em>avijja</em>)</li><li>Mental formations</li><li>Consciousness</li><li>Name and form</li><li>Six sense bases</li><li>Contact</li><li>Feeling</li><li>Craving (<em>tanha</em>)</li><li>Clinging</li><li>Becoming</li><li>Birth</li><li>Ageing and death</li></ol><p>Break any link — especially craving — and the cycle breaks. This is how nirvana is possible.</p>"
      },
      {
        q: "Nagarjuna and emptiness (sunyata).",
        a: "<p><strong>Nagarjuna</strong> (c. 150–250 CE), founder of <strong>Madhyamaka</strong> school in Mahayana.</p><p>Develops dependent origination into the doctrine of <strong>sunyata</strong> (emptiness):</p><ul><li>Nothing has <em>svabhava</em> ('own-being' / inherent existence)</li><li>All phenomena are 'empty' — only exist relative to conditions and concepts</li><li>Even 'emptiness' is empty — not a thing, but a way of seeing</li></ul><p><strong>Heart Sutra:</strong> '<em>Form is emptiness, emptiness is form.</em>'</p><p>Not nihilism — phenomena still appear; they just lack independent existence.</p>"
      },
      {
        q: "Why does dependent origination matter ethically?",
        a: "<ul><li><strong>Compassion:</strong> if we're not separate selves, others' suffering is connected to ours — basis for <em>karuna</em> (compassion)</li><li><strong>Responsibility:</strong> our actions ripple through interdependent causes</li><li><strong>Non-attachment:</strong> recognising that things arise and pass loosens our grip on them</li><li><strong>Engaged Buddhism</strong> (Thich Nhat Hanh): we exist in 'interbeing' with all things — social and environmental ethics follow</li></ul>"
      }
    ]
  },

  karma_rebirth: {
    name: "Karma & Rebirth",
    cards: [
      {
        q: "What is karma?",
        a: "<p><strong>Karma</strong> (Pali: <em>kamma</em>) = 'action' — specifically, <strong>intentional action</strong>.</p><p>The Buddha: '<em>It is intention, monks, that I call karma.</em>'</p><p>Karma generates results (<em>vipaka</em>) — wholesome intentions produce good fruit, unwholesome produce suffering.</p><p>Three doors of karma:</p><ul><li>Body (physical actions)</li><li>Speech</li><li>Mind (thoughts, intentions)</li></ul><p>Not fate or external judgement — a natural law of moral causation.</p>"
      },
      {
        q: "How does karma relate to rebirth?",
        a: "<p>Unresolved karma propels the stream of consciousness into a new birth.</p><p>The <strong>quality of intentions</strong> in this life conditions:</p><ul><li>The <strong>realm</strong> of next rebirth (six realms: gods, demigods, humans, animals, hungry ghosts, hells)</li><li>The <strong>circumstances</strong> within that realm</li></ul><p>Only humans can attain enlightenment — too much suffering in hells, too much pleasure in heavens.</p><p><strong>Goal:</strong> not better rebirth, but ending rebirth altogether (nirvana).</p>"
      },
      {
        q: "Three poisons (akusala mula).",
        a: "<p>The roots of unwholesome karma — three mental states that drive suffering:</p><ul><li><strong>Greed / desire</strong> (<em>lobha</em>) — symbolised by the rooster</li><li><strong>Hatred / aversion</strong> (<em>dosa</em>) — symbolised by the snake</li><li><strong>Ignorance / delusion</strong> (<em>moha</em>) — symbolised by the pig</li></ul><p>These appear at the centre of the <strong>Wheel of Life</strong>.</p><p>Their opposites are the <strong>three wholesome roots:</strong> generosity, lovingkindness, wisdom.</p>"
      },
      {
        q: "How does karma work without a self (anatta)?",
        a: "<p>The classic puzzle: if there's no permanent self, how can 'I' experience the results of past karma?</p><p><strong>Buddhist response:</strong></p><ul><li>What continues is a stream of conditioned consciousness, not a soul</li><li>Like a flame passed from one candle to another — not the same flame, not entirely different</li><li>Karma operates as a causal principle — not requiring a fixed self to operate on</li></ul><p><strong>Critic:</strong> seems to require an implicit self after all. Defender: only practical understanding matters — clinging less to 'self' reduces suffering.</p>"
      }
    ]
  },

  nirvana: {
    name: "Nirvana",
    cards: [
      {
        q: "What is nirvana?",
        a: "<p><strong>Nirvana</strong> (Pali: <em>nibbana</em>) literally means '<strong>blowing out</strong>' — like a flame extinguished.</p><p>What is 'blown out': the three fires of greed, hatred, and ignorance — and with them, craving and rebirth.</p><p>Not a 'place' or a 'heaven' — a <strong>state</strong>, beyond the categories of existence/non-existence.</p><p>The Buddha refused to describe it positively in detail — language belongs to conditioned reality.</p>"
      },
      {
        q: "Nirvana with and without remainder.",
        a: "<ul><li><strong>Nirvana with remainder</strong> (<em>sopadisesa-nibbana</em>) — attained during life, like the Buddha after enlightenment. The body and mind continue; defilements are eliminated; no future rebirth</li><li><strong>Nirvana without remainder</strong> (<em>parinirvana</em>) — at the death of an arhat or Buddha; the aggregates dissolve and there is no rebirth</li></ul><p>The Buddha's final passing at Kushinagar = parinirvana.</p>"
      },
      {
        q: "Arhat vs Bodhisattva.",
        a: "<p><strong>Arhat</strong> (Theravada ideal):</p><ul><li>'Worthy one' who has attained nirvana</li><li>Liberated from samsara</li><li>Focus on personal enlightenment</li></ul><p><strong>Bodhisattva</strong> (Mahayana ideal):</p><ul><li>One who delays final nirvana to help all beings achieve liberation</li><li>Motivated by <em>bodhicitta</em> (awakening mind) and <em>karuna</em> (compassion)</li><li>Avalokiteshvara, Manjushri, Tara — celestial bodhisattvas</li><li>Anyone can take the bodhisattva vows</li></ul><p>Marks a key divergence: <em>self-liberation</em> vs <em>liberation for all</em>.</p>"
      },
      {
        q: "Is nirvana annihilation?",
        a: "<p>This is one of the great debates in Buddhism.</p><p><strong>The Buddha refused to answer</strong> whether an enlightened being 'exists' after death — the question itself is misframed.</p><ul><li>Not annihilation — that's a wrong view (the 'self' that's annihilated never really existed)</li><li>Not eternal existence — that's also wrong (no permanent self to persist)</li><li>Beyond both categories</li></ul><p>Some interpreters describe nirvana as 'unconditioned' and 'deathless' — positive descriptions while acknowledging language's limits.</p>"
      }
    ]
  },

  meditation: {
    name: "Meditation",
    cards: [
      {
        q: "Samatha vs Vipassana — the two main forms.",
        a: "<p><strong>Samatha</strong> ('calm abiding'):</p><ul><li>Develops concentration (<em>samadhi</em>) and mental stillness</li><li>Focus on single object: breath, image, mantra</li><li>Produces <em>jhana</em> states of deep absorption</li><li>Foundational, not the goal in itself</li></ul><p><strong>Vipassana</strong> ('insight'):</p><ul><li>Develops wisdom (<em>panna</em>)</li><li>Observes the changing nature of mind and body</li><li>Directly realises the Three Marks (anicca, dukkha, anatta)</li><li>This is what produces liberation</li></ul><p>Usually combined — calm provides the platform for insight.</p>"
      },
      {
        q: "Mindfulness of breathing (anapanasati).",
        a: "<p>The most widely taught meditation in Buddhism.</p><p>Stages (Theravada tradition):</p><ul><li>Aware of long breaths and short breaths</li><li>Aware of the whole breath</li><li>Calming the breath body</li><li>Experiencing rapture, then happiness, then mental processes</li><li>Observing impermanence in the breath itself</li></ul><p>From <em>anapanasati</em> develops mindfulness of all phenomena.</p><p>Modern <strong>secular mindfulness</strong> (Jon Kabat-Zinn, MBSR) derives from this practice.</p>"
      },
      {
        q: "The Four Foundations of Mindfulness.",
        a: "<p>From the <em>Satipatthana Sutta</em>:</p><ul><li><strong>Body</strong> — postures, breathing, sensations</li><li><strong>Feelings</strong> — pleasant, unpleasant, neutral (not emotions, but the affective tone)</li><li><strong>Mind</strong> — states of mind (greedy, hateful, distracted, concentrated)</li><li><strong>Mental objects</strong> — including the hindrances, aggregates, and Four Noble Truths</li></ul><p>Mindfulness = clear, non-judgemental awareness. Develops insight into the Three Marks.</p>"
      },
      {
        q: "Loving-kindness meditation (metta bhavana).",
        a: "<p>Cultivates <strong>metta</strong> (loving-kindness) toward all beings.</p><p>Typical sequence:</p><ul><li>Start with oneself: '<em>May I be well, happy, and peaceful.</em>'</li><li>Extend to a loved one</li><li>Then to a neutral person</li><li>Then to a difficult person / enemy</li><li>Finally to all beings everywhere</li></ul><p>Part of the <strong>four 'divine abodes'</strong> (<em>brahmaviharas</em>): loving-kindness, compassion (<em>karuna</em>), sympathetic joy (<em>mudita</em>), equanimity (<em>upekkha</em>).</p>"
      },
      {
        q: "Mahayana meditation traditions.",
        a: "<ul><li><strong>Zen</strong> (Japan, from Chinese Chan) — <em>zazen</em> (just sitting), <em>koans</em> (paradoxical questions like 'what is the sound of one hand clapping?')</li><li><strong>Tibetan</strong> — visualisation of deities, mantra recitation, <em>tonglen</em> (giving and taking compassion)</li><li><strong>Pure Land</strong> — chanting Amitabha Buddha's name (<em>nembutsu</em>) for rebirth in the Pure Land where enlightenment is easier</li></ul><p>Wide variety reflects Mahayana's emphasis on skilful means (<em>upaya</em>) — different methods for different temperaments.</p>"
      }
    ]
  },

  sangha_precepts: {
    name: "Sangha & Ethics",
    cards: [
      {
        q: "The Sangha — what is it?",
        a: "<p>The <strong>community of Buddhist practitioners</strong>, especially the monastic community.</p><ul><li><strong>Bhikkhu</strong> — monk; <strong>Bhikkhuni</strong> — nun</li><li>Established by the Buddha; women admitted reluctantly after Ananda's appeal</li><li>Live by the <strong>Vinaya</strong> — over 200 rules for monks, more for nuns</li><li>Depend on laity for food and shelter; laity gain merit by giving</li></ul><p>Broader sense: includes lay followers. Sometimes 'Noble Sangha' = those who have attained stages of enlightenment.</p>"
      },
      {
        q: "The Five Precepts.",
        a: "<p>The basic ethical commitments for all Buddhists (lay and monastic):</p><ul><li>Abstain from <strong>taking life</strong> (any sentient being)</li><li>Abstain from <strong>taking what is not given</strong> (stealing)</li><li>Abstain from <strong>sexual misconduct</strong></li><li>Abstain from <strong>false speech</strong> (lying, harmful speech)</li><li>Abstain from <strong>intoxicants</strong> that cloud the mind</li></ul><p>Not commandments from a god — voluntary undertakings supporting the path. Breaking them produces unwholesome karma but not 'sin'.</p>"
      },
      {
        q: "Beyond the Five — additional precepts.",
        a: "<p><strong>Eight Precepts</strong> — observed by laity on uposatha (observance) days. Adds:</p><ul><li>No eating after midday</li><li>No entertainment / adornment</li><li>No luxurious beds</li></ul><p><strong>Ten Precepts</strong> — for novices and serious lay practitioners.</p><p><strong>Monastic Vinaya</strong> — full code (200+ rules) including celibacy, no handling money, eating only what is offered.</p>"
      },
      {
        q: "Why is the Sangha important?",
        a: "<ul><li><strong>Preserves the Dhamma</strong> — monastics dedicate their lives to study and practice</li><li><strong>Models the path</strong> — living examples for laity</li><li><strong>Teaches</strong> — sermons, retreats, guidance</li><li><strong>Field of merit</strong> — supporting monks/nuns generates wholesome karma</li><li><strong>One of the Three Refuges</strong> — taking refuge in the Sangha is core Buddhist commitment</li></ul><p>Some Mahayana traditions (esp. Japanese Pure Land) downplay monasticism; Theravada keeps it central.</p>"
      },
      {
        q: "Women in the Sangha.",
        a: "<p>The Buddha eventually permitted women to be ordained (his stepmother Mahapajapati, urged on by Ananda), though with additional rules.</p><p><strong>Status varies hugely:</strong></p><ul><li>Strong nuns' orders in Mahayana traditions (especially East Asia)</li><li>Theravada nun's order died out in many countries; revival movements ongoing (Sri Lanka, Thailand)</li><li>Tibetan tradition has lay nuns but full ordination disputed</li></ul><p>Contemporary feminist Buddhism reclaims female teachers (Khema, Dipa Ma) and questions inherited gender hierarchies.</p>"
      },
      {
        q: "Engaged Buddhism.",
        a: "<p>Modern movement applying Buddhist principles to social, political, and environmental issues. Key figures:</p><ul><li><strong>Thich Nhat Hanh</strong> (Vietnam) — coined 'engaged Buddhism' during the Vietnam War; concept of 'interbeing'</li><li><strong>Dalai Lama</strong> — non-violence, environmental ethics</li><li><strong>B.R. Ambedkar</strong> (India) — led mass conversion of Dalits to Buddhism, 1956</li><li><strong>A.T. Ariyaratne</strong> — Sarvodaya Shramadana movement, Sri Lanka</li></ul><p>Connects ancient practice with contemporary concerns: war, poverty, environmental crisis, human rights.</p>"
      }
    ]
  }
};

// Build the "all" deck by concatenating
decks.all.cards = Object.entries(decks)
  .filter(([k]) => k !== 'all')
  .flatMap(([k, d]) => d.cards.map(c => ({ ...c, _topic: d.name })));
