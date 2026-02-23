import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DasboardLayout from "@/pages/Dasboard/layout";

import { useFavoriteQuote } from "@/grahpql/hooks/useFavoriteQuote";
import { useMyFavoriteQuotes } from "@/grahpql/hooks/useMyFavoriteQuotes";
import { useMyBids } from "@/grahpql/hooks/useMyBids";
import useSingleQuote from "@/pages/Dasboard/ems/quote/hooks/get-single-quote";

import QuoteBidForm from "@/components/QuoteBidForm";
import LoaderIcon from "@/components/icons/LoaderIcon";
import { QuoteType } from "@/__generated__/graphql";

const NA = (v: any) => (v === null || v === undefined || v === "" ? "N/A" : v);

export default function EmsBidPage() {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { quote, isLoading } = useSingleQuote(id!);

  const { bids } = useMyBids();
  const { addToFavorite, removeFromFavorite } = useFavoriteQuote();
  const { favorites, refetch } = useMyFavoriteQuotes();

  const [showBidForm, setShowBidForm] = useState(false);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (!quote) return;
    setIsFav(favorites.some((f) => f.quoteId === quote.quoteId));
  }, [favorites, quote]);

  const toggleFavorite = async () => {
    if (!quote) return;

    isFav
      ? await removeFromFavorite(quote.quoteId!)
      : await addToFavorite(quote.quoteId!);


    setIsFav(!isFav);
    refetch();
  };

  if (isLoading)
    return (
      <DasboardLayout>
        <div className="py-40 flex justify-center">
          <LoaderIcon />
        </div>
      </DasboardLayout>
    );

  if (!quote) return null;

  const alreadyBid = bids.some((b) => b.quote.quoteId === quote.quoteId);

  if (showBidForm)
    return <QuoteBidForm quote={quote} onBack={() => setShowBidForm(false)} />;

  return (
    <DasboardLayout>
      <div className="p-6 space-y-6">

        {/* ================= HEADER ================= */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/ems/manage-quote")}
            className="border px-4 py-2 rounded-lg text-sm"
          >
            ← Back to Quotes
          </button>

          <h1 className="text-2xl font-semibold">{quote.title}</h1>

          <span className="bg-gray-100 text-xs px-3 py-1 rounded-full">
            {quote.quoteType === QuoteType.FixedQuote ? "Fixed" : "Open"}
          </span>
        </div>

        {/* ================= INFO CARD ================= */}
        {/* ================= PROJECT INFO ================= */}
        <div className="bg-white border rounded-xl shadow-sm p-6 space-y-6">

          <h3 className="font-semibold text-lg">Project Information</h3>

          <div className="grid grid-cols-5 gap-10">

            <Info label="Quote ID" value={quote.quoteId} />
            <Info label="Budget Range" value={`$${quote.budget || 0}`} />
            <Info label="Posted Date" value={new Date(quote.createdAt).toLocaleDateString()} />
            <Info label="Total Bids" value={quote.bids?.length ?? 0} />

            <Info label="Category" value="Open" />

            <Info label="Number of Boards" value={`${quote.pcbBoards || "N/A"} `} />
            <Info label="Turn Time" value={`${quote.turnTime || "N/A"} Days`} />
            <Info label="Location" value="California, USA" />

            {/* Services badges */}
            <div>
              <p className="text-xs text-gray-500 mb-1">Services</p>
              <div className="flex gap-2">
                {quote.quoteMaterials?.map((m: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full border bg-gray-50"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>


        {/* ================= FILES ================= */}
        {/* ================= FILES ================= */}
        <div className="bg-white border rounded-xl shadow-sm p-4 flex gap-4 flex-wrap">

          <FileButton
            color="blue"
            text="Gerber Files"
            files={quote.quoteFiles}
          />
          <FileButton color="green" text="BOM" />
          <FileButton color="purple" text="Assembly Drawings" />
          <FileButton color="orange" text="Pick & Place" />

        </div>


        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">

            {/* Description */}
            <Card title="Project Description">
              <p className="text-gray-700">{NA(quote.description)}</p>

              <div className="grid grid-cols-2 gap-8 mt-6">
                <List title="Technical Requirements" items={[]} />
                <List title="Deliverables" items={[]} />
              </div>
            </Card>

            {/* Timeline */}
            <Card title="Project Timeline & Milestones">

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <p className="text-xs text-gray-500">Expected Delivery Date</p>
                <p className="text-lg font-semibold text-orange-600">N/A</p>
              </div>

              <Timeline label="PCB Manufacturing" week="Week 1-2" color="bg-blue-500" />
              <Timeline label="Assembly" week="Week 3-4" color="bg-green-500" />
              <Timeline label="Testing" week="Week 5-6" color="bg-purple-500" />
            </Card>
          </div>

          {/* RIGHT */}
          <div>
            <Card title="Action Required">
              <button
                disabled={alreadyBid}
                onClick={() => setShowBidForm(true)}
                className="w-full bg-orange-600 text-white py-3 rounded-lg mb-3 font-medium disabled:bg-gray-300"
              >
                {alreadyBid ? "Bid Submitted" : "Submit Bid"}
              </button>

              <button
                onClick={toggleFavorite}
                className="w-full border border-orange-600 text-orange-600 py-3 rounded-lg"
              >
                {isFav ? "Remove from Favorites" : "Save to Favorites"}
              </button>
            </Card>
          </div>
        </div>
      </div>
    </DasboardLayout>
  );
}


/* ================= COMPONENTS ================= */

const Card = ({ title, children }: any) => (
  <div className="bg-white border rounded-xl shadow-sm p-6">
    <h2 className="font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

const Info = ({ label, value }: any) => (
  <div>
    <p className="text-xs text-gray-500">{label}</p>
    <p className="font-semibold">{value}</p>
  </div>
);



const List = ({ title, items }: any) => (
  <div>
    <p className="font-medium mb-2">{title}</p>
    {items.length ? (
      items.map((i: string, idx: number) => <p key={idx}>• {i}</p>)
    ) : (
      <p className="text-gray-400">N/A</p>
    )}
  </div>
);

const Timeline = ({ label, week, color }: any) => (
  <div className="flex items-center justify-between bg-gray-50 rounded p-3 mb-2">
    <div className="flex items-center gap-3">
      <div className={`w-2 h-2 rounded-full ${color}`} />
      <span>{label}</span>
    </div>
    <span className="text-sm text-gray-500">{week}</span>
  </div>
);

const FileButton = ({ text, color, files = [] }: any) => {
  const colors: any = {
    blue: "border-blue-300 text-blue-600 bg-blue-50",
    green: "border-green-300 text-green-600 bg-green-50",
    purple: "border-purple-300 text-purple-600 bg-purple-50",
    orange: "border-orange-300 text-orange-600 bg-orange-50",
  };

  const handleDownload = (fileName: string) => {
    const baseUrl = import.meta.env.VITE_FILE_BASE_URL; 
    // example: http://localhost:4000/uploads

    const fileUrl = `${baseUrl}/${fileName}`;

    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!files.length)
    return (
      <button
        disabled
        className={`px-5 py-2 rounded-lg border text-sm font-medium opacity-50 ${colors[color]}`}
      >
        📄 {text}
      </button>
    );

  return (
    <>
      {files.map((file: string, index: number) => (
        <button
          key={index}
          onClick={() => handleDownload(file)}
          className={`flex items-center gap-2 px-5 py-2 rounded-lg border text-sm font-medium ${colors[color]} hover:shadow-sm`}
        >
          📄 {file}
          <span className="ml-2">⬇</span>
        </button>
      ))}
    </>
  );
};