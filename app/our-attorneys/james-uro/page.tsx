import Testimonials from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const JamesBio = () => {
  return (
    <div className="">
      <div className="container mx-auto py-12 px-6 pt-30 max-w-3xl ">
        <div className="flex justify-center items-center">
          <Image
            src="/our-attorneys/james.PNG"
            alt="Emeka M. Peters"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-center mb-4">James E.Uro</h2>
        <p className="text-gray-500 text-center text-lg mb-6">
          Litigation manager
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg  text-gray-700 leading-relaxed">
            James E. Uro, Esq. is a highly accomplished legal professional with
            a strong academic background and a passion for the practice of law.
            Graduating with First Class Honours from the Nigerian Law School, he
            has consistently demonstrated exceptional skills and expertise in
            various areas of law, particularly in Corporate/Commercial Law,
            Asset Recovery, Energy Law, Competition Law, Tax Law, Property Law,
            Election Petition, and Litigation. He holds a Master's Degree in
            Corporate/Commercial Law.
            <br />
            <br /> James E. Uro is known for his dedication to his clients'
            interests, meticulous attention to detail, and ability to unravel
            complex legal challenges. He is an avid learner who stays updated
            with the latest legal developments and continuously seeks innovative
            approaches to provide effective legal solutions.
            <br />
            <br /> With his extensive knowledge and expertise, James E. Uro,
            Esq. is a valuable asset to any legal team or organization seeking a
            skilled and versatile legal professional.
          </p>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default JamesBio;
