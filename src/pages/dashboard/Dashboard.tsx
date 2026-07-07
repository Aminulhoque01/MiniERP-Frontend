import StatCard from "../../components/dashboard/StatCard";
import { useGetDashboardQuery } from "../../redux/api/dashboardApi";

const Dashboard = () => {
  const {
    data,
    isLoading,
    isError,
  } = useGetDashboardQuery();

  if (isLoading) {
    return (
      <h2 className="text-center mt-20">
        Loading...
      </h2>
    );
  }

  if (isError) {
    return (
      <h2 className="text-center mt-20 text-red-500">
        Something went wrong
      </h2>
    );
  }

  const dashboard = data?.data;

  return (
    <div className="space-y-8">

      <div className="grid grid-cols-4 gap-6">

        <StatCard
          title="Total Products"
          value={dashboard?.totalProducts ?? 0}
        />

        <StatCard
          title="Total Sales"
          value={dashboard?.totalSales ?? 0}
        />

        <StatCard
          title="Revenue"
          value={`৳${dashboard?.totalRevenue ?? 0}`}
        />

        <StatCard
          title="Low Stock"
          value={dashboard?.lowStock ?? 0}
        />

      </div>

      <div className="bg-white rounded-xl shadow-md">

        <div className="p-5 border-b">

          <h2 className="text-xl font-semibold">
            Low Stock Products
          </h2>

        </div>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left p-4">
                Product
              </th>

              <th className="text-left p-4">
                SKU
              </th>

              <th className="text-left p-4">
                Stock
              </th>

            </tr>

          </thead>

          <tbody>

            {dashboard?.lowStockProducts.map(
              (product) => (
                <tr
                  key={product._id}
                  className="border-b"
                >
                  <td className="p-4">
                    {product.productName}
                  </td>

                  <td className="p-4">
                    {product.sku}
                  </td>

                  <td className="p-4 text-red-600 font-bold">
                    {product.stockQuantity}
                  </td>
                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Dashboard;