"use client";

import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState<string>("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "f0f8abf9-bd34-4169-8176-9c8d61b4111a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Success! Your message has been sent.");
        form.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-2xl mx-auto">
      <section className="w-full py-12 px-6 lg:px-20">
        <div className="w-full text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Contact Us
            <span className=" block text-sm mt-2 text-gray-600">
              Fill the form below to send us a message!
            </span>
          </h2>

          {/* <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Share your feedback on the league — and we’ll proudly feature your
            comments on our testimonials page.
          </p> */}
          {/* <p className="text-xs text-muted-foreground mt-2">
            For readability, your feedback may be refined for clarity and
            brevity.
          </p> */}
        </div>
      </section>

      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="border p-2 w-full rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="border p-2 w-full rounded"
      />
      <h6 className="text-sm text-muted-foreground">
        Your email address will not be used for promotional purposes nor will be
        listed on our website.
      </h6>
      <textarea
        name="Feedback"
        placeholder="Your message"
        required
        className="border p-2 w-full rounded"
      />

      {/* Radio Button Question */}
      {/* <div className="space-y-2">
        <p className="font-medium">Contact Us</p>

        <label className="flex items-center gap-2">
          <input type="radio" name="anonymous" value="Yes" required />
          Yes
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="anonymous" value="No" required />
          No
        </label>
      </div> */}
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:opacity-80"
      >
        Submit
      </button>

      {result && <p className="text-sm">{result}</p>}
    </form>
  );
}
