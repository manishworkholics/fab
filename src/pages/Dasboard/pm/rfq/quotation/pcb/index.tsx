import useQuoteById from "../../../../../Register/Quote/hooks/get_single_quote";
import { useParams } from "react-router-dom"; 
import SinglePMQuote from "@/components/Quote/SinglePMQuote";

const PCB = () => {
  const { id } = useParams<{ id: string }>(); 

  const { quote, isLoading } = useQuoteById(id || "");
 
   return <SinglePMQuote data={quote}   isLoading={isLoading} />
};

export default PCB;
