import axios from "axios";
import { Shimmer } from "./ProductsShimmer";

const getProducts = async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};

const ProductCard = async () => {
  const shimmerItems = Array(8).fill(0);
  let products = [];

  try {
    products = await getProducts();
  } catch (error) {
    console.error("Error fetching products", error);
  }

  return (
    <>
      <h1 className="bg-gray-900 text-white text-2xl flex justify-center p-6">
        Products List
      </h1>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.length === 0
            ? (shimmerItems.map((_, index) => <Shimmer key={index} />))
            : (
              products.map((product: any) => (
                <div
                  key={product.id}
                  className="w-full max-w-xs p-6 bg-slate-800 rounded-xl shadow-lg flex flex-col items-center space-y-4 text-white transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    className="h-[200px] w-[200px] object-cover rounded-md"
                    src={product.image}
                    alt={product.title}
                  />
                  <h2 className="text-lg font-semibold">
                    {product.title}
                  </h2>
                  <p className="text-blue-400">
                    Price: ${product.price}
                  </p>
                  <p className="text-gray-300">
                    Category: {product.category}
                  </p>
                </div>
              ))
            )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
