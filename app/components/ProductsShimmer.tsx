const Shimmer = () => {
  return (
    <div className="w-full max-w-xs p-6 bg-slate-800 rounded-xl shadow-lg flex flex-col items-center space-y-4 animate-pulse">
      <div className="h-[200px] w-[200px] bg-gray-700 rounded-md shimmer" />
      <div className="h-6 w-3/4 bg-gray-700 rounded-md" />
      <div className="h-6 w-1/2 bg-gray-700 rounded-md" />
      <div className="h-6 w-3/4 bg-gray-700 rounded-md" />
    </div>
  );
};

export default Shimmer;
