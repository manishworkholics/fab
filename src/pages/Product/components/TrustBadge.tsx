const TrustBadge = () => {
  return (
    <div className="mx-auto mb-32 max-w-full sm:mt-40">
      <div className="relative   overflow-hidden px-6 py-24 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-[#3E3838] sm:text-4xl">
          Trust Badges
        </h2> 
        <div className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
          <img
            alt="Reform"
            src="images/partners-logo/secure-aws-infrastructure.png"
            width={158}
            height={48}
            className="col-span-2 max-h-[6rem] w-full object-contain  lg:col-span-1"
          />{" "}
          <img
            alt="Transistor"
            src="images/partners-logo/9001-compliant.png"
            width={158}
            height={48}
            className="col-span-2 max-h-[6rem] w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src="images/partners-logo/27001-compliant.png"
            width={258}
            height={148}
            className="col-span-2 max-h-[6rem] w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src="/images/partners-logo/soc-2-transparent.png"
            width={158}
            height={48}
            className="col-span-2 max-h-[6rem] w-full bg-black object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src="images/partners-logo/Logo_IPC.png"
            width={158}
            height={48}
            className="col-span-2 max-h-[6rem] w-full object-contain   lg:col-span-1"
          />
        </div>
        <div aria-hidden="true" className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl">
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustBadge;
