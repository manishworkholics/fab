export interface Quote {
  quoteId: string;
  title: string;
  description: string;
  quoteType: string;
  quoteMaterials: string[];
  quoteFiles: string[];
  budget: number;
  turnTime: number;
  status: string;
  isArchived: boolean;
  createdAt: string;
  updatedAt: string;
  hasNDA: boolean;
  user: {
    username: string;
    phone: string;
  };
  assignedEMS: {
    id: string;
    username: string;
  };
  bids: {
    userId: number;
    amount: number;
    createdAt: string;
  }[];
}