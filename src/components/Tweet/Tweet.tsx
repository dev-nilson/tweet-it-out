import Image from "next/image";
import {
  ChatBubbleLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ChartBarIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import avatar from "../../../assets/placeholder.png";

function Tweet() {
  return (
    <div className="flex flex-col space-x-3 border-b pt-4 pb-2 px-4 hover:bg-gray-50 cursor-pointer">
      <div className="flex space-x-3 items-center">
        <Image className="h-10 w-10 rounded-full" src={avatar} alt="avatar" />
        <div>
          <div className="flex items-center space-x-1">
            <p className="font-semibold">Username</p>
            <p className="hidden text-sm text-gray-500 sm:inline">@username</p>
          </div>
          <div>AUDIO</div>
        </div>
      </div>

      <div className="flex items-center justify-evenly ">
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
