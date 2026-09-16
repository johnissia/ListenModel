import TrainingForm from "../../components/TrainingForm";

export const metadata = {
  title: "Request Training"
};

export default function RequestTrainingPage() {
  return (
    <>
      <section className="pageHero">
        <div className="shell narrow">
          <p className="eyebrow">REQUEST TRAINING</p>
          <h1>Bring THE LISTEN MODEL™ to your group.</h1>
          <p className="heroLead">
            Tell us a little about your audience and what you want to
            strengthen. We will use your request to explore the right training
            format for your setting.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell formShell">
          <div className="formIntro">
            <h2>Start a training conversation</h2>
            <p>
              Training inquiries are welcome from businesses, educational
              organizations, mentoring programs, community organizations,
              leadership teams, and other groups.
            </p>
          </div>
          <TrainingForm />
        </div>
      </section>
    </>
  );
}
