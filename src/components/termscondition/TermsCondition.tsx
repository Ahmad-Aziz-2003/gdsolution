import React from "react";

interface TermsProps {
  className?: string;
}

const terms = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <p>
        By using our website or services, you confirm that you are at least 18 years old and agree to comply with these Terms. If you do not agree, please do not use our website or services.
      </p>
    ),
  },
  {
    title: "2. Services",
    content: (
      <p>
        GDSolutions provides AI automation services, including the design and implementation of AI agents to automate repetitive tasks. Services may vary depending on client requirements. We reserve the right to modify, update, or discontinue services at any time.
      </p>
    ),
  },
  {
    title: "3. Use of Website",
    content: (
      <ul className="ml-6 space-y-2 list-disc">
        <li>Attempt to breach website security.</li>
        <li>Misuse content or materials on our site.</li>
        <li>Copy, distribute, or resell content without written permission.</li>
      </ul>
    ),
  },
  {
    title: "4. Consultations & Agreements",
    content: (
      <ul className="ml-6 space-y-2 list-disc">
        <li>Any consultations or calls booked through our site are for informational purposes.</li>
        <li>A formal service agreement or contract will govern any paid services.</li>
        <li>Deliverables, timelines, and costs will be defined in your signed agreement with us.</li>
      </ul>
    ),
  },
  {
    title: "5. Intellectual Property",
    content: (
      <p>
        All content on this website (text, graphics, branding, logos, etc.) is the property of GDSolutions and may not be reproduced, copied, or used without prior written consent.
      </p>
    ),
  },
  {
    title: "6. Limitation of Liability",
    content: (
      <ul className="ml-6 space-y-2 list-disc">
        <li>GDSolutions is not liable for damages arising from the use or inability to use our website or services.</li>
        <li>We do not guarantee uninterrupted or error-free operation of our services.</li>
      </ul>
    ),
  },
  {
    title: "7. Privacy",
    content: (
      <p>
        Your use of our website is also governed by our <a href="/privacy-policy" className="underline">Privacy Policy</a>. Please review it to understand how we handle your data.
      </p>
    ),
  },
  {
    title: "8. Payment & Refunds",
    content: (
      <p>
        Payment terms will be outlined in individual contracts or invoices. Refunds, if applicable, will be subject to the terms agreed upon in your service contract.
      </p>
    ),
  },
  {
    title: "9. Third-Party Tools & Links",
    content: (
      <p>
        Our services may integrate with third-party platforms. We are not responsible for their availability, security, or practices.
      </p>
    ),
  },
  {
    title: "10. Termination",
    content: (
      <p>
        We reserve the right to suspend or terminate access to our services if you violate these Terms.
      </p>
    ),
  },
  {
    title: "11. Governing Law",
    content: (
      <p>
        These Terms are governed by the laws of [Insert Your Country/Region]. Any disputes shall be resolved in the courts of [Insert Jurisdiction].
      </p>
    ),
  },
  {
    title: "12. Updates to Terms",
    content: (
      <p>
        We may update these Terms & Conditions from time to time. Updates will be posted on this page with a new effective date.
      </p>
    ),
  },
];

const TermsConditions: React.FC<TermsProps> = ({ className = "" }) => {
  return (
    <div
      className={`bg-black  text-white min-h-screen py-48 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-offwhite text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
           Welcome to GDSolutions.ai. By accessing or using our website and services, you agree to the following Terms & Conditions. Please read them carefully before using our services.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-12">
          {terms.map((term, index) => (
            <section key={index}>
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                {term.title}
              </h2>
              <div className="text-offwhite space-y-4 text-sm sm:text-base leading-relaxed">
                {term.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
