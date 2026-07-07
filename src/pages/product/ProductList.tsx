import ProductTable from "../../components/product/ProductTable";
import { useGetProductsQuery } from "../../redux/api/productApi";

const ProductList = () => {
  const {
    data,
    isLoading,
    isError,
  } = useGetProductsQuery({
    page: 1,
    limit: 10,
    searchTerm: "",
  });
 console.log(data)
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Products
        </h1>
      </div>

      <ProductTable
        products={data?.data.result || []}
      />

    </div>
  );
};

export default ProductList;