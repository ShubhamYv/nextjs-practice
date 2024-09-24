export const Shimmer = () => (
  <div className="w-full max-w-xs p-6 bg-slate-800 rounded-xl shadow-lg flex flex-col items-center space-y-4 animate-pulse">
    <div className="h-[200px] w-[200px] bg-gray-700 rounded-md" />
    <div className="h-4 bg-gray-700 w-3/4 rounded-md" />
    <div className="h-4 bg-gray-700 w-1/2 rounded-md" />
    <div className="h-4 bg-gray-700 w-1/4 rounded-md" />
  </div>
);