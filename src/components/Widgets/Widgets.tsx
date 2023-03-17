import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import WidgetCard from "../WidgetCard/WidgetCard";

function Widgets() {
  return (
    <div className="col-span-2 hidden lg:inline border-l px-2">
      <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-full mt-2">
        <MagnifyingGlassIcon className="w-5 h-5" />
        <input className="bg-transparent flex-1 outline-none" type="text" placeholder="Search" />
      </div>
      <div>
        <WidgetCard title="Trends for you" />
      </div>
    </div>
  )
}

export default Widgets