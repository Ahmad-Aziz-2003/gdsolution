import React from "react";
import Image from "next/image";

interface TestimonialData {
  id: number;
  profileImage: string;
  name: string;
  title: string;
  company: string;
  testimonial: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-yellow-400 fill-current" : "text-gray-600"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative p-6 rounded-2xl overflow-hidden border border-white/10 group">
      {/* Top Gradient Border */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1.3px] z-20 transition-all duration-300 group-hover:h-[3px] group-hover:w-4/5"
        style={{
          background:
            "linear-gradient(90deg, rgba(92, 95, 254, 0) 0%, #5C5FFE 50%, rgba(92, 95, 254, 0) 100%)",
        }}
      />

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/feature/cardbg.png"
          alt="Card background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 rounded-2xl"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header with profile and X icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-700"
              style={{
                boxShadow: "2px 4px 24px 0px #0055FF59",
              }}
            >
              <Image
                src={testimonial.profileImage}
                alt={`${testimonial.name} profile`}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-6 h-6">
            <Image
              src="/clients/iconx.svg"
              alt="X icon"
              width={20}
              height={20}
              className="opacity-80"
            />
          </div>
        </div>

        {/* Star Rating */}
        <StarRating rating={testimonial.rating} />

        {/* Testimonial Text */}
        <p className="text-offwhite text-sm leading-relaxed py-6 border-b border-white/10">
          "{testimonial.testimonial}"
        </p>

        {/* Author Info */}
        <div className="text-sm py-4">
          <p className="text-white font-medium">
            {testimonial.name} • {testimonial.title}
          </p>
          <p className="text-offwhite mt-1">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};


const Reviews: React.FC = () => {
  const testimonialsData: TestimonialData[] = [
    {
      id: 1,
      profileImage: "/clients/user(1).svg", // Replace with your actual profile images
      name: "John Smith",
      title: "CEO",
      company: "Innovate Solutions",
      testimonial:
        "GDSolutions not only delivered powerful AI integrations but also provided strategic insights that improved our overall efficiency.",
      rating: 5,
    },
    {
      id: 2,
      profileImage: "/clients/user(2).svg",
      name: "Emily Davis",
      title: "Product Manager",
      company: "Nexus Digital",
      testimonial:
        "They understood our complex requirements and built a user-friendly, high-performing platform that stands out in the market.",
      rating: 5,
    },
    {
      id: 3,
      profileImage: "/clients/user(3).svg",
      name: "David Lee",
      title: "Founder",
      company: "GreenLeaf Enterprises",
      testimonial:
        "Their innovative approach streamlined our operations, and the final product is both functional and visually stunning.",
      rating: 5,
    },
    {
      id: 4,
      profileImage: "/clients/user(4).svg",
      name: "Mark Thompson",
      title: "Creative Director",
      company: "PixelWorks Studio",
      testimonial:
        "We were blown away by the creative approach and attention to detail. They took our ideas and turned them into a stunning websites.",
      rating: 5,
    },
    {
      id: 5,
      profileImage: "/clients/user(5).svg",
      name: "Brian Clark",
      title: "Team Lead",
      company: "Mandiro Designs",
      testimonial:
        "They delivered a customized solution that addressed all of our business needs. The website is sleek, functional, and improved our customer experience.",
      rating: 5,
    },
    {
      id: 6,
      profileImage: "/clients/user(6).svg",
      name: "Daniel Carter",
      title: "Founder",
      company: "Fusion Studios",
      testimonial:
        "The team's dedication and attention to detail are unmatched. They delivered a beautifully designed website that perfectly reflects our brand.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4  min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
