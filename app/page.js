import Link from "next/link";
import SectionHeading from "../components/SectionHeading";

const listen = [
  ["L", "Listen", "Begin with disciplined attention. Hear what is being communicated without rushing to fix, direct, or react."],
  ["I", "Interpret the Language", "Attend to language and meaning while remembering that interpretation carries assumptions, context, and responsibility."],
  ["S", "Specify the Goal", "Bring clarity to the outcome or direction that matters without forcing a goal before it is ready."],
  ["T", "Tailor to the Style", "Respect differences in how people process information, communicate meaning, integrate feedback, and move toward action."],
  ["E", "Evaluate the Confidence, Commitment, and Show Compassion", "Notice confidence and commitment while keeping compassion present and preserving the other person's agency."],
  ["N", "Navigate the Support Strategy", "Choose support that fits the person, purpose, role, context, and readiness rather than assuming that more help is always better."]
];

export default function HomePage() {
  return <>
    <section className="hero"><div className="shell heroGrid">
      <div><p className="eyebrow">Leadership • Mentorship • Coaching</p><h1>Listening is more than hearing.<span> It is a leadership practice.</span></h1>
      <p className="heroLead">THE LISTEN MODEL™ is a structured education and training framework for disciplined listening, responsible interpretation, and appropriate support.</p>
      <div className="buttonRow"><Link href="/founding-pilot" className="button primary">Explore the Founding Pilot</Link><Link href="/model" className="button secondary">Learn the Model</Link></div></div>
      <div className="heroCard" aria-label="THE LISTEN MODEL acronym"><p className="heroCardLabel">THE LISTEN MODEL™</p>{listen.map(([letter,name])=><div className="heroStep" key={letter}><span>{letter}</span><strong>{name}</strong></div>)}</div>
    </div></section>

    <section className="section"><div className="shell"><SectionHeading eyebrow="THE MODEL" title="L.I.S.T.E.N. with intention." body="The public framework provides a memorable orientation for listening without reducing listening to a script or checklist." />
      <div className="cardGrid five">{listen.map(([letter,name,text])=><article className="pillarCard" key={letter}><span className="number">{letter}</span><h3>{name}</h3><p>{text}</p></article>)}</div>
      <div className="centerAction"><Link href="/model" className="textLink">Explore THE LISTEN MODEL™ →</Link></div>
    </div></section>

    <section className="section splitSection"><div className="shell twoCol"><div><p className="eyebrow">THE DISCIPLINE</p><h2>Presence before response. Clarity before action. Restraint before influence.</h2></div><div className="modeGrid"><article className="modeCard"><h3>Listening to Understand</h3><p>Create room for another person’s experience, perspective, needs, and meaning before deciding what should happen next.</p></article><article className="modeCard"><h3>Listening for Change</h3><p>Listen for information that can support constructive action while respecting capacity, ownership, role, and readiness.</p></article></div></div></section>

    <section className="section"><div className="shell"><SectionHeading eyebrow="TRAINING" title="Learn it. Practice it. Apply it." body="Training combines education, guided practice, reflection, and real-world application. Advanced practitioner methods and certification standards are taught only in the appropriate learning environment." /><div className="featureGrid"><article><strong>Learn</strong><p>Understand the L.I.S.T.E.N. orientation and the responsibilities that accompany listening.</p></article><article><strong>Practice</strong><p>Develop presence, interpretation, clarification, reflection, and intentional response.</p></article><article><strong>Apply</strong><p>Use LISTEN in leadership, mentorship, coaching, education, and professional settings.</p></article><article><strong>Reflect</strong><p>Examine alignment, boundaries, impact, and opportunities for continued growth.</p></article></div></div></section>

    <section className="ctaBand"><div className="shell ctaInner"><div><p className="eyebrow light">BRING LISTEN TO YOUR ORGANIZATION</p><h2>Build a stronger listening culture.</h2><p>Request a conversation about training for your leadership team, mentoring program, educational setting, workplace, or community organization.</p></div><Link href="/request-training" className="button lightButton">Request Training</Link></div></section>
  </>;
}
