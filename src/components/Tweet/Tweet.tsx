import Image from "next/image";
import avatar from "../../../assets/placeholder.png";

function Tweet() {
  return (
    <div>
      <div className="flex space-x-3 items-center">
        <Image className="h-10 w-10 rounded-full" src={avatar} alt="avatar" />
        <div>
          <div className="flex items-center space-x-1">
            <p className="font-semibold">Username</p>
            <p className="hidden text-sm text-gray-500 sm:inline">@username</p>
          </div>
          <div>
            AUDIO
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
