"use client";

import { useState } from "react";

export default function TrainingForm() {
  const [state, setState] = useState({ status: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();

    // Save the form element before the asynchronous request begins.
    const formElement = event.currentTarget;

    setState({
      status: "sending",
      message: "Sending your request…"
    });

    const formData = new FormData(formElement);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/request-training", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to send your request.");
      }

      // Clear the form only after a successful submission.
      formElement.reset();

      setState({
        status: "success",
        message: "Thank you. Your training request has been received."
      });
    } catch (error) {
      setState({
        status: "error",
        message:
          error?.message ||
          "We could not send your request. Please try again."
      });
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
          Organization
          <input name="organization" type="text" />
        </label>

        <label>
          Email
          <input name="email" type="email" required />
        </label>

        <label>
          Phone
          <input name="phone" type="tel" />
        </label>

        <label>
          Group size
          <input
            name="groupSize"
            type="text"
            placeholder="e.g., 12–20"
          />
        </label>

        <label>
          Preferred format
          <select name="format" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Virtual</option>
            <option>In person</option>
            <option>Either</option>
          </select>
        </label>
      </div>

      <label>
        What would you like your group to strengthen?
        <textarea
          name="goals"
          rows="6"
          placeholder="Tell us about your team, program, or training goals."
          required
        />
      </label>

      <label className="honeypot" aria-hidden="true">
        Website
        <input
          name="website"
          type="text"
          tabIndex="-1"
          autoComplete="off"
        />
      </label>

      <button
        className="button primary"
        type="submit"
        disabled={state.status === "sending"}
      >
        {state.status === "sending"
          ? "Sending…"
          : "Request Training"}
      </button>

      {state.message && (
        <p
          className={`formMessage ${
            state.status === "error"
              ? "formError"
              : "formSuccess"
          }`}
          role="status"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}