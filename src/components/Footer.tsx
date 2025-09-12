import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-14 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          {/* Left Section - Logo + Text */}
          <div className="space-y-5">
            <div>
              <Image
                src="/logo.png"
                alt="GDSolutions.ai"
                width={240} // bigger logo
                height={70}
                className="h-auto"
              />
            </div>
            <p className="text-white text-base max-w-sm leading-relaxed">
              AI-powered automation for <br />
              smarter, faster business
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-6 gap-6">
          <p className="text-offwhite text-sm text-center sm:text-left">
            © 2025 GDSolutions.ai. All Rights Reserved.
          </p>

          {/* Right Section - Links */}
          <div className="flex gap-8">
            <Link
              href="/terms"
              className="text-offwhite hover:text-white transition-colors duration-200 text-sm"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="text-offwhite hover:text-white transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
