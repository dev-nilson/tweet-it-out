import { useState } from "react";
import { ref, uploadString } from "firebase/storage";
import {
  PhotoIcon,
  FaceSmileIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { storage } from "../../../firebase";
import AudioRecorder from "../AudioRecorder/AudioRecorder";

function TweetBox() {
  const [audio, setAudio] = useState<string | null>(null);

  const uploadAudio = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const audioToStore = audio?.toString().split(",")!;
    const storageRef = ref(storage, `audios/${Date.now()}`);
    uploadString(storageRef, audioToStore[1], "base64").then((snapshot) => {
      setAudio(null);
    });
  };

  return (
    <div className="flex items-center flex-1 px-5 border-y">
      <form className="flex flex-1 flex-col my-3">
        <AudioRecorder audio={audio} setAudio={setAudio} />
        <div className="flex items-center">
          <div className="flex flex-1">
            <div className="clickable">
              <PhotoIcon className="h-5 w-5" />
            </div>
            <div className="clickable">
              <FaceSmileIcon className="h-5 w-5" />
            </div>
            <div className="clickable">
              <CalendarIcon className="h-5 w-5" />
            </div>
            <div className="clickable">
              <MapPinIcon className="h-5 w-5" />
            </div>
          </div>
          <button
            className="bg-twitterBlue font-semibold text-white px-5 py-1 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={uploadAudio}
            disabled={audio === null}
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
