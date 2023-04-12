import { useEffect, useState } from "react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Ring } from "@uiball/loaders";
import { storage } from "../../../firebase";
import Tweet from "../Tweet/Tweet";
import TweetBox from "../TweetBox/TweetBox";

function Feed() {
  const [audios, setAudios] = useState<string[]>([]);

  useEffect(() => {
    getAudios();
  }, []);

  const getAudios = () => {
    const listRef = ref(storage, "audios/");

    listAll(listRef)
      .then((res) => {
        const promises = res.items.map((itemRef) => {
          return getDownloadURL(ref(storage, itemRef.fullPath));
        });

        Promise.all(promises).then((urls) => {
          setAudios(urls);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="lg:col-span-5 col-span-7 pt-3">
      <div className="flex items-center justify-between pb-3">
        <h1 className="font-bold ml-5 text-lg">Home</h1>
        <div onClick={() => location.reload()}>
          <ArrowPathIcon className="h-7 w-7  mr-5 cursor-pointer transition-all duration-300 ease-out hover:rotate-180 active:scale-110" />
        </div>
      </div>
      <TweetBox getAudios={getAudios} />
      {audios.length > 0 ? (
        audios.reverse().map((audio) => <Tweet key={audio} tweet={audio} />)
      ) : (
        <div className="flex justify-center mt-5">
          <Ring size={40} color="#1d9bf0" />
        </div>
      )}
    </div>
  );
}

export default Feed;
