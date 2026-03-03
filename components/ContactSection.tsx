"use client";

import React, { forwardRef, useState } from "react";

type ContactSectionProps = { id?: string };
type Status = "idle" | "loading" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykdznod";

const ContactSection = forwardRef<HTMLDivElement, ContactSectionProps>(
    (props, ref) => {
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: "",
        });

        const [status, setStatus] = useState<Status>("idle");
        const [error, setError] = useState<string | null>(null);

        const handleChange = (
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setStatus("loading");
            setError(null);

            try {
                const form = e.currentTarget;
                const data = new FormData(form);

                const res = await fetch(FORMSPREE_ENDPOINT, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                    },
                    body: data,
                });

                if (!res.ok) {
                    const result = await res.json().catch(() => ({}));
                    const msg =
                        result?.errors?.[0]?.message ||
                        result?.error ||
                        "Failed to send message";
                    throw new Error(msg);
                }

                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } catch (err: unknown) {
                setStatus("error");

                const message =
                    err instanceof Error ? err.message : "Something went wrong";

                setError(message);
            }
        };

        return (
            <section
                ref={ref}
                id={props.id}
                className="min-h-screen snap-start flex flex-col justify-center items-center px-6 bg-[var(--bg-main)]"
            >
                {/* Section heading, same style family as About/Projects */}
                <h2 className="text-[2.25rem] md:text-[2.75rem] font-semibold tracking-[-0.02em] leading-[1.1] text-[#111] mb-8">
                    Contact
                </h2>

                {/* Card wrapper to match project cards (square, light, scaling) */}
                <div className="w-full max-w-lg bg-[rgba(246,240,230,0.4)] border border-[#e0d4cc]/40 p-6 shadow-sm hover:scale-[1.03] transition-all duration-300">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="p-3 bg-transparent border border-[#e0d4cc]/70 text-[#111] placeholder:text-[#7a7a7a] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-3 bg-transparent border border-[#e0d4cc]/70 text-[#111] placeholder:text-[#7a7a7a] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="p-3 bg-transparent border border-[#e0d4cc]/70 text-[#111] placeholder:text-[#7a7a7a] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                            required
                        />

                        {/* Optional: subject or extra metadata */}
                        <input type="hidden" name="_subject" value="New portfolio contact" />

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="mt-2 px-6 py-3 bg-[var(--accent)] text-white font-medium tracking-[-0.01em] hover:opacity-80 transition disabled:opacity-60"
                        >
                            {status === "loading" ? "Sending..." : "Send Message"}
                        </button>

                        {status === "success" && (
                            <p className="text-sm text-green-600 mt-2">
                                Message sent successfully ✅
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-sm text-red-600 mt-2">
                                {error ?? "Something went wrong"}
                            </p>
                        )}
                    </form>
                </div>
            </section>
        );
    }
);

ContactSection.displayName = "ContactSection";

export default ContactSection;