import Link from "next/link";

export const metadata = { title: "Module 1 — Presence + Interpretation" };

export default function ModuleOnePage() {
  return (
    <>
      <section className="pageHero moduleHero">
        <div className="shell narrow">
          <p className="eyebrow">FOUNDING PILOT · FOUNDATIONAL PRACTICE</p>
          <h1>Presence + Interpretation</h1>
          <p className="heroLead">
            Before we can clarify, reflect, or respond well, we have to notice what we are paying attention to — and what we are adding to what we hear.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell lessonShell">
          <article className="lessonBlock">
            <p className="eyebrow">PRACTICE 01</p>
            <h2>Presence</h2>
            <p className="lessonLead">Be fully available to what is being communicated before deciding what it means.</p>
            <p>Presence is not simply being physically nearby. It is the deliberate choice to give attention to the person, message, context, and moment before preparing your answer.</p>
            <div className="practiceBox">
              <h3>Try this</h3>
              <p>In one conversation today, notice the first moment you begin preparing your response. Do not judge it. Return your attention to the speaker and listen for one thing you might have missed.</p>
            </div>
          </article>

          <article className="lessonBlock">
            <p className="eyebrow">PRACTICE 02</p>
            <h2>Interpretation</h2>
            <p className="lessonLead">Recognize how assumptions, experiences, context, and perspective influence what we believe we heard.</p>
            <p>Every listener interprets. The goal is not to eliminate interpretation, but to recognize when our interpretation is being treated as if it were the speaker’s exact meaning.</p>
            <div className="practiceBox">
              <h3>Three-column reflection</h3>
              <ol>
                <li><strong>What was said?</strong> Write only what you can reasonably attribute to the speaker.</li>
                <li><strong>What did I assume?</strong> Identify the meaning, motive, or conclusion you added.</li>
                <li><strong>What needs clarification?</strong> Turn uncertainty into a question rather than a conclusion.</li>
              </ol>
            </div>
          </article>

          <article className="lessonBlock reflectionBlock">
            <p className="eyebrow">REAL-WORLD ASSIGNMENT</p>
            <h2>Use it in one meaningful conversation.</h2>
            <p>Choose a conversation where understanding matters. Before responding, deliberately practice Presence and then separate what you heard from what you interpreted.</p>
            <h3>Afterward, reflect:</h3>
            <ul className="checkList">
              <li>When did my attention drift?</li>
              <li>What did I assume before I clarified?</li>
              <li>What changed when I returned to the actual message?</li>
              <li>What would I do differently next time?</li>
            </ul>
          </article>

          <div className="lessonActions">
            <Link href="/assessment" className="button secondary">Take the Self-Assessment</Link>
            <Link href="/founding-pilot/register" className="button primary">Join the Founding Pilot</Link>
          </div>
        </div>
      </section>
    </>
  );
}
