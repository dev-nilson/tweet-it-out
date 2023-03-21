import { MagnifyingGlassIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import WidgetCard from "../WidgetCard/WidgetCard";

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
          Placeholder
        </WidgetCard>
      </div>
    </div>
  );
}

export default Widgets;
