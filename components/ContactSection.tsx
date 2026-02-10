"use client";

import React, { forwardRef, useState } from "react";

type ContactSectionProps = { id?: string };

const ContactSection = forwardRef<HTMLDivElement, ContactSectionProps>(
    (props, ref) => {
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: "",
        });

        const handleChange = (
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            alert("Message submitted! (Hook this up to Formspree or email API.)");
            setFormData({ name: "", email: "", message: "" });
        };

        return (
            <section
                ref={ref}
                id={props.id}
                className="min-h-screen flex flex-col justify-center items-center px-6 bg-[var(--bg-main)]"
            >
                <h2 className="text-4xl font-bold mb-8 text-[var(--cream)]">Contact</h2>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 w-full max-w-lg"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-3 bg-[var(--bg-main)] border border-[var(--muted)] text-[var(--cream)] focus:outline-none"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-3 bg-[var(--bg-main)] border border-[var(--muted)] text-[var(--cream)] focus:outline-none"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="p-3 bg-[var(--bg-main)] border border-[var(--muted)] text-[var(--cream)] focus:outline-none"
                        required
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-[var(--accent)] text-white font-medium hover:bg-black transition"
                    >
                        Send Message
                    </button>
                </form>
            </section>
        );
    }
);

ContactSection.displayName = "ContactSection";
export default ContactSection;
