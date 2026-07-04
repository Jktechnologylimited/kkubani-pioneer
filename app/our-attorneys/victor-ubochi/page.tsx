import Testimonials from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const VictorBio = () => {
  return (
    <div className="">
      <div className="container mx-auto py-12 px-6 pt-30 max-w-3xl ">
        <div className="flex justify-center items-center">
          <Image
            src="/our-attorneys/victor.PNG"
            alt="Victor Ubochi"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-center mb-4">Victor Ubochi</h2>
        <p className="text-gray-500 text-center text-lg mb-6">
          Senior associate
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg  text-gray-700 leading-relaxed">
            Victor Ubochi Esq., is a highly skilled and accomplished Legal
            Practitioner who was called to the Nigerian Bar in 2018, and holds a
            Masters degree in law from the prestigious Rivers State University.
            With over 5 years of legal experience, he has established himself as
            a prominent figure in the field, specializing in Banking Law and its
            relations, Litigation, Maritime claims, Criminal law, Civil Law and
            various other major areas of law.
            <br />
            <br /> Throughout his career, he has been extensively involved in
            settling high-ranking and sensitive legal claims for multinational
            corporations. His strong negotiation and analytical skills have
            consistently allowed him to achieve favorable outcomes for his
            clients. His ability to handle complex legal matters with precision
            and efficiency has earned him a reputation for being reliable and
            trustworthy. <br />
            <br />
            Empowered by his comprehensive knowledge of Banking Law, he has
            successfully represented clients in various financial institutions,
            ensuring compliance with regulatory requirements, drafting and
            reviewing legal documents, and providing advice on risk management.
            His expertise in this domain extends to areas such as credit
            facilities, debt restructuring, loan recovery, and corporate
            finance.
            <br />
            <br /> Victor's expertise in Maritime claims has solidified his
            reputation as a knowledgeable legal professional in this specialized
            area. His ability to navigate international laws and regulations
            governing maritime disputes, coupled with his strategic thinking,
            enables him to provide invaluable advice and representation to his
            clients in this complex field.
            <br />
            <br /> With his impressive track record, he is an asset to any
            organization seeking a legal practitioner who possesses a deep
            understanding of various areas of law, proven negotiation skills,
            and a dedication to achieving favorable outcomes for clients which
            is why we have great satisfaction having him under our employ at K.
            K. UBANI AND CO.
          </p>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default VictorBio;
