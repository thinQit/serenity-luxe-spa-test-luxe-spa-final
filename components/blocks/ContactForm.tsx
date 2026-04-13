"use client";

import { useMemo, useState } from "react";

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormProps = {
  className?: string;
  onSubmit?: (values: ContactFormValues) => Promise<void> | void;
};

export default function ContactForm({ className, onSubmit }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const canSubmit = useMemo(() => {
    return values.name.trim() && values.email.trim() && values.message.trim();
  }, [values]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit || status === "submitting") return;

    try {
      setStatus("submitting");
      if (onSubmit) {
        await onSubmit(values);
      } else {
        // No backend wired up; keep build/runtime safe.
        await new Promise((r) => setTimeout(r, 300));
      }
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={className ?? ""}>
      <div className="mx-auto max-w-2xl px-4 py-10">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Send a message and we’ll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              autoComplete="name"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              autoComplete="email"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={values.message}
              onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
              className="min-h-[120px] w-full rounded-md border bg-background px-3 py-2 text-sm"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!canSubmit || status === "submitting"}
            className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background disabled:opacity-50"
          >
            {status === "submitting" ? "Sending…" : "Send message"}
          </button>

          {status === "success" ? (
            <p className="text-sm text-green-600">Message sent.</p>
          ) : null}
          {status === "error" ? (
            <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
