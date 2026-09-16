import PilotRegistrationForm from "../../../components/PilotRegistrationForm";

export const metadata = { title: "Founding Pilot Registration" };

export default function PilotRegisterPage() {
  return (
    <>
      <section className="pageHero pilotHero">
        <div className="shell narrow">
          <p className="eyebrow">FOUNDING PILOT REGISTRATION</p>
          <h1>Practice intentional listening in real life.</h1>
          <p className="heroLead">
            Register your interest in an early THE LISTEN MODEL™ learning experience. Founding participants will learn the framework, practice it in real conversations, and provide structured feedback that helps strengthen the program.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell formShell">
          <div className="formIntro">
            <p className="eyebrow">PARTICIPANT INTAKE</p>
            <h2>Tell us how you want to use LISTEN.</h2>
            <p className="sectionLead">
              This short intake helps connect the pilot to the situations where listening matters most to you.
            </p>
          </div>
          <PilotRegistrationForm />
        </div>
      </section>
    </>
  );
}
