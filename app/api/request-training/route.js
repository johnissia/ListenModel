export async function POST(request) {
  try {
    const body = await request.json();

    // Honeypot for basic bot filtering.
    if (body.website) {
      return Response.json({ ok: true });
    }

    const required = ["name", "email", "goals"];
    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === "") {
        return Response.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.TRAINING_REQUEST_TO;
    const from =
      process.env.TRAINING_REQUEST_FROM ||
      "THE LISTEN MODEL <onboarding@resend.dev>";

    if (!apiKey || !to) {
      return Response.json(
        {
          error:
            "The training request form is not configured yet. Add RESEND_API_KEY and TRAINING_REQUEST_TO to .env.local."
        },
        { status: 503 }
      );
    }

    const text = [
      "New THE LISTEN MODEL™ training request",
      "",
      `Name: ${body.name}`,
      `Organization: ${body.organization || "Not provided"}`,
      `Email: ${body.email}`,
      `Phone: ${body.phone || "Not provided"}`,
      `Group size: ${body.groupSize || "Not provided"}`,
      `Preferred format: ${body.format || "Not provided"}`,
      "",
      "Goals:",
      body.goals
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
        subject: `THE LISTEN MODEL™ training request — ${body.name}`,
        text
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend error:", errorText);
      return Response.json(
        { error: "The request could not be sent." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
