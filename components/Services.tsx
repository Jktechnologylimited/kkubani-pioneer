
"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const services = [
  {
    title: "Corporate",
    image: "/areas/corporate.jpg",
    description:
      "Expert legal guidance for corporate governance and compliance.",
    bioUrl: "law-firm-services/corporate",
  },
  {
    title: "Commercial",
    image: "/areas/commercial.jpg",
    description:
      "Legal solutions for commercial transactions and trade agreements.",
    bioUrl: "law-firm-services/commercial",
  },
  {
    title: "Energy and Natural Resources",
    image: "/areas/energy.jpg",
    description:
      "Advising on energy regulations and natural resource management.",
    bioUrl: "law-firm-services/energy-and-natural-resources",
  },
  {
    title: "Telecommunication",
    image: "/areas/telecom.jpg",
    description:
      "Legal counsel for telecom operators and regulatory compliance.",
    bioUrl: "law-firm-services/telecommunication",
  },
  {
    title: "Aviation",
    image: "/areas/aviation.jpg",
    description:
      "Expertise in aviation law, compliance, and regulatory matters.",
    bioUrl: "law-firm-services/aviation",
  },
  {
    title: "Taxation",
    image: "/areas/taxation.jpg",
    description: "Comprehensive tax advisory and compliance services.",
    bioUrl: "law-firm-services/taxation",
  },
  {
    title: "Commercial Litigation",
    image: "/areas/litigation.jpg",
    description: "Handling complex commercial disputes effectively.",
    bioUrl: "law-firm-services/commercial-litigation",
  },
  {
    title: "Alternative Dispute Resolution",
    image: "/areas/adr.webp",
    description:
      "Expert mediation and arbitration services for dispute resolution.",
    bioUrl: "law-firm-services/alternative-dispute-resolution",
  },
  {
    title: "Project Finance",
    image: "/areas/projectfinance.jpg",
    description: "Structuring and financing large-scale projects efficiently.",
    bioUrl: "law-firm-services/project-finance",
  },
  {
    title: "Shipping and Maritime",
    image: "/areas/shipping.jpg",
    description:
      "Legal services for maritime businesses and shipping operations.",
    bioUrl: "law-firm-services/shipping-and-maritime",
  },
  {
    title: "Foreign Investment",
    image: "/areas/investment.jpg",
    description:
      "Guiding foreign investors through legal frameworks and compliance.",
    bioUrl: "law-firm-services/foreign-investment",
  },
  {
    title: "Banking and Finance",
    image: "/areas/banking.jpg",
    description:
      "Advisory services for banking regulations and financial transactions.",
    bioUrl: "law-firm-services/banking-and-finance",
  },
  {
    title: "Real Estate",
    image: "/areas/realestate.jpg",
    description:
      "Legal expertise in property transactions and real estate development.",
    bioUrl: "law-firm-services/real-estate",
  },
  {
    title: "Labour / Employment",
    image: "/areas/labour.jpg",
    description:
      "Providing legal support for employment laws and workplace policies.",
    bioUrl: "law-firm-services/labour-employment",
  },
  {
    title: "Intellectual Property",
    image: "/areas/ip.jpg",
    description: "Protecting trademarks, patents, and copyrights effectively.",
    bioUrl: "law-firm-services/intellectual-property",
  },
  // {
  //   title: "Entertainment",
  //   image: "/areas/entertainment.jpg",
  //   description:
  //     "Legal counsel for media, entertainment, and creative industries.",
  //   bioUrl: "law-firm-services/entertainment",
  // },
];

export default function OurServices() {
  return (
    <div
      className="py-16 px-8"
      style={{
        backgroundImage: "url(/servicesbg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl text-white font-bold text-center mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-1/3">
              <Image
                src={service.image}
                alt={service.title}
                width={150}
                height={150}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="w-2/3 p-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <Link href={service.bioUrl} rel="noopener noreferrer ">
                <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 shadow-sm transition-colors">
                  Learn more
                </Button>
              </Link>
            </div>
            <div> 
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
