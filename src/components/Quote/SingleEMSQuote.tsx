import { CircleIcon, VerifiedIcon } from "lucide-react";
import DasboardLayout from "../../pages/Dasboard/layout";
import Button from "../ui/Buttons";
import ChatCircleIcon from "../icons/ChatCircleIcon";
import ChatIcon from "../icons/ChatIcon";
import LoaderIcon from "../icons/LoaderIcon";
import { QuoteType } from "@/__generated__/graphql";
import { getTurnTimeLabel } from "@/utils/helpers/getTurnTimeLabel";
import AngleLeftIcon from "../icons/AngleLeftIcon";
import { useNavigate, useParams } from "react-router-dom";
import useSingleQuote from "@/pages/Dasboard/ems/quote/hooks/get-single-quote";

const SingleEMSQuote = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { quote, isLoading } = useSingleQuote(id || "");

  console.log("quote", quote);

  return (
    <DasboardLayout>
      {isLoading && (
        <p className="py-20 text-center h-[60vh] flex justify-center items-center">
          <LoaderIcon />
        </p>
      )}
      <div className="flex bg-white items-center my-5 gap-3 py-3">
        <div
          className="border-r flex items-center cursor-pointer gap-2"
          onClick={() => navigate(-1)}
        >
          <AngleLeftIcon />
          <p className="text-[#667185] pr-4 font-[16px]">Back</p>
        </div>
        <h4 className="text-[24px]">Request for Quote</h4>
      </div>
      {/* Quote Details */}
      {!isLoading && quote && (
        <>
          <div className="grid mb-8">
            <div className="flex flex-wrap items-center gap-2 col-span-2">
              <span className="bg-[#FEE1A8] text-[#001633] text-sm px-9 py-3 rounded-full font-medium">
                {quote?.title}
              </span>
              <span className="bg-gray-100 text-gray-600 text-sm px-9 py-3 rounded-full">
                {new Date(quote?.createdAt).toLocaleDateString()}
              </span>
              <span className="bg-gray-100 text-gray-600 text-sm px-9 py-3 rounded-full">
                {quote?.quoteType === QuoteType.FixedQuote ? "Fixed" : "Open"}
              </span>
              <div className="flex ml-auto gap-2">
                <Button text={"Submit Quote"} width="w-full" onClick={() => navigate(`/ems/manage-quote/${id}/bid`)} />
              </div>
            </div>
            {quote?.hasNDA && (
              <div className="flex flex-col md:flex-row gap-2">
                <div className="w-full">
                  <Button text={"Submit Quote"} width="w-full" />
                </div>
                <div className="w-full">
                  <Button
                    text={"Save for later ❤️"}
                    background="bg-transparent"
                    width="w-full"
                    color="text-[#EB5017]"
                    styles="border border-[#EB5017]"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="grid md:grid-cols-3  w-full gap-6 justify-between">
            {/* Left section */}
            <div className="flex-1 space-y-6 w-full col-span-2">
              {/* Tabs */}
              <div className="md:px-0 px-5">
                <nav className="flex  ">
                  <span className="text-[#F56630] border-b-2 border-[#F56630] py-2 font-medium text-[14px] cursor-pointer">
                    Project Overview
                  </span>
                  <span className="text-gray-500 py-2 px-6 border-b border-gray-200 font-medium text-[14px] cursor-pointer">
                    Messages
                  </span>
                </nav>
              </div>

              {/* Title & Description */}
              {/* <div>
                <h1 className="text-2xl font-bold text-gray-800">Goldmansachs</h1>
                <p className="text-gray-600 mt-2">
                  Every day, we convene the sharpest minds in finance to deliver the excellence of
                  Goldman Sachs. Our sole focus is serving clients by harnessing the firm's
                  resources, insights, relationships, and competitive advantages to help solve the
                  most complex challenges and drive superior results.
                </p>
              </div> */}

              {/* About Project */}
              <div className="md:px-0 px-5">
                <h2 className="text-lg font-semibold text-gray-800">About Project</h2>
                <p className="text-gray-600 mt-2">{quote?.description}</p>
              </div>

              {/* Details Table */}
              {quote?.userSignedNDA && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Details</h3>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-2 gap-4 p-4 text-sm border-b">
                      <span className="text-gray-500">Quote Materials</span>
                      <span className="text-gray-700">{quote?.quoteMaterials.join(" | ")}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4 text-sm border-b">
                      <span className="text-gray-500">Project Type</span>
                      <span className="text-gray-700">{quote?.title}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4 text-sm border-b">
                      <span className="text-gray-500">Desired Turn Time</span>
                      <span className="text-gray-700">
                        {getTurnTimeLabel(quote?.turnTime || 0)}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-4 text-sm">
                      <span className="text-gray-500">Location</span>
                      {/* <span className="text-gray-700">Arizona, USA</span> */}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right section */}
            <div className="w-full  space-y-4 border-l pl-5 h-[60vh] flex flex-col justify-between">
              {/* Bid Info */}
              <div>
                {quote?.userSignedNDA && (
                  <div className="space-y-3 ">
                    <div className="flex justify-between items-center">
                      <div>
                        <span>Bid Range</span>
                      </div>
                      <div className=" bg-[#C6DDF7] text-[#1671D9] px-4 py-2 rounded-md text-[16px] font-medium w-40 text-center">
                        <span>{quote?.budget ?? "_"}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span>No. of Bids</span>
                      </div>
                      <div className=" bg-[#C6DDF7] text-[#1671D9] px-4 py-2 rounded-md text-[16px] font-medium w-40 text-center ">
                        <span>{quote?.bids?.length}</span>
                      </div>
                    </div>
                  </div>
                )}
                {/* sign NDA */}
                <div className="bg-white border rounded-lg p-4 mb-9">
                  <p className="text-[20px] font-semibold text-[#001633] mb-5">Sign an NDA</p>
                  <p className="text-[16px] text-gray-700">
                    Please sign an NDA to view more details about this project.
                  </p>
                  <Button text={"Sign NDA"} width="w-full" styles="w-full mt-9" />
                </div>
                {/* Contact */}
                <div className="bg-white border rounded-lg p-4 mt-9">
                  <p className="text-sm font-semibold text-[#001633]">Contact Person</p>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-gray-700">
                      {quote?.user.firstName + " " + quote?.user.lastName}
                    </p>
                    <div className="w-8 h-8 border border-red-500 rounded-full flex items-center justify-center text-red-500 text-xl">
                      <ChatCircleIcon />
                    </div>
                  </div>
                </div>
              </div>
              {quote?.userSignedNDA && (
                <div>
                  {/* Verifications */}
                  <div className="space-y-1 text-sm text-gray-700">
                    <p className="flex items-center gap-2">
                      Payment method verified{" "}
                      <div className="text-[#0F973D]">
                        <VerifiedIcon />
                      </div>
                    </p>
                    <p className="flex items-center gap-2">
                      Phone number verified
                      <div className="text-[#0F973D]">
                        <VerifiedIcon />
                      </div>
                    </p>
                  </div>

                  {/* Reactions */}
                  <div className="flex gap-3 text-sm mt-2">
                    <span className="bg-[white] border-[#F0F2F5] px-3 border rounded py-2 flex items-center gap-1">
                      😁🚀 <span className="font-medium">10 Reactions</span>
                    </span>
                    <span className=" bg-[white] border-[#F0F2F5] px-3 border rounded py-2   flex items-center gap-1">
                      <ChatIcon />
                      <span className="font-medium">12 Replies</span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          {quote?.userSignedNDA && (
            <div className="bg-white border rounded-xl p-4 mt-9">
              <h4 className="text-[16px] font-semibold mb-5">Track RFQ</h4>

              <hr />
              <ul className="flex gap-2 justify-between my-9">
                <li className="w-full">
                  <div className="w-full border h-1 bg-[#E4E7EC] rounded-full"></div>{" "}
                  <div className="flex text-[#667185] text-[12px] items-center mt-1 gap-1">
                    <CircleIcon size={"14"} />
                    Sign NDA
                  </div>
                </li>
                <li className="w-full">
                  <div className="w-full border h-1 bg-[#E4E7EC] rounded-full"></div>{" "}
                  <div className="flex text-[#667185] text-[12px] items-center mt-1 gap-1">
                    <CircleIcon size={"14"} />
                    Download Files
                  </div>
                </li>
                <li className="w-full">
                  <div className="w-full border h-1 bg-[#E4E7EC] rounded-full"></div>{" "}
                  <div className="flex text-[#667185] text-[12px] items-center mt-1 gap-1">
                    <CircleIcon size={"14"} />
                    Submit a Quote
                  </div>
                </li>
              </ul>
              <hr className="mb-5" />
            </div>
          )}
        </>
      )}
    </DasboardLayout>
  );
};
export default SingleEMSQuote;
