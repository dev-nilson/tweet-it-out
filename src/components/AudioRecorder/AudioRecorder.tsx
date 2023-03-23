import { useEffect, useRef, useState } from "react";
import { ref, uploadString } from "firebase/storage";
import {
  MicrophoneIcon,
  PauseIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { storage } from "../../../firebase";

const AudioRecorder = () => {
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const mimeType = "audio/webm";
  const [audio, setAudio] = useState<string | null>(null);
  const [chunks, setChunks] = useState<Array<Blob | null>>([]);
  const [stream, setStream] = useState<MediaStream | null>(null);
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

    const media = new MediaRecorder(stream as MediaStream, { mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let audioChunks: Array<Blob | null> = [];
    mediaRecorder.current.ondataavailable = (e: BlobEvent) => {
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

    if (!mediaRecorder.current) return;

    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(chunks, { type: mimeType });
      const fileReader = new FileReader();
      fileReader.readAsDataURL(audioBlob);

      fileReader.onloadend = () => {
        const base64String = fileReader.result as string | null;
        setAudio(base64String);
        setChunks([]);

        const audioToStore = base64String?.toString().split(",")!;

        const storageRef = ref(storage, `audios/${Date.now()}`);
        uploadString(storageRef, audioToStore[1], "base64").then((snapshot) => {
          console.log("Uploaded a base64 string!");
        });
      };
    };

    console.log(mediaRecorder.current.state);
    console.log("recorder stopped");
  };

  const deleteRecording = () => {
    setAudio(null);
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
        <div className="flex w-full items-center space-x-2">
          <audio className="w-full" src={audio} controls />
          <TrashIcon
            className="h-10 clickable text-red-500 hover:bg-red-50"
            onClick={deleteRecording}
          />
        </div>
      ) : (
        <div className="flex items-center">
          <canvas className="visualizer" height="10px" width="10px"></canvas>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
