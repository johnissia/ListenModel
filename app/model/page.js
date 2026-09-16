import Link from "next/link";

const framework = [
 ["L","Listen","Listening begins with disciplined attention: receiving what is communicated before rushing to solve, reassure, correct, or respond."],
 ["I","Interpret the Language","Language carries meaning, context, tone, and perspective. Interpretation should remain careful and provisional rather than becoming certainty too quickly."],
 ["S","Specify the Goal","Clarify the outcome, direction, or purpose that matters while allowing goals to develop, change, or remain unresolved when clarity is not yet present."],
 ["T","Tailor to the Style","People differ in how they process information, communicate meaning, integrate feedback, and move toward action. Support should respect those differences without confusing preference with capability."],
 ["E","Evaluate the Confidence, Commitment, and Show Compassion","Attend to confidence and commitment while holding compassion. Support should preserve agency rather than carrying another person's confidence or commitment for them."],
 ["N","Navigate the Support Strategy","Listening informs support, but support must fit the role, context, purpose, and readiness. Appropriate support may include action, guidance, acknowledgment, restraint, or more listening."]
];
export const metadata={title:"The Model"};
export default function ModelPage(){return <>
<section className="pageHero"><div className="shell narrow"><p className="eyebrow">THE FRAMEWORK</p><h1>THE LISTEN MODEL™</h1><p className="heroLead">A disciplined framework for listening carefully, interpreting responsibly, and navigating support without turning people into problems to solve.</p></div></section>
<section className="section"><div className="shell narrow"><div className="noticeCard"><p className="eyebrow">AN IMPORTANT DISTINCTION</p><h2>LISTEN is a discipline, not a script.</h2><p>The letters provide an orientation for learning and practice. They should not be treated as a mechanical checklist, diagnostic tool, or formula for controlling an outcome.</p></div>{framework.map(([letter,name,text])=><article className="stageRow" key={letter}><div className="stageNumber">{letter}</div><div><h2>{name}</h2><p className="stageLead">{text}</p></div></article>)}</div></section>
<section className="section splitSection"><div className="shell twoCol"><div><p className="eyebrow">FOUNDATIONAL PRACTICE</p><h2>Listening must be learned with integrity.</h2></div><div><p>Training develops supporting practices such as presence, interpretation, clarification, reflection, and intentional response. More advanced practitioner standards are reserved for guided education, certification, and authorized professional use.</p><Link href="/training" className="button primary">Explore Training</Link></div></div></section>
</>}
