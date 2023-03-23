import Image from "next/image";
import {
  ChatBubbleLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ChartBarIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import avatar from "../../../assets/placeholder.png";

type TweetProps = {
  tweet: string;
};

function Tweet({ tweet }: TweetProps) {
  return (
    <div className="flex flex-col space-x-3 border-b pt-3 pb-1 px-3 hover:bg-gray-50 cursor-pointer">
      <div>
        <div className="flex items-center space-x-2">
          <Image className="h-10 w-10 rounded-full" src={avatar} alt="avatar" />
          <div className="w-full">
            <div className="flex items-center space-x-1">
              <p className="font-semibold">Username</p>
              <p className="hidden text-sm text-gray-500 sm:inline">
                @username
              </p>
            </div>
          </div>
        </div>
        <div className="my-3 md:my-2">
          <audio className="w-full md:w-[90%] m-auto" src={tweet} controls />
        </div>
      </div>

      <div className="flex items-center justify-evenly">
        <div className="clickable text-gray-700 hover:text-twitterBlue">
          <ChatBubbleLeftIcon className="h-5 w-5" />
        </div>
        <div className="clickable text-gray-700 hover:bg-green-100 hover:text-green-600">
          <ArrowPathRoundedSquareIcon className="h-5 w-5" />
        </div>
        <div className="clickable text-gray-700 hover:bg-red-100 hover:text-red-600">
          <HeartIcon className="h-5 w-5" />
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
