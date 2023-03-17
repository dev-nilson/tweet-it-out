import {
  PhotoIcon,
  FaceSmileIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function TweetBox() {
  return (
    <div>
      <form>
        <input type="text" placeholder="What's happening?" />
        <div className="flex items-center">
          <div className="flex space-x-2 text-blue-400 flex-1">
            <PhotoIcon className="h-5 w-5" />
            <FaceSmileIcon className="h-5 w-5" />
            <CalendarIcon className="h-5 w-5" />
            <MapPinIcon className="h-5 w-5" />
          </div>
          <button className="bg-blue-400 font-semibold text-white px-5 py-1 rounded-full">
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
