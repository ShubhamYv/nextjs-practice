import axios from "axios";

const getProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/product');
    return response.data;
  } catch (error) {
    console.error("Error fetching products from API", error);
    throw new Error("Failed to load products");
  }
};

const ProductCard = async () => {
  let products = [];
  let error = null;

  try {
    products = await getProducts();
  } catch (err) {
    console.error("Error fetching products", err);
    error = "Failed to load products.";
  }

  return (
    <>
      <h1 className="bg-gray-900 text-white text-2xl flex justify-center p-6">
        Products List
      </h1>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
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
