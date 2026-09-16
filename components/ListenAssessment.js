"use client";

import { useMemo, useState } from "react";

const items = [
  ["Presence", "I can stay focused on what another person is communicating without planning my response while they are still speaking."],
  ["Presence", "I notice when distraction, urgency, or emotion is interfering with my attention."],
  ["Interpretation", "I can separate what was actually said from what I assumed or inferred."],
  ["Interpretation", "I consider how my own experience and perspective may influence what I think I heard."],
  ["Clarification", "I ask questions to test my understanding before acting on an assumption."],
  ["Clarification", "I invite people to correct or expand my understanding of what they mean."],
  ["Reflection", "I take time to consider patterns, context, and what may still be unsaid."],
  ["Reflection", "I can identify when a conversation needs more thought before I respond."],
  ["Response", "I choose a response based on what the situation needs rather than reacting automatically."],
  ["Response", "My response demonstrates that I understood the message, concern, or need being communicated."]
];

const practices = ["Presence", "Interpretation", "Clarification", "Reflection", "Response"];

export default function ListenAssessment() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const scores = useMemo(() => {
    const result = {};
    for (const practice of practices) {
      const vals = items
        .map((item, i) => ({ item, i }))
        .filter(({ item }) => item[0] === practice)
        .map(({ i }) => Number(answers[i] || 0));
      result[practice] = vals.every(Boolean) ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
    }
    return result;
  }, [answers]);

  const complete = items.every((_, i) => answers[i]);

  function submit(event) {
    event.preventDefault();
    if (complete) setShowResults(true);
  }

  const lowest = showResults
    ? [...practices].sort((a, b) => scores[a] - scores[b])[0]
    : null;

  return (
    <form className="assessmentForm" onSubmit={submit}>
      <div className="assessmentScale" aria-label="Response scale">
        <span>1 = Rarely</span><span>2 = Sometimes</span><span>3 = Often</span><span>4 = Usually</span><span>5 = Consistently</span>
      </div>

      {items.map(([practice, text], index) => (
        <fieldset className="assessmentItem" key={`${practice}-${index}`}>
          <legend><span>{practice}</span>{text}</legend>
          <div className="ratingRow">
            {[1,2,3,4,5].map(value => (
              <label key={value}>
                <input
                  type="radio"
                  name={`item-${index}`}
                  value={value}
                  checked={Number(answers[index]) === value}
                  onChange={() => setAnswers(prev => ({ ...prev, [index]: value }))}
                />
                <span>{value}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}

      <button className="button primary" type="submit" disabled={!complete}>See My Snapshot</button>

      {showResults && (
        <section className="assessmentResults" aria-live="polite">
          <p className="eyebrow">FOUNDATIONAL LISTENING REFLECTION</p>
          <h2>Your current foundational practice profile</h2>
          <div className="scoreGrid">
            {practices.map(practice => (
              <div className="scoreCard" key={practice}>
                <strong>{practice}</strong>
                <span>{scores[practice].toFixed(1)} / 5</span>
              </div>
            ))}
          </div>
          <div className="assessmentPrompt">
            <h3>A practice to observe: {lowest}</h3>
            <p>
              This is a reflection tool, not a diagnostic test. These five practices support introductory learning; they are not the L.I.S.T.E.N. acronym or an advanced practitioner assessment. Use the result only as a personal reflection prompt during the pilot.
            </p>
          </div>
        </section>
      )}
    </form>
  );
}
