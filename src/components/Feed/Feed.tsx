import { ArrowPathIcon } from "@heroicons/react/24/outline";
import TweetBox from "../TweetBox/TweetBox";
import Tweet from "../Tweet/Tweet";

function Feed() {
  return (
    <div className="lg:col-span-5 col-span-7 pt-3">
      <div className="flex items-center justify-between pb-3">
        <h1 className="font-bold ml-5 text-lg">Home</h1>
        <ArrowPathIcon className="h-7 w-7  mr-5 cursor-pointer transition-all duration-300 ease-out hover:rotate-180 active:scale-110" />
      </div>
      <TweetBox />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}

export default Feed;
