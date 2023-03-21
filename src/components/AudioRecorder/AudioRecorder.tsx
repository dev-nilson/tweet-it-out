import { useEffect, useRef, useState } from "react";
import { MicrophoneIcon, PauseIcon } from "@heroicons/react/24/outline";

const AudioRecorder = () => {
  const mediaRecorder = useRef<any>(null);
  const mimeType = "audio/webm";
  const [audio, setAudio] = useState<any>(null);
  const [chunks, setChunks] = useState<any>([]);
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
    setIsRecording(true);

    const media = new MediaRecorder(stream, { type: mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let audioChunks = [];
    mediaRecorder.current.ondataavailable = (e) => {
      if (typeof e.data === "undefined") return;
      if (e.data.size === 0) return;
      audioChunks.push(e.data);
    };
    setChunks(audioChunks);

    console.log(mediaRecorder.current.state);
    console.log("recorder started");
  };

  const stopRecording = () => {
    setIsRecording(false);

    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(chunks, { type: mimeType });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      setChunks([]);
    };

    console.log(mediaRecorder.current.state);
    console.log("recorder stopped");
  };

  return (
    <div className="flex items-center space-x-1 mb-3">
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
        <div className="w-full">
          <audio className="w-full h-12" src={audio} controls />
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
