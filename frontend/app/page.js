"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [previous, setPrevious] = useState(null);

  const handleImageUpload = (event) => {
    const img = event.target.files[0];
    setImage(img);
    setPreview(URL.createObjectURL(img));
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

  return {
    
  }
}