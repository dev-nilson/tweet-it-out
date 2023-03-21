import { useEffect, useRef, useState } from "react";
import { MicrophoneIcon, PauseIcon } from "@heroicons/react/24/outline";

const AudioRecorder = () => {
  const mediaRecorder = useRef<any>(null);
  const [audio, setAudio] = useState<any>(null);
  const [stream, setStream] = useState<any>(null);
  const [isSupported, setIsSupported] = useState(true);
  const [permission, setPermission] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    const getMicrophone = async () => {
      if (!navigator?.mediaDevices && !navigator?.mediaDevices?.getUserMedia)
        setIsSupported(false);

      try {
        await navigator.mediaDevices
          .getUserMedia({
            audio: true,
            video: false,
          })
          .then((res) => {
            setStream(res);
            setPermission(true);
          });
      } catch (err) {
        setPermission(false);
      }
    };

    getMicrophone();
  }, []);

  const startRecording = () => {
    const media = new MediaRecorder(stream);
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    setIsRecording(true);

    console.log(mediaRecorder.current.state);
    console.log("recorder started");
  };
  
  const stopRecording = () => {
    mediaRecorder.current.stop();
    setIsRecording(false);

    console.log(mediaRecorder.current.state);
    console.log("recorder stopped");
  };
  
  return (
    <div className="flex items-center space-x-1">
      {isRecording ? (
        <PauseIcon className="h-12 -ml-3 clickable" onClick={stopRecording} />
      ) : (
        <MicrophoneIcon
          className="h-12 -ml-3 clickable"
          onClick={startRecording}
        />
      )}
      <div>
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
        <div className="flex items-center">
          <canvas className="visualizer" height="60px"></canvas>
        </div>
      )}
    </div>
  );
};
export default AudioRecorder;
