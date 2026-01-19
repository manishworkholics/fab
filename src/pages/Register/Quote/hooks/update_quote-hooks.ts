import { toast } from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { useFormValidator } from "../../../../utils/hooks/useFormValidator";
import { QuoteType, UpdateQuoteDocument } from "@/__generated__/graphql";
import apolloClient from "@/grahpql";

export interface UpdateQuoteProps {
  title: string;
  description: string;
  quoteMaterials: string[];
  turnTime: number;
  quoteFiles: string[];
  quoteType: QuoteType;
  budget: number;
  assignedEMSId: number;
  quoteId: string;
  hasNDA?: boolean;
  quoteName?: string;
  pcbBoards?: number;
}

export const initialState: UpdateQuoteProps = {
  title: "",
  description: "",
  quoteMaterials: [""],
  turnTime: 0,
  quoteFiles: [""],
  quoteType: QuoteType.OpenQuote,
  budget: 0,
  assignedEMSId: 0,
  quoteId: "",
  hasNDA: false,
  quoteName: "",
  pcbBoards: 0,
};

function useUpdateQuote() {
  const { control, handleSubmit } = useFormValidator({
    defaultValues: initialState,
  });

  const [createMutation, { loading }] = useMutation(UpdateQuoteDocument, {
    client: apolloClient,
  });

  async function handleCreateQuote({
    title,
    description,
    quoteMaterials,
    turnTime,
    quoteFiles,
    quoteType,
    budget,
    assignedEMSId,
    quoteId,
    hasNDA,
    quoteName,
    pcbBoards,
  }: UpdateQuoteProps) {
    try {
      const { data } = await createMutation({
        variables: {
          updateQuoteInput: {
            title,
            description,
            quoteMaterials,
            quoteType,
            turnTime,
            quoteFiles,
            budget,
            assignedEMSId,
            hasNDA,
            quoteName,
            pcbBoards,
          },
          quoteId: quoteId,
        },
      });
      return data;
      
    } catch (error: any) {
      toast.error(error?.message || "Quote update failed");
    }
  }

  return { control, loading, handleSubmit, handleCreateQuote };
}

export default useUpdateQuote;
