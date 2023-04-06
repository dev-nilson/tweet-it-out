import Image from "next/image";
import {
  ChatBubbleLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ChartBarIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import avatar from "../../../assets/placeholder.png";
import { useState } from "react";

type TweetProps = {
  tweet: string;
};

function Tweet({ tweet }: TweetProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex flex-col space-x-3 border-b pt-4 pb-1 px-4 hover:bg-gray-50 cursor-pointer">
      <div>
        <div className="flex items-center space-x-3">
          <Image className="h-10 w-10 rounded-full" src={avatar} alt="avatar" />
          <div className="w-full">
            <audio className="w-full my-2" src={tweet} controls />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-evenly">
        <div className="clickable text-gray-700 hover:text-twitterBlue">
          <ChatBubbleLeftIcon className="h-5 w-5" />
        </div>
        <div className="clickable text-gray-700 hover:bg-green-100 hover:text-green-600">
          <ArrowPathRoundedSquareIcon className="h-5 w-5" />
        </div>
        <div
          className="clickable text-gray-700 hover:bg-red-100 hover:text-red-600"
          onClick={() => setIsLiked(true)}
        >
          <HeartIcon className={`h-5 w-5 ${isLiked && "fill-red-400"}`} />
        </div>
        <div className="clickable text-gray-700 hover:text-twitterBlue">
          <ChartBarIcon className="h-5 w-5 hover:text-twitterBlue" />
        </div>
        <div className="clickable text-gray-700 hover:text-twitterBlue">
          <ShareIcon className="h-5 w-5 hover:text-twitterBlue" />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
