// Cloudflare Pages Function: POST /api/contact
// Sends contact-form submissions via Resend.
// Required env var (Pages project → Settings → Variables and Secrets):
//   RESEND_API_KEY (secret)
// Optional:
//   TO_EMAIL   — where inquiries land (default hello@soapberrycreative.com)
//   FROM_EMAIL — must be on the Resend-verified domain
//                (default Soapberry Creative <forms@send.soapberrycreative.com>)

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.RESEND_API_KEY) {
    return json({ error: "Email is not configured." }, 500);
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const name = (data.name || "").trim().slice(0, 200);
  const email = (data.email || "").trim().slice(0, 200);
  const business = (data.business || "").trim().slice(0, 200);
  const interest = (data.interest || "").trim().slice(0, 100);
  const budget = (data.budget || "").trim().slice(0, 100);
  const message = (data.message || "").trim().slice(0, 5000);

  if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ error: "Please provide your name and a valid email." }, 400);
  }

  const to = env.TO_EMAIL || "hello@soapberrycreative.com";
  const from =
    env.FROM_EMAIL || "Soapberry Creative <forms@send.soapberrycreative.com>";

  const esc = (s) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const html = `
    <h2>New inquiry — soapberrycreative.com</h2>
    <p><strong>Name:</strong> ${esc(name)}</p>
    <p><strong>Email:</strong> ${esc(email)}</p>
    <p><strong>Business:</strong> ${esc(business) || "—"}</p>
    <p><strong>Interested in:</strong> ${esc(interest) || "—"}</p>
    <p><strong>Budget:</strong> ${esc(budget) || "—"}</p>
    <p><strong>Message:</strong></p>
    <p>${esc(message).replace(/\n/g, "<br>") || "—"}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Website inquiry from ${name}`,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend error:", res.status, detail);
    return json({ error: "Failed to send. Please email us directly." }, 502);
  }

  return json({ ok: true });
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
