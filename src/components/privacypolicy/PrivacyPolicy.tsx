import React from "react";

interface PrivacyPolicyProps {
  className?: string;
}

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <p>
        We may collect the following information:
        <br />
        Personal Information: Name, email address, phone number, company name (when booking a consultation or contacting us).
        <br />
        Business Data: Any details you share with us to help us build and customize AI agents for your workflows.
        <br />
        Usage Data: IP address, browser type, device information, and pages visited on our site.
      </p>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <p>
        We use the collected information to:
        <br />
        - Provide and improve our AI automation services.
        <br />
        - Respond to your inquiries, consultations, or support requests.
        <br />
        - Send service updates, offers, or newsletters (optional and opt-out anytime).
        <br />
        - Ensure the security and proper functioning of our website.
      </p>
    ),
  },
  {
    title: "3. Sharing of Information",
    content: (
      <p>
        We do not sell or rent your personal information.
        <br />
        We may share information only with:
        <br />
        - Trusted partners/service providers who help deliver our services.
        <br />
        - Legal authorities if required to comply with applicable laws.
      </p>
    ),
  },
  {
    title: "4. Cookies & Tracking",
    content: (
      <p>
        Our website uses cookies to improve your browsing experience, track site performance, and understand user behavior. You may disable cookies in your browser settings, but some features may not function properly.
      </p>
    ),
  },
  {
    title: "5. Data Security",
    content: (
      <p>
        We use industry-standard measures to safeguard your information from unauthorized access, loss, or misuse. However, no online transmission or storage method is 100% secure.
      </p>
    ),
  },
  {
    title: "6. Your Rights",
    content: (
      <p>
        You have the right to:
        <br />
        - Access the personal information we hold about you.
        <br />
        - Request corrections or updates to your information.
        <br />
        - Request deletion of your data, subject to legal requirements.
        <br />
        - Opt out of receiving marketing communications at any time.
      </p>
    ),
  },
  {
    title: "7. Third-Party Links",
    content: (
      <p>
        Our website may link to third-party sites. We are not responsible for the privacy practices of these external websites.
      </p>
    ),
  },
  {
    title: "8. Updates to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. Updates will be posted here with a new effective date.
      </p>
    ),
  },
];

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ className = "" }) => {
  return (
    <div
      className={`bg-black text-white min-h-screen py-48 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-offwhite text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            At GDSolutions, your privacy is important to us. This Privacy Policy
            explains how we collect, use, and protect your personal information
            when you visit or interact with our services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
                {section.title}
              </h2>
              <div className="text-offwhite space-y-4 text-sm sm:text-base leading-relaxed">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
