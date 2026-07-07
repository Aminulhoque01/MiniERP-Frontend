export interface ILowStockProduct {
  _id: string;
  productName: string;
  sku: string;
  stockQuantity: number;
  productImage: string;
}

export interface IDashboardData {
  totalProducts: number;
  totalSales: number;
  totalRevenue: number;
  lowStock: number;
  lowStockProducts: ILowStockProduct[];
}

export interface IDashboardResponse {
  success: boolean;
  message: string;
  data: IDashboardData;
}