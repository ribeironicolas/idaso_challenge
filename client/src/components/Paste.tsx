import axios from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";

interface PasteProps {
  url: string;
  setUrl: Dispatch<SetStateAction<string>>;
  setShortId: Dispatch<SetStateAction<string>>;
}

const Paste = ({ setUrl, url, setShortId }: PasteProps) => {
  const [error, setError] = useState(false);
  const handleSubmit = async () => {
    const apiUrl = "http://localhost:4000/url";
    if (url && (url.includes("http://") || url.includes("https://"))) {
      axios.post(apiUrl, { url }).then((data) => {
        const { id } = data.data;
        setShortId(id);
      });
    } else {
      setError(true);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold mb-4">
          Paste the URL to be shortened
        </h1>
        <div className="flex items-center border rounded-lg p-2">
          <input
            type="text"
            placeholder="Enter the URL"
            className="flex-grow outline-none"
            onChange={(e) => {
              setUrl(e.currentTarget.value);
            }}
          />
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 ml-2"
            onClick={handleSubmit}
          >
            Shorten URL
          </button>
        </div>
        {error ? <h1 className="text-red-600">Enter a valid URL !</h1> : ""}
      </div>
    </main>
  );
};

export default Paste;
