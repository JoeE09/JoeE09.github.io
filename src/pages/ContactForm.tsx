import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import AnimatedText from "../components/AnimatedText";
import ResponsiveBlurredImage from "../components/ResponsiveBlurredImage";

function sanitizeInput(input: string): string {
  // Remove any HTML tags
  return input.replace(/<[^>]*>?/g, "").trim().slice(0, 2000);
}

export default function ContactForm() {
  const [state, handleSubmit] = useForm("myzjbkpw");
  const [formData, setFormData] = useState({ email: "", message: "", botField: "" });
  const [emailLength, setEmailLength] = useState(0);
  const [messageLength, setMessageLength] = useState(0);
  const [formError, setFormError] = useState("");
  const bannerRef = React.useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      return { ...prev, [name]: value };
    });
    if (name === "email") setEmailLength(Math.min(value.length, 100));
    if (name === "message") setMessageLength(Math.min(value.length, 2000));
  };

  const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple spam bot check
    if (formData.botField !== "") return;

    if (!isValidEmail(formData.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    setFormError("");

    const sanitized = {
      email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message),
    };

    handleSubmit({ ...sanitized });
  };

  if (state.succeeded) {
    return <p className="text-green-700 text-center mt-4">Message sent!</p>;
  }

  return (
    <div className=" bg-gray-50 pb-12">
      <section
        ref={bannerRef}
        className="px-6 pb-12 pt-12 border-b border-gray-200 w-full bg-cover bg-center overflow-hidden mb-8"
      >
        <ResponsiveBlurredImage
            src="/images/tech-line-banner.jpg"
            referenceRef={(bannerRef as React.RefObject<HTMLDivElement>)}
            animationDelay={0.01}
            animationDuration={1.5}
            overlayOpacity={0.5}
            backgroundGradient="linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))"
        />
        <div className="max-w-2xl mx-auto text-center p-4 z-10">
          <AnimatedText
            baseDelay={0.01}
            delayStep={0.1}
            duration={1}
            translateAmount={-20}
          >
            <h2 className="text-5xl font-bold text-customGreen mb-6">Contact Me</h2>
          </AnimatedText>
          <AnimatedText
            delayStep={0.05} baseDelay={0.8} translateAmount={-7} translateDirection = "X" duration={0.3}
          >
            <p className="text-gray-100">
              Interested in discussing a role, project opportunity, or collaboration? Feel free to reach out using the form below.
            </p>
          </AnimatedText>
        </div>
      </section>
      <form onSubmit={onSubmit} className="space-y-4 max-w-lg mx-auto">
        <div className="hidden">
          <label htmlFor="botField">Name</label>
          <input id="botField" name="botField" value={formData.botField} onChange={handleChange} />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold text-customGreen text-xl mb-4">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            maxLength={100}
            className="w-full p-2 rounded-md border-gray-600 bg-gray-100 text-gray-800"
          />
          <p className="text-sm text-left text-gray-500 opacity-90">
            {formError && <span className="text-red-600">{formError}</span>}
          </p>
          <p className="text-sm text-right text-gray-500 opacity-90">
            {`${100 - emailLength} characters left`}
          </p>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message" className="block font-semibold text-customGreen text-xl mb-4">Message</label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            maxLength={2000}
            className="w-full p-2 rounded-md border-gray-600 bg-gray-100 h-32 text-gray-800"
          />
          <p className="text-sm text-right text-gray-500 opacity-90">
            {`${2000 - messageLength} characters left`}
          </p>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="bg-customGreen text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed w-60 mx-auto block"
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}