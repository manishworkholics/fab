import { GetQuoteQuery } from "@/__generated__/graphql";
import PreviewCard from "./Preview";
import LoaderIcon from "../icons/LoaderIcon";

export default function QuoteView({ data, isLoading }: { data: GetQuoteQuery["quote"] | undefined, isLoading: boolean }) {
  return (
    <div>
      <div className="border-t py-9 mt-9 flex flex-col gap-4 md:flex-row justify-between">
        <div>
          <ul className="flex items-center gap-3">
            <li
              className={`cursor-pointer flex w-[170px] justify-center items-center gap-2 py-4 border-b-4 border-[#F56630] text-[#F56630] `}
            >
              <span className={`text-[#F56630] font-bold`}>Quote</span>
              <span className={`flex items-center justify-center rounded-full px-4 py-2 w-5 h-5 text-[#F56630] bg-[#F0F2F5]`}>
                {1}
              </span>
            </li>
            <li
              className={`cursor-pointer flex w-[170px] justify-center items-center gap-2 py-4 border-b-4  `}
            >
              <span className={`text-[#000000]`}>Discussion</span>
              <span className={`flex items-center justify-center rounded-full px-4 py-2 w-5 h-5 bg-[#F0F2F5]`}>
                {0}
              </span>
            </li>
          </ul>
        </div>

      </div>
      {isLoading && (
        <p className="py-20 text-center">
          <LoaderIcon />
        </p>
      )}
      {!isLoading && (
        <PreviewCard
          title={data?.title || ""}
          quoteMaterials={data?.quoteMaterials ? "Yes" : "No"}
          quoteMaterialsList={data?.quoteMaterials || []}
          turnTime={data?.turnTime || 0}
          description={data?.description || ""}
          quoteFiles={data?.quoteFiles ?? []}
          isEMSId={null}
          isNdaRequired={data?.hasNDA}
          disabled={true}
        >
          <div className="flex gap-4  flex-col md:flex-row">
            {data?.quoteType === "OPEN_QUOTE" && (
              <div className={`md:w-1/2 p-4 border rounded-lg cursor-pointer border-[##D0D5DD]`}>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-5 h-5 border rounded-full flex items-center justify-center  border-[#F56630]`}
                  >
                    <div className="w-3 h-3 bg-[#F56630] rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold">Open Quote</h3>
                </div>
                <ul className="mt-2 text-sm text-gray-600 space-y-1 list-disc ml-9">
                  <li>Allow service providers to bid for this project.</li>
                  <li>Request quotes within hours or even minutes.</li>
                  <li>Compare rates, timeframes and reviews.</li>
                  <li>Pick your winning service provider at any time.</li>
                </ul>
              </div>
            )}
            {data?.quoteType === "FIXED_QUOTE" && (
              <div className={`md:w-1/2 p-4 border rounded-lg cursor-pointer border-[#D0D5DD]`}>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-5 h-5 border rounded-full flex items-center justify-center border-[#F56630]`}
                  >
                    <div className="w-3 h-3 bg-[#F56630] rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold">Fixed Quote</h3>
                </div>
                <ul className="mt-2 text-sm text-gray-600 space-y-1 list-disc ml-9">
                  <li>Allow service providers to bid for this project.</li>
                  <li>Request quotes within hours or even minutes.</li>
                  <li>Compare rates, timeframes and reviews.</li>
                  <li>Pick your winning service provider at any time.</li>
                </ul>
              </div>
            )}
          </div>
        </PreviewCard>
      )}
    </div>
  )
}