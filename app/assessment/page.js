import ListenAssessment from "../../components/ListenAssessment";

export const metadata = { title: "Listening Self-Assessment" };

export default function AssessmentPage() {
  return (
    <>
      <section className="pageHero">
        <div className="shell narrow">
          <p className="eyebrow">SELF-ASSESSMENT</p>
          <h1>Where does your listening practice begin?</h1>
          <p className="heroLead">
            Use this brief reflection to notice current strengths and identify one practice to pay closer attention to. Your answers stay in your browser and are not submitted or stored.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="shell narrow">
          <ListenAssessment />
        </div>
      </section>
    </>
  );
}
