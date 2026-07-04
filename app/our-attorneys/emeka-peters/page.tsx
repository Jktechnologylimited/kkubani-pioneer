import Testimonials from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const EmekaBio = () => {
  return (
    <div className="">
      <div className="container mx-auto py-12 px-6 pt-30 max-w-3xl ">
        <div className="flex justify-center items-center">
          <Image
            src="/our-attorneys/emeka.PNG"
            alt="Emeka M. Peters"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-center mb-4">Emeka M. Peters</h2>
        <p className="text-gray-500 text-center text-lg mb-6">
          Senior associate
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg  text-gray-700 leading-relaxed">
            Emeka is a Member of the Firm’s Property Law and Real estate
            Practice. He is an ambitious lawyer who constantly seeks and enjoys
            practical challenges in the legal profession. He has a special
            penchant for Real Estate, Estate Management and general Property
            Law.
            <br />
            <br /> His core areas of practice also include Energy Law, Business
            Law, Aviation Law, Debt Recovery, Banking and General Commercial
            Law, Alternative Dispute Resolution, Intellectual Property Law as
            well as Communication Law. Since he joined the Firm, he has worked
            on several litigation matters in adverse areas of practice.
            <br />
            <br /> He obtained his LL.B. from the University of Uyo, Uyo, Akwa
            Ibom State, and his B.L., Nigerian Law School Abuja. He is also a
            memeber of the Nigerian Bar Association, Port Harcourt Branch.
          </p>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default EmekaBio;
