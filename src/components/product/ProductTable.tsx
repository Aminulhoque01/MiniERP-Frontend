import type { IProduct } from "../../types/product";

 

interface Props {
  products: IProduct[];
}

const ProductTable = ({ products }: Props) => {
          console.log(products)
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="p-3">Image</th>
            <th className="p-3">Name</th>
            <th className="p-3">SKU</th>
            <th className="p-3">Category</th>
            <th className="p-3">Stock</th>
            <th className="p-3">Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="border-b">
              <td className="p-3">
                <img
                  src={product.productImage}
                  className="w-14 h-14 rounded object-cover"
                  alt={product.productName}
                />
              </td>

              <td className="p-3">{product.productName}</td>

              <td className="p-3">{product.sku}</td>

              <td className="p-3">{product.category}</td>

              <td className="p-3">{product.stockQuantity}</td>

              <td className="p-3">
                ৳ {product.sellingPrice}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;