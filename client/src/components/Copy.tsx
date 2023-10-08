import axios from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa";

interface CopyProps {
  shortId: string;
  setShortId: Dispatch<SetStateAction<string>>;
  setUrl: Dispatch<SetStateAction<string>>;
}

const Copy = ({ shortId, setShortId, setUrl }: CopyProps) => {
  const [btnText, setBtnText] = useState("Copy URL");
  const [totalClicks, setTotalClicks] = useState<null | number>(null);
  const url = `http:localhost:4000/${shortId}`;

  const copyUrl = () => {
    navigator.clipboard.writeText(url);
    setBtnText("Copied");
  };

  const clearUrl = () => {
    setShortId("");
    setUrl("");
  };

  const showTotalClicks = () => {
    const url = `http://localhost:4000/url/analytics/${shortId}`;
    axios.get(url).then((data) => {
      const { totalClicks } = data.data;
      setTotalClicks(totalClicks);
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold mb-4">Copy the shortened URL</h1>
        <div className="flex items-center border rounded-lg p-2">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow outline-none"
            value={url}
            readOnly
          />
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 ml-2 flex items-center"
            onClick={copyUrl}
          >
            {btnText}
            {btnText === "Copy URL" ? (
              <FaRegCopy className="ml-2" />
            ) : (
              <FaCheck className="ml-2" />
            )}
          </button>
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 ml-2"
            onClick={clearUrl}
          >
            Shorten another URL
          </button>
        </div>
        <div className="flex flex-col w-fit justify-center items-center">
          <p
            className="text-blue-400 cursor-pointer mt-3 underline"
            onClick={showTotalClicks}
          >
            View total clicks on URL
          </p>
          {totalClicks !== null && (
            <div className="bg-slate-100 text-6xl w-full flex items-center pt-4 pb-4 justify-center mt-2">
              <p>{totalClicks}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Copy;
