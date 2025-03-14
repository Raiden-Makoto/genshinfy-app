"use client";

import { useState } from "react";
//import { useEffect } from "react";
import Image from "next/image";
import Footer from './footer'

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

 /* useEffect(() => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/jpg";
    link.href = "./glassespaimon.jpg"; // Your custom favicon filename
    document.head.appendChild(link);
  }, []);*/
  

  const handleImageUpload = (event) => {
    const img = event.target.files[0];
    setImage(img);
    setPreview(URL.createObjectURL(img));
  };

  const removeImage = (event) => {
    setImage(null);
    setPreview(null);
  };

  const generateImage = async () => {
    if (!image){
      alert("Please select an image");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("text", prompt);
    formData.append("image", image);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        body: formData,
      });
      console.log(response);
      if (!response.ok) {
        const errorText = await response.text();
        alert(`Error: ${response.status} - ${errorText}`);
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }
      const data = await response.json()
      setImageSrc(data.imageUrl);
    } catch (error) {
      console.error("Error generating image!", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 bg-black-100">
      <main className="flex-grow flex flex-col items-center justify-starts text-center px-4">
      <h1 className="text-5xl font-bold mb-4 text-purple-400 font-[GenshinImpact]">
        Genshinfy.App
      </h1>
      <h2 className="text-3xl font-bold mb-4 text-purple-300 font-[GenshinImpact]">
        Turn yourself into a Genshin Impact character!
      </h2>
      <p className="text-lg mb-1 text-white-100 font-[GenshinImpact]">
        To get started, upload a photo of yourself from the shoulders up.
      </p>
      <p className="text-lg mb-1 text-white-100 font-[GenshinImpact]">
        Then enter as many qualities as you'd like your character to have.
      </p>
      <p className="text-lg mb-1 text-white-100 font-[GenshinImpact]">
        For example, <i>cat ears, green eyes, female.</i>
      </p>
      <p className="text-lg mb-4 text-white-100 font-[GenshinImpact]">
        The model will automatically select the image that most closely matches the input criteria.
      </p>
        <div className="flex items-center space-x-6 mb-6"> 
          <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <button className="bg-purple-500 text-white px-4 py-2 rounded shadow-md hover:bg-purple-400 font-[GenshinImpact]">
                Choose File
              </button>
            </div>
            <div className="relative">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="p-2 border rounded w-80 text-purple-400 font-[GenshinImpact]"
              placeholder="Enter desired qualities..."
            />
            </div>
            <div className="relative">
            <button
              onClick={generateImage}
              className="bg-purple-500 text-white px-4 py-2 rounded shadow-md font-[GenshinImpact]"
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate"}
            </button>
            </div>
          </div>
          <div className="flex justify-center">
          {preview && (
            <div className="mt-2 text-center">
              <p className="text-sm text-purple-600 font-[GenshinImpact]">You uploaded:</p>
              <Image
                src={preview}
                alt="Uploaded Image"
                width={480}
                height={480}
                className="rounded-lg shadow-md mt-1"
              />
              <button
                onClick={removeImage}
                className="bg-red-500 text-white px-2 py-1 rounded mt-2 font-[GenshinImpact]"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      <div className="flex justify-center mt-4">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt="Generated Image"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        )}
      </div>
      </main>
      <Footer />
    </div>
  );
}