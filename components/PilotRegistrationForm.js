"use client";

import { useState } from "react";

export default function PilotRegistrationForm() {
  const [state, setState] = useState({ status: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    setState({ status: "sending", message: "Sending your registration…" });

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/pilot-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Unable to send registration.");

      event.currentTarget.reset();
      setState({
        status: "success",
        message: "Thank you. Your Founding Pilot registration has been received."
      });
    } catch (error) {
      setState({ status: "error", message: error.message || "Please try again." });
    }
  }

  return (
    <form className="requestForm" onSubmit={handleSubmit}>
      <div className="formGrid">
        <label>
          Name
          <input name="name" type="text" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Organization / role
          <input name="organizationRole" type="text" placeholder="Optional" />
        </label>
        <label>
          Participation type
          <select name="participationType" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option>Individual participant</option>
            <option>Team / organization representative</option>
            <option>Mentor / coach</option>
            <option>Educator / facilitator</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label>
        What would you most like to improve about how you listen or communicate?
        <textarea name="goal" rows="5" required />
      </label>

      <label>
        Where do you expect to practice THE LISTEN MODEL™ most often?
        <textarea
          name="practiceContext"
          rows="4"
          placeholder="For example: leadership conversations, mentoring, family communication, team meetings, education, community work."
          required
        />
      </label>

      <div className="formGrid">
        <label>
          Preferred format
          <select name="format" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Virtual</option>
            <option>In person</option>
            <option>Either</option>
          </select>
        </label>
        <label>
          Best general availability
          <select name="availability" defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Weekday mornings</option>
            <option>Weekday afternoons</option>
            <option>Weekday evenings</option>
            <option>Weekends</option>
            <option>Flexible</option>
          </select>
        </label>
      </div>

      <label className="consentRow">
        <input name="feedbackConsent" type="checkbox" value="yes" required />
        <span>I understand this is a founding pilot and agree to provide structured feedback about the learning experience.</span>
      </label>

      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex="-1" autoComplete="off" />
      </label>

      <button className="button primary" type="submit" disabled={state.status === "sending"}>
        {state.status === "sending" ? "Sending…" : "Register Interest"}
      </button>

      {state.message && (
        <p className={`formMessage ${state.status === "error" ? "formError" : "formSuccess"}`} role="status">
          {state.message}
        </p>
      )}
    </form>
  );
}
