import { ArrowPathIcon } from "@heroicons/react/24/outline";

function Feed() {
  return (
    <div className="lg:col-span-5 col-span-7">
      <div className="flex items-center justify-between">
        <h1 className="font-bold ml-5 text-lg">Home</h1>
        <ArrowPathIcon className="h-7 w-7  mr-5 cursor-pointer transition-all duration-300 ease-out hover:rotate-180 active:scale-110" />
      </div>
    </div>
  );
}

export default Feed;
