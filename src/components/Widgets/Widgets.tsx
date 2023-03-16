import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Widgets() {
  return (
    <div>
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2">
        <MagnifyingGlassIcon className="w-5 h-5" />
        <input className="bg-transparent flex-1 outline-none" type="text" placeholder="Search" />
      </div>
    </div>
  )
}

export default Widgets