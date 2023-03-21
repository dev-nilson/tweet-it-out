import Image from "next/image";
import {
  MagnifyingGlassIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import WidgetCard from "../WidgetCard/WidgetCard";
import avatar from "../../../assets/placeholder.png";

function Widgets() {
  return (
    <div className="col-span-2 hidden lg:inline border-l px-2">
      <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full mt-2">
        <MagnifyingGlassIcon className="w-5 h-5" />
        <input
          className="bg-transparent flex-1 outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <div>
        <WidgetCard title="Trends for you">
          <div className="flex justify-between items-center text-xs">
            <p>Made with 💙 by</p>
            <EllipsisHorizontalIcon className="h-5" />
          </div>
          <p className="text-sm font-bold">Denilson Lemus</p>
        </WidgetCard>
        <WidgetCard title="Who to follow">
          <div className="flex items-center justify-between">
            <Image className="h-10 w-10 rounded-full" src={avatar} alt="avatar" />
            <div>
              <p className="text-sm font-bold">Denilson</p>
              <p className="text-sm text-gray-600">@devnilson</p>
            </div>
            <button className="bg-twitterBlue font-semibold text-white text-sm px-3 py-1 rounded-full">
              Follow
            </button>
          </div>
        </WidgetCard>
      </div>
    </div>
  );
}

export default Widgets;
