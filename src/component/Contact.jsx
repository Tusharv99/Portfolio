import React, { useState, useEffect } from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaExclamationCircle,
  FaGithub,
  FaCheckCircle,
} from "react-icons/fa";
import emailjs from '@emailjs/browser';

const contactSchema = {
  validate: (data) => {
    const errors = {};
    if (!data.name?.trim()) errors.name = "Name is required";
    else if (data.name.length < 2) errors.name = "Min 2 characters";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email?.trim()) errors.email = "Email required";
    else if (!emailRegex.test(data.email)) errors.email = "Invalid email";

    if (!data.subject?.trim()) errors.subject = "Subject required";
    if (!data.message?.trim()) errors.message = "Message required";
    else if (data.message.length < 10) errors.message = "Min 10 characters";

    return { success: Object.keys(errors).length === 0, errors };
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("NrNqwQrmUZMiJJJvB");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = contactSchema.validate(formData);
    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_y38rtkb', // Your service ID
        'template_br5y0x6', // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Tushar', // You can customize this
        }
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center px-6 py-16 text-inherit"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-3 text-inherit">Contact</h1>
        <p className="mt-3 text-sm text-inherit opacity-70">
          I'd love to hear from you — let's connect!
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-3xl w-full grid md:grid-cols-2 items-start gap-8">
        {/* Left Info */}
        <div className="flex flex-col justify-between text-inherit">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-inherit">
              Get in Touch
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-lg" />
                <p className="text-inherit">tusharverma400@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-lg" />
                <p className="text-inherit">+91 82574094</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-6 text-xl">
            <a
              href="https://www.linkedin.com/in/tushar-verma-061978233"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedin className="text-inherit" />
              <span className="absolute bottom-7 left-1/2 -translate-x-1/2 text-xs bg-black/80 text-white px-2 py-[2px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                LinkedIn
              </span>
            </a>

            <a
              href="https://github.com/Tusharv99"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition-transform duration-300 hover:scale-110"
            >
              <FaGithub className="text-inherit" />
              <span className="absolute bottom-7 left-1/2 -translate-x-1/2 text-xs bg-black/80 text-white px-2 py-[2px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                GitHub
              </span>
            </a>

            <a
              href="mailto:tusharverma8399@gmail.com"
              className="relative group transition-transform duration-300 hover:scale-110"
            >
              <FaEnvelope className="text-inherit" />
              <span className="absolute bottom-7 left-1/2 -translate-x-1/2 text-xs bg-black/80 text-white px-2 py-[2px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Email
              </span>
            </a>
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4 text-inherit">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md text-sm bg-transparent text-gray-500 outline-none focus:border-current ${
                errors.name ? "border-red-500" : "border-gray-400"
              }`}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md text-sm bg-transparent text-gray-500 outline-none focus:border-current ${
                errors.email ? "border-red-500" : "border-gray-400"
              }`}
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md text-sm bg-transparent text-gray-500 outline-none focus:border-current ${
              errors.subject ? "border-red-500" : "border-gray-400"
            }`}
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md text-sm resize-none bg-transparent text-gray-500 outline-none focus:border-current ${
              errors.message ? "border-red-500" : "border-gray-400"
            }`}
          ></textarea>

          {Object.values(errors).length > 0 && (
            <div className="flex items-center gap-2 text-red-500 text-xs">
              <FaExclamationCircle /> <span>Fix highlighted fields</span>
            </div>
          )}

          {submitStatus === 'success' && (
            <div className="flex items-center gap-2 text-green-600 text-xs bg-green-50 px-3 py-2 rounded-md">
              <FaCheckCircle /> <span>Message sent successfully!</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center gap-2 text-red-600 text-xs bg-red-50 px-3 py-2 rounded-md">
              <FaExclamationCircle /> <span>Failed to send message. Please try again.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 border border-current rounded-md font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:scale-[1.02]"
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                Send <FaPaperPlane />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;