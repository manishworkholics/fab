import { toast } from "react-hot-toast";
import { useMutation } from "@apollo/client";
import { useFormValidator } from "../../../../utils/hooks/useFormValidator";
import apolloClient from "../../../../grahpql";
import { CREATE_QUOTE_MUTATION } from "../../../../grahpql/mutations/quote";
import { CreateQuoteInput, QuoteType } from "@/__generated__/graphql";

export interface CreateQuoteProps {
  title: string;
  description: string;
  quoteMaterials: string[];
  turnTime: number;
  quoteFiles: string[];
  quoteType: string;
  budget: number;
  assignedEMSId?: number;
  hasNDA: boolean;
  quoteName:string
  isDraft?: boolean;
}

export const initialState: CreateQuoteInput = {
  title: "",
  description: "",
  quoteMaterials: [''],
  turnTime: 0,
  quoteFiles: [""],
  quoteType: QuoteType.OpenQuote,
  budget: 0,
  assignedEMSId: 0,
  hasNDA: false,
  quoteName: "",
};

function useCreateQuote() {
  const { control, handleSubmit } = useFormValidator({
    defaultValues: initialState,
  });

  const [createMutation, { loading }] = useMutation(CREATE_QUOTE_MUTATION, {
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
    hasNDA,
    quoteName,
    assignedEMSId,
  }: CreateQuoteProps) {
    try {
      const { data } = await createMutation({
        variables: {
          createQuoteInput: {
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
          },
        },
      });
      return data;
      
    } catch (error: any) {
      toast.error(error.message || "User update failed");
    }
  }

  return { control, loading, handleSubmit, handleCreateQuote };
}

export default useCreateQuote;
