import React from "react";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

const Navbar = () => {
  return (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-white/10 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/logo.png"
                alt="GDSolutions.ai"
                className=" h-12 md:h-14 cursor-pointer"
              
              />
            </Link>
          </div>

                   {/* Contact Button */}
          <div>
           
              <Button>Contact Us</Button>
      
          </div>
 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
