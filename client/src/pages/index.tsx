import Copy from "@/components/Copy";
import Paste from "@/components/Paste";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortId, setShortId] = useState("");

  return (
    <>
      {!shortId ? (
        <Paste url={url} setShortId={setShortId} setUrl={setUrl} />
      ) : (
        <Copy setUrl={setUrl} setShortId={setShortId} shortId={shortId} />
      )}
    </>
  );
}
