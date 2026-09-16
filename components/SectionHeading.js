export default function SectionHeading({ eyebrow, title, body, centered = false }) {
  return (
    <div className={centered ? "sectionHeading centered" : "sectionHeading"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {body && <p className="sectionLead">{body}</p>}
    </div>
  );
}
