import { useState, useEffect } from "react";
import { CircleDollarSign } from "lucide-react";
import Button from "../ui/Buttons";
import ChatCircleIcon from "../icons/ChatCircleIcon";
import HeartIcon from "../icons/HeartIcon";
import { useNavigate } from "react-router-dom";
import { useFavoriteQuote } from "@/grahpql/hooks/useFavoriteQuote";

/* ================= TYPES ================= */

interface UserProp {
  firstName: string;
  lastName: string;
}

interface QuoteCardProps {
  quoteId: string;
  title: string;

  quoteMaterials?: string[];
  turnTime?: number;
  budget?: number;
  location?: string;
  quantity?: string;

  user?: UserProp;

  price?: number;
  status?: string;

  isSubmitted?: boolean;
  isSaved?: boolean;
  boards?: number;

  onFavoriteChanged?: () => void;
}

/* ================= COMPONENT ================= */

const QuoteCard = ({
  quoteId,
  title,
  quoteMaterials = [],
  turnTime,
  budget,
  location,
  user,
  price,
  isSubmitted,
  isSaved,
  boards,
  onFavoriteChanged,
}: QuoteCardProps) => {
  const navigate = useNavigate();
  const { addToFavorite, removeFromFavorite } = useFavoriteQuote();

  const [isFav, setIsFav] = useState<boolean>(!!isSaved);

  useEffect(() => {
    setIsFav(!!isSaved);
  }, [isSaved]);

  /* ================= FAVORITE ================= */

  const toggleFavorite = async () => {
    try {
      if (isFav) {
        await removeFromFavorite(quoteId);
        setIsFav(false);
      } else {
        await addToFavorite(quoteId);
        setIsFav(true);
      }

      onFavoriteChanged?.();
    } catch (err) {
      console.error("Favorite toggle failed", err);
    }
  };

  const fullName = user
    ? `${user.firstName} ${user.lastName?.slice(0, 1)}`
    : "";

  /* ================= UI ================= */

  return (
    <div className="border border-[#E6EAF0] rounded-xl bg-white shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden">

      {/* ===== Header strip ===== */}
      <div className="bg-[#EEF4FF] px-4 py-2 flex justify-between items-center">
        <h3 className="text-sm font-semibold">
          {fullName && `${fullName} | `}{title}
        </h3>

        {!isSubmitted && (
          <div onClick={toggleFavorite} className="cursor-pointer">
            <HeartIcon color={isFav ? "red" : "#9CA3AF"} />
          </div>
        )}

        {isSubmitted && (
          <span className="text-green-600 text-xs font-semibold">
            Bid Submitted
          </span>
        )}
      </div>

      {/* ===== Body ===== */}
      <div className="p-4 space-y-2 text-sm">

        {/* Title */}
        <p className="font-medium text-[#0A090B]">{title}</p>

        {/* Materials */}
        {quoteMaterials.length > 0 && (
          <p className="text-blue-600 font-medium text-xs">
            {quoteMaterials.join(" | ")}
          </p>
        )}

        {/* $ Open / Price */}
        <div className="flex items-center gap-1 text-gray-700">
          <CircleDollarSign size={16} />
          <span>
            {price !== undefined
              ? `$${price}`
              : budget && budget > 0
                ? `$${budget}`
                : "Open"}
          </span>
        </div>

        {/* Qty • weeks • location */}
        {(boards || turnTime || location) && (
          <p className="text-xs text-gray-500">
            Qty: {boards ?? "N/A boards"} • {turnTime ?? 2} Days • {location ?? "USA"}
          </p>



        )}
      </div>

      {/* ===== Footer ===== */}
      <div className="px-4 pb-4 flex items-center gap-3">
        <Button
          text="View Details"
          background="bg-transparent"
          width="w-full"
          color="text-[#2563EB]"
          styles="border border-[#2563EB]"
          handleClick={() => navigate(`/ems/manage-quote/${quoteId}/bid`)}
        />

        {!isSubmitted && <ChatCircleIcon />}
      </div>
    </div>
  );
};

export default QuoteCard;
