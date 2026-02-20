"use client";

import { toPng } from "html-to-image";

export default function DownloadButton() {
  const downloadImage = async () => {
    const node = document.getElementById("card");
    if (!node) return;

    const dataUrl = await toPng(node);
    const link = document.createElement("a");
    link.download = "Folarin-Obajenihi-QR.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <button
      onClick={downloadImage}
      className="mt-6 px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition duration-300"
    >
      Download Card
    </button>
  );
}
