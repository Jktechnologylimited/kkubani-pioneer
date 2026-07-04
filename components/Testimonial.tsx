import React from "react";

const testimonials = [
  {
    quote:
      "We have been working with K. K. Ubani & Co. for several years now, and we are continually impressed with their professionalism and expertise in the legal field. Their dedication to providing top-notch legal services has been instrumental in helping us navigate complex legal matters. We highly recommend K. K. Ubani & Co. to any organization in need of exceptional legal representation.",
    
    company: "ECOBANK Nigeria Limited:",
  },
  {
    quote:
      "K. K. Ubani & Co. has been a valuable legal partner for Polaris Bank Limited. Their team's in-depth knowledge of the law and their strategic approach to handling legal issues have been crucial in achieving successful outcomes for our organization. We appreciate their commitment to excellence and their unwavering support.",

    company: "Polaris Bank Limited",
  },
  {
    quote:
      "K. K. Ubani & Co. has consistently delivered exceptional legal services to  Industrial Training Fund. Their team's expertise, professionalism, and commitment to excellence have made them a trusted legal partner for our organizations. We are grateful for their guidance and support, and we highly recommend K. K. Ubani & Co. to anyone in need of expert legal representation.",
  
    company: "Industrial Training Fund.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        What They Say About Us
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg">
            <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
          
            <p className="text-sm text-gray-500">{testimonial.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
