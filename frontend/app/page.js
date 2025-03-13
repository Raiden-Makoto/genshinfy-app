"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

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
      const data = await response.json()
      setImageSrc(data.imageUrl);
    } catch (error) {
      console.error("Error generating image!", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-black-100">
      <h1 className="text-5xl font-bold mb-4 text-purple-600 font-[GenshinImpact]" >Genshinfy.App</h1>
      <div className="flex space-x-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="p-2 border rounded w-80"
        />
        { preview && (
          <div className="mt-2 text-center">
              <p className="text-sm text-purple-320">You uploaded this image:</p>
              <Image
                src={preview}
                alt="Uploaded Image"
                width={150}
                height={150}
                className="rounded-lg shadow-md mt-1"
              />
              <button
                onClick={removeImage}
                className="bg-red-500 text-white px-2 py-1 rounded mt-2"
              >
              Remove Image
              </button>
            </div>
        )}
      </div>
    </div>
  );
}