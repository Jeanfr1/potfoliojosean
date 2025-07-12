import { useState, FormEvent } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Please fill in all required fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }

    // In a real application, you would send the form data to a server here
    console.log("Form submitted:", formData);

    // Show success message
    setFormError("");
    setFormSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="relative">
      {/* Background blur effects */}
      <div className="background-blur-container">
        <div className="blue-blur"></div>
        <div className="green-blur"></div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-medium text-text-primary">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
            <h3 className="text-xl text-accent-orange mb-6">
              Send Me a Message
            </h3>

            {formSubmitted ? (
              <div className="bg-[#1D293D] border border-accent-green p-4 rounded-lg mb-6">
                <p className="text-accent-green">
                  Thank you for your message! I'll get back to you as soon as
                  possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <div className="bg-[#1D293D] border border-accent-orange p-4 rounded-lg mb-4">
                    <p className="text-accent-orange">{formError}</p>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-text-secondary mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background-dark border border-border-color rounded-lg p-3 text-text-primary focus:border-accent-green focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-text-secondary mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background-dark border border-border-color rounded-lg p-3 text-text-primary focus:border-accent-green focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-text-secondary mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-background-dark border border-border-color rounded-lg p-3 text-text-primary focus:border-accent-green focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-text-secondary mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-background-dark border border-border-color rounded-lg p-3 text-text-primary focus:border-accent-green focus:outline-none resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" className="btn btn-primary">
                    send-message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
              <h3 className="text-xl text-accent-orange mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <FaEnvelope className="text-accent-green mt-1 mr-4" />
                  <div>
                    <h4 className="text-text-primary">Email</h4>
                    <p className="text-text-secondary">
                      contactjoseanaraujo@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaPhone className="text-accent-green mt-1 mr-4" />
                  <div>
                    <h4 className="text-text-primary">Phone</h4>
                    <p className="text-text-secondary">+33670640254</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-accent-green mt-1 mr-4" />
                  <div>
                    <h4 className="text-text-primary">Location</h4>
                    <p className="text-text-secondary">France</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
              <h3 className="text-xl text-accent-orange mb-6">
                Connect With Me
              </h3>

              <div className="space-y-4">
                <a
                  href="https://github.com/Jeanfr1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text-secondary hover:text-accent-green transition-colors"
                >
                  <FaGithub className="mr-4" size={20} />
                  <span>github.com/Jeanfr1</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/josean-araujo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text-secondary hover:text-accent-blue transition-colors"
                >
                  <FaLinkedin className="mr-4" size={20} />
                  <span>LinkedIn Josean</span>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text-secondary hover:text-accent-orange transition-colors"
                >
                  <FaTwitter className="mr-4" size={20} />
                  <span>@josean_araujo</span>
                </a>
              </div>
            </div>

            <div className="bg-foreground-dark border border-border-color rounded-lg p-6">
              <h3 className="text-xl text-accent-orange mb-4">Working Hours</h3>
              <p className="text-text-secondary mb-2">
                Monday - Friday: 9:00 AM - 6:00 PM (CET)
              </p>
              <p className="text-text-secondary">
                I'll respond to your message as soon as possible!
              </p>
            </div>
          </div>
        </div>

        <div className="code-block mt-8">
          <span className="code-line code-comment">// Let's connect</span>
          <span className="code-line">
            <span className="code-keyword">const</span>{" "}
            <span className="code-function">sendMessage</span> = (
            <span className="code-keyword">message</span>) =&gt; {"{"}
          </span>
          <span className="code-line">
            {" "}
            <span className="code-keyword">
              if
            </span> (message.isInteresting) {"{"}{" "}
          </span>
          <span className="code-line">
            {" "}
            <span className="code-keyword">return</span>{" "}
            <span className="code-string">"I'll respond quickly!"</span>;
          </span>
          <span className="code-line">
            {" "}
            {"}"} <span className="code-keyword">else</span> {"{"}{" "}
          </span>
          <span className="code-line">
            {" "}
            <span className="code-keyword">return</span>{" "}
            <span className="code-string">"I'll still respond quickly!"</span>;
          </span>
          <span className="code-line"> {"}"}</span>
          <span className="code-line">{"}"};</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
