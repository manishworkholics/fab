import { Briefcase, CircleDollarSign, StarIcon } from "lucide-react";
import Button from "../ui/Buttons";
import ChatCircleIcon from "../icons/ChatCircleIcon";
import HeartIcon from "../icons/HeartIcon";
import { useNavigate } from "react-router-dom";

interface userProp {
  firstName: string;
  lastName: string;
}
interface QuoteCardProps {
  title: string;
  company: string;
  location: string;
  quantity: string;
  user: userProp;
  budget: number;
  rating: string;
  quotesCount: number;
  quoteId: string;
  quoteMaterials: string[];
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
}: QuoteCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="border border-[#F0F2F5] rounded-xl p-4 bg-white flex flex-col justify-between shadow-sm">
      <div className="flex justify-between items-center bg-blue-100 px-4 py-2 rounded-xl">
        <div>
          <h3 className="font-semibold text-[20px]">
            {user?.firstName} {user?.lastName.slice(0,1)} | {title}
          </h3>
          <p className="text-[14px] text-gray-500">
            {location ?? ""}
          </p>
        </div>
        <HeartIcon />
      </div>

      <div className="  py-3 flex-1">
        <h4 className="font-semibold text-[18px]">
          {quantity ?? ""}
        </h4>
        <p className="text-lg text-[#0A090B]">{title}</p>
        
        <hr className="my-3" />

        <p className="text-sm text-[#0A090B]">{quoteMaterials.join(" | ")}</p>

        <div className="flex items-center justify-between mt-4 text-sm text-gray-700">
          <div className="flex items-center gap-1">
            <CircleDollarSign />
            <span>{budget < 1 ? "Open" : `$${budget}`}</span>
          </div>
          {<div className="flex items-center gap-1">
            <StarIcon />
            <span>{rating ?? "1"}</span>
          </div>}
          <div className="flex items-center gap-1">
            <Briefcase />
            <span>{quotesCount ?? "0"}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 mt-2 py-3">
        <Button
          text={"View Details"}
          background="bg-transparent"
          position="w-full"
          width="w-full"
          color="text-[#CC400C]"
          styles="border border-[#CC400C] "
          handleClick={() => navigate(`/ems/manage-quote/${quoteId}`)}
        />

        <ChatCircleIcon />
      </div>
    </div>
  );
};

export default QuoteCard;
