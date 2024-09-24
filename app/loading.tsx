import Shimmer from "./components/ProductsShimmer";

const Loading = () => {
  const shimmerItems = Array(8).fill(0);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {
          shimmerItems.map((_, index) => (
            <Shimmer key={index} />
          ))
        }
      </div>
    </div>
  );
};

export default Loading;
