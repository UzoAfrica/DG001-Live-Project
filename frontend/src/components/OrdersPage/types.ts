// src/types.ts
export interface Order {
  orderId: string;
  productImage: string;
  productName: string;
  productDescription: string;
  dateOrdered: string;
  amountPaid: number;
  deliveryStatus: string;
}
