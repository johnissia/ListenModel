export async function POST(request) {
  try {
    const body = await request.json();

    if (body.website) return Response.json({ ok: true });

    for (const field of ["name", "email", "participationType", "goal", "practiceContext", "feedbackConsent"]) {
      if (!body[field] || String(body[field]).trim() === "") {
        return Response.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.TRAINING_REQUEST_TO;
    const from = process.env.TRAINING_REQUEST_FROM || "THE LISTEN MODEL <onboarding@resend.dev>";

    if (!apiKey || !to) {
      return Response.json(
        { error: "Pilot registration email is not configured yet. Add RESEND_API_KEY and TRAINING_REQUEST_TO to .env.local." },
        { status: 503 }
      );
    }

    const text = [
      "New THE LISTEN MODEL™ Founding Pilot registration",
      "",
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      `Organization / role: ${body.organizationRole || "Not provided"}`,
      `Participation type: ${body.participationType}`,
      `Preferred format: ${body.format || "Not provided"}`,
      `Availability: ${body.availability || "Not provided"}`,
      `Feedback consent: ${body.feedbackConsent}`,
      "",
      "Listening / communication goal:",
      body.goal,
      "",
      "Expected practice context:",
      body.practiceContext
    ].join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: body.email,
        subject: `LISTEN Founding Pilot registration — ${body.name}`,
        text
      })
    });

    if (!response.ok) {
      console.error("Resend error:", await response.text());
      return Response.json({ error: "The registration could not be sent." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
