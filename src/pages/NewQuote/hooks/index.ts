import { toast } from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { useFormValidator } from "../../../utils/hooks/useFormValidator";
import { QuoteType } from "../../../__generated__/graphql";
import { CREATE_QUOTE_MUTATION } from "@/grahpql/mutations/quote";
import apolloClient from "@/grahpql";

export interface QuoteStateProps {
  title: string;
  description: string;
  quoteMaterials: string[];
  turnTime: number;
  quoteFiles: string[];
  quoteType: string;
  budget: number;
  assignedEMSId: number; 
  hasNDA: boolean;
  quoteName:string  
  pcbBoards?: number;                                                                   
}

export const initialState: QuoteStateProps = {
  "title": "",
  "description": "",
  "quoteMaterials": [],
  "turnTime": 0,
  "quoteFiles": [],
  "quoteType": QuoteType.OpenQuote,
  "budget": 0,
  "assignedEMSId": 0,
  "hasNDA": false,
  "quoteName": "",
  "pcbBoards": 0,
};

function useQuote() {
  const { control, handleSubmit } = useFormValidator({
    defaultValues: initialState,
  });

  const [createMutation, { loading }] = useMutation(CREATE_QUOTE_MUTATION, {
    client: apolloClient,
  });

  async function handleQuote({
    title,
    description,
    quoteMaterials,
    turnTime,
    quoteFiles,
    quoteType,
    budget,
    hasNDA,
    quoteName,
    assignedEMSId,
    pcbBoards,
  }: QuoteStateProps) {
    try {
      await createMutation({
        variables: { createQuoteInput: { 
          title,
            description,
            quoteMaterials,
            quoteType,
            turnTime,
            quoteFiles,
            budget,
            hasNDA,
            quoteName,
            assignedEMSId,
            pcbBoards,
        }
      },
        onCompleted: (data) => {
          if (data) {
            console.log("QUOTE-CREATION-DATA: ", data);
            toast.success("Quote creation Successful!");
          } else {
            throw new Error("Invalid response from server");
          }
        },
      });
    } catch (error: any) {
      toast.error(error.message || "Quote creation failed");
    }
  }

  return { control, loading, handleSubmit, handleQuote };
}

export default useQuote;
