import { useEffect, useState } from "react";
import { MicrophoneIcon } from "@heroicons/react/24/outline";

const AudioRecorder = () => {
  const [audio, setAudio] = useState<any>(null);
  const [isSupported, setIsSupported] = useState(true);
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    const getMicrophone = async () => {
      if (!navigator?.mediaDevices && !navigator?.mediaDevices?.getUserMedia)
        setIsSupported(false);

      try {
        await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
      } catch (err) {
        setPermission(false);
      }
    };

    getMicrophone();
  }, []);

  return (
    <div className="flex items-center space-x-1">
      <MicrophoneIcon className="h-12 -ml-3 clickable" />
      <div className="">
        {!isSupported && (
          <small>Audio recorder not supported in your browser.</small>
        )}
        {!permission && <small>Enable microphone.</small>}
      </div>
      {audio ? (
        <div className="audio-player">
          <audio src={audio} controls></audio>
        </div>
      ) : (
        <h1>Recording...</h1>
      )}
    </div>
  );
};
export default AudioRecorder;
