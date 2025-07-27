export default function SkeletonCard() {
  return (
    <div className="flex flex-col items-center animate-pulse">
      <div className="bg-gray-700 rounded-full w-64 h-64 mb-3" />
      <div className="bg-gray-600 h-4 w-40 rounded mb-1" />
      <div className="bg-gray-600 h-2 w-32 rounded" />
    </div>
  );
}
