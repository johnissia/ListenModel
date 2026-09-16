import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footerGrid">
        <div>
          <div className="footerBrand">THE LISTEN MODEL™</div>
          <p>
            Listening is more than hearing. It is a leadership practice.
          </p>
        </div>
        <div className="footerLinks">
          <Link href="/model">The Model</Link>
          <Link href="/training">Training</Link>
          <Link href="/request-training">Request Training</Link>
        </div>
      </div>
      <div className="shell footerBottom">
        <span>© {new Date().getFullYear()} THE LISTEN MODEL™.</span>
        <span>Developed within Paragon Life Models.</span>
      </div>
    </footer>
  );
}
