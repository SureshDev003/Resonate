export function Home() {
  return (
    <div className="space-y-4">
      
      <div className="p-4 w-[800px] bg-white rounded-lg">
        <h1 className="text-2xl font-bold">Progress</h1>
        <hr />
        <img src="/report.png" alt="Progress" className="w-[800px] h-80" />
      </div>
      <div className="p-4 w-[500px] bg-white rounded-lg">
      <h1 className="text-2xl font-bold">Score</h1>
      <hr />
      <div className="flex justify-between text-sm text-gray-600">
        <span>Speed</span> <span>30%</span>
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Accuracy</span> <span>50%</span>
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Memory</span> <span>72%</span>
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Decision Making</span> <span>83%</span>
      </div>
      </div>
    </div>
  );
}