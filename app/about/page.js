import Link from "next/link";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <section className="pageHero">
        <div className="shell narrow">
          <p className="eyebrow">ABOUT</p>
          <h1>Listening as a practice for leadership and change.</h1>
          <p className="heroLead">
            THE LISTEN MODEL™ was developed to make listening more visible,
            intentional, teachable, and usable in the moments where
            communication matters most.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell narrow prose">
          <h2>Part of Paragon Life Models</h2>
          <p>
            THE LISTEN MODEL™ is a flagship framework within Paragon Life
            Models — a broader methodology system for education, coaching,
            development, certification, and licensing.
          </p>
          <p>
            The framework is designed to stand on its own while also fitting
            within a larger family of practical models for personal,
            professional, organizational, and community development.
          </p>

          <h2>What makes LISTEN different</h2>
          <p>
            Listening is often described as a soft skill or treated as a
            personality trait. THE LISTEN MODEL™ treats it as a process that can
            be taught, practiced, examined, and improved.
          </p>

          <div className="quoteCard">
            <p>“Listening to Understand. Listening for Change.”</p>
          </div>

          <Link href="/request-training" className="button primary">
            Request Training
          </Link>
        </div>
      </section>
    </>
  );
}
