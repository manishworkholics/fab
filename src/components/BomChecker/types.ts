export type PartProps = {
  mpn: string;
  manufacturer: string;
  description: string;
  digikey_pn: string;
  status: string;
  quantity_available: number;
  price: number;
  price_breaks: PriceBreak[];
  minimum_order_quantity: number;
  lead_time_weeks: number;
  product_status: string;
  source: string;
  substitutes?: Substitute[];
};

type PriceBreak = {
  quantity: number;
  price: number;
};

type Substitute = {
  ManufacturerProductNumber: string;
  Manufacturer: { Name: string };
  Description: string;
  QuantityAvailable: number;
  UnitPrice: number;
  ManufacturerLeadWeeks: string;
  ProductVariations: { MinimumOrderQuantity: number }[];
};