// Transactional email via Resend (plain fetch — works inside Convex HTTP actions).
const RESEND_URL = "https://api.resend.com/emails";

export async function sendEmail(opts: {
  to: string;
  subject: string;
  html: string;
  text?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[email] RESEND_API_KEY not set; skipping email to", opts.to);
    return;
  }
  const from = process.env.EMAIL_FROM || "Catelog <noreply@wekraft.xyz>";
  const res = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, ...opts }),
  });
  if (!res.ok) {
    console.error("[email] Resend failed", res.status, await res.text());
  }
}

const layout = (title: string, body: string, cta: string, url: string) => `
<div style="font-family:Inter,Arial,sans-serif;max-width:480px;margin:auto;padding:24px">
  <h2 style="margin:0 0 12px">${title}</h2>
  <p style="color:#444;line-height:1.5">${body}</p>
  <p style="margin:24px 0"><a href="${url}" style="background:#111;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none">${cta}</a></p>
  <p style="color:#888;font-size:12px">If the button doesn't work, paste this link into your browser:<br>${url}</p>
</div>`;

export const verificationEmail = (name: string | undefined, url: string) => ({
  subject: "Verify your Catelog email",
  html: layout(
    "Verify your email",
    `Hi ${name || "there"}, confirm your email address to finish setting up your Catelog account.`,
    "Verify email",
    url,
  ),
});

export const resetPasswordEmail = (name: string | undefined, url: string) => ({
  subject: "Reset your Catelog password",
  html: layout(
    "Reset your password",
    `Hi ${name || "there"}, we received a request to reset your password. This link expires in 1 hour. If it wasn't you, ignore this email.`,
    "Reset password",
    url,
  ),
});
