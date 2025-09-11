import React from "react";

interface PrivacyPolicyProps {
  className?: string;
}

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>We may collect the following information:</p>
        <ul className="ml-6 space-y-2 list-disc">
          <li>
            Personal identification information (name, email address, phone
            number)
          </li>
          <li>
            Usage data and analytics to understand how you interact with our
            services
          </li>
          <li>
            Technical information such as IP address, browser type, and
            operating system
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>We use the collected information to:</p>
        <ul className="ml-6 space-y-2 list-disc">
          <li>Provide, operate, and maintain our services</li>
          <li>Improve and personalize your experience</li>
          <li>Respond to your inquiries, comments, or support requests</li>
          <li>
            Send you updates, marketing communications, and promotional
            materials
          </li>
          <li>Analyze usage patterns to improve our services</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Sharing of Information",
    content: (
      <>
        <p>
          We do not sell your personal information. However, we may share
          information in certain circumstances:
        </p>
        <ul className="ml-6 space-y-2 list-disc">
          <li>With service providers who help us operate our services</li>
          <li>To comply with legal obligations or court orders</li>
          <li>To protect our rights and prevent fraud or illegal activities</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Cookies & Tracking",
    content: (
      <p>
        Our website uses cookies to improve your browsing experience, track site
        performance, and understand user behavior. You may choose to accept or
        decline cookies through your browser settings, but this may affect your
        user experience.
      </p>
    ),
  },
  {
    title: "5. Data Security",
    content: (
      <p>
        We implement industry-standard measures to protect your information from
        unauthorized access, loss, or misuse. However, no online system is 100%
        secure.
      </p>
    ),
  },
  {
    title: "6. Your Rights",
    content: (
      <>
        <p>You have the right to:</p>
        <ul className="ml-6 space-y-2 list-disc">
          <li>Access the personal information we hold about you</li>
          <li>Request corrections to your personal information</li>
          <li>Request deletion of your data subject to legal requirements</li>
          <li>Opt out of marketing communications at any time</li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Third-Party Links",
    content: (
      <p>
        Our website may link to third-party sites. We are not responsible for
        the privacy practices of these external websites.
      </p>
    ),
  },
  {
    title: "8. Updates to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. Updated versions
        will be posted on this page with an effective date.
      </p>
    ),
  },
];

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ className = "" }) => {
  return (
    <div
      className={`bg-black  text-white min-h-screen py-48 px-4 sm:px-6 lg:px-8 ${className}`}
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
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
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
