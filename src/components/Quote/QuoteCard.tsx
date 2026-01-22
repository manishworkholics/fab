import { useState, useEffect } from "react";
import { Briefcase, CircleDollarSign, StarIcon } from "lucide-react";
import Button from "../ui/Buttons";
import ChatCircleIcon from "../icons/ChatCircleIcon";
import HeartIcon from "../icons/HeartIcon";
import { useNavigate } from "react-router-dom";
import { useFavoriteQuote } from "@/grahpql/hooks/useFavoriteQuote";


interface userProp {
  firstName: string;
  lastName: string;
}

interface QuoteCardProps {
  quoteId: string;
  title: string;

  // PM browse fields (optional for EMS tabs)
  company?: string;
  location?: string;
  quantity?: string;
  user?: userProp;
  budget?: number;
  rating?: string;
  quotesCount?: number;
  quoteMaterials?: string[];

  // EMS fields
  status?: string;
  price?: number;
  submittedAt?: string;
  createdAt?: string;

  // UI flags
  isSubmitted?: boolean;
  isSaved?: boolean;
  onFavoriteChanged?: () => void;
}

const QuoteCard = ({
  title,
  location,
  quantity,
  user,
  budget,
  rating,
  quotesCount,
  quoteId,
  quoteMaterials,
  isSubmitted,
  isSaved,
  price,
  onFavoriteChanged,
}: QuoteCardProps) => {

  const { addToFavorite, removeFromFavorite } = useFavoriteQuote();
  const [isFav, setIsFav] = useState(!!isSaved);

  useEffect(() => {
    setIsFav(!!isSaved);
  }, [isSaved]);

  const navigate = useNavigate();

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

  return (
    <div className="border border-[#F0F2F5] rounded-xl p-4 bg-white flex flex-col justify-between shadow-sm">

      {/* Header */}
      <div className="flex justify-between items-center bg-blue-100 px-4 py-2 rounded-xl">
        <div>
          <h3 className="font-semibold text-[20px]">
            {user ? `${user.firstName} ${user.lastName?.slice(0, 1)} | ` : ""}
            {title}
          </h3>

          {location && (
            <p className="text-[14px] text-gray-500">{location}</p>
          )}
        </div>

        {isSubmitted ? (
          <span className="text-green-600 text-sm font-semibold">
            Bid Submitted
          </span>
        ) : (
          <div
            onClick={toggleFavorite}
            className="cursor-pointer flex items-center gap-2"
          >
            <HeartIcon color={isFav ? "red" : "#999"} />
            {isFav && (
              <span className="text-blue-600 text-sm font-semibold">Saved</span>
            )}
          </div>
        )}

      </div>

      {/* Body */}
      <div className="py-3 flex-1">
        {quantity && <h4 className="font-semibold text-[18px]">{quantity}</h4>}

        <p className="text-lg text-[#0A090B]">{title}</p>

        <hr className="my-3" />

        {quoteMaterials && quoteMaterials.length > 0 && (
          <p className="text-sm text-[#0A090B]">
            {quoteMaterials.join(" | ")}
          </p>
        )}

        <div className="flex items-center justify-between mt-4 text-sm text-gray-700">
          <div className="flex items-center gap-1">
            <CircleDollarSign />
            <span>
              {price !== undefined
                ? `$${price}`
                : budget !== undefined
                  ? budget < 1
                    ? "Open"
                    : `$${budget}`
                  : "Open"}
            </span>
          </div>

          {rating && (
            <div className="flex items-center gap-1">
              <StarIcon />
              <span>{rating}</span>
            </div>
          )}

          {quotesCount !== undefined && (
            <div className="flex items-center gap-1">
              <Briefcase />
              <span>{quotesCount}</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-5 mt-2 py-3">
        <Button
          text={"View Details"}
          background="bg-transparent"
          position="w-full"
          width="w-full"
          color="text-[#CC400C]"
          styles="border border-[#CC400C]"
          handleClick={() => navigate(`/ems/manage-quote/${quoteId}`)}
        />

        {!isSubmitted && !isSaved && <ChatCircleIcon />}
      </div>
    </div>
  );
};


export default QuoteCard;
