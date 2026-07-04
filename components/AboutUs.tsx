import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="text-center py-12">
      <h2 className="text-3xl font-bold mb-8">About Us</h2>
      <div className="flex flex-col md:flex-row justify-center md:gap-4 items-center">
        {/* Card 1: Principal Partner's Picture */}
        <div className="w-full md:w-1/3">
          <Image
            src="/kennethkelechiubani.PNG" // replace with actual path to the image
            alt="Principal Partner"
            width={300}
            height={300}
            className="object-cover mx-auto mb-4 "
          />
          <h3 className="text-xl font-semibold">Principal Partner</h3>
        </div>
<br/>
        {/* Card 2: Description and Signature */}
        <div className="w-full md:w-1/3">
          <div className=" grid gap-5 text-md py-6 text-gray-700 mb-6">
            <p>
              K. K. Ubani & Co. is a full service commercial and dispute
              resolution law firm with the requisite expertise to meet our
              individual client’s legal needs. In addition, our deep knowledge
              of Nigeria’s unique business environment enhances clients’
              attainment of their set business goals. We merge legal expertise,
              industrial and wide political connections in pursuit of our
              clients’ best business interest while keeping with international
              best practices.
            </p>
            <p>
              We work closely with our clients throughout every stage of what is
              usually a long and tough ordeal so that they can accomplish their
              goals and desires. With our combined experience of handling
              complex trials and litigations for over 30 years, you can trust us
              to be forthright and diligent in meeting your needs.
            </p>
            <p>
              At K. K. Ubani & Co., we pride ourselves on our goal to always
              undertake legal services for our wide range of clientele at its
              optimum and in the process keeping to the highest ethical
              standards. We not only meet clients’ expectations, we exceed them.
            </p>
          </div>
          <div className="text-right">
            <p className="italic">Kenneth K. Ubani</p>
            <p className="italic">Principal Partner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
