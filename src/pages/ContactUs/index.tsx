import Navbar from "@/components/Layout/Navbar";
import Footer from "../Talent/components/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-[36px] font-bold text-[#101928]">
            Get in Touch
          </h1>
          <p className="mt-4 text-[18px] text-[#667185] max-w-2xl mx-auto">
            Have questions about FabSpace AI, partnerships, or procurement workflows?
            Our team is here to help you.
          </p>
        </div>

        {/* Contact Card */}
        <div className="mt-16 max-w-2xl mx-auto bg-white border rounded-xl shadow-sm p-10 text-center">
          <div className="mb-6">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#FFF4ED] flex items-center justify-center">
              <svg
                className="w-6 h-6 text-[#CC400C]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m8 0l-4 4m4-4l-4-4"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-[22px] font-semibold text-[#101928]">
            Email Our Support Team
          </h2>

          <p className="mt-3 text-[#667185] text-[16px]">
            We typically respond within 24 hours.
          </p>

          <a
            href="mailto:info.fabspaceai@gmail.com"
            className="inline-block mt-6 text-[#CC400C] text-[18px] font-medium hover:underline"
          >
            info.fabspaceai@gmail.com
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;