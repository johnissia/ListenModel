import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <Link href="/" className="brand" aria-label="THE LISTEN MODEL home">
          <Image
            src="/images/listen-model-ear-heart.png"
            alt="THE LISTEN MODEL ear and heart emblem"
            width={62}
            height={62}
            className="brandLogo"
            priority
          />
          <span className="brandText">
            <strong>THE LISTEN MODEL™</strong>
            <small>A Paragon Life Models framework</small>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary navigation">
          <Link href="/model">The Model</Link>
          <Link href="/training">Training</Link>
          <Link href="/founding-pilot">Founding Pilot</Link>
          <Link href="/assessment">Assessment</Link>
          <Link href="/about">About</Link>
          <Link href="/request-training" className="navCta">Request Training</Link>
        </nav>
      </div>
    </header>
  );
}
