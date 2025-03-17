"use client"
import { useState, useMemo, useCallback } from "react";

export default function Sumeru () { 
  const [currentIndex, setCurrentIndex] = useState(0);
  const region = {
      name: 'Sumeru',
      characters: [
        { name: 'Collei', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Collei.png" },
        { name: 'Tighnari', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Tighnari.png" },
        { name: 'Cyno', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Cyno.png" },
        { name: 'Dehya', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Dehya.png" },
        { name: 'Nahida', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Nahida.png" },
        { name: 'Wanderer', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Wanderer.png" },
        { name: 'Alhaitham', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Alhaitham.png" },
        { name: 'Candace', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Candace.png" },
        { name: 'Nilou', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Nilou.png" },
        { name: 'Dori', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Dori.png" },
        { name: 'Faruzan', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Faruzan.png" },
        { name: 'Kaveh', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Kaveh.png" },
        { name: 'Layla', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Layla.png" },
        { name: 'Sethos', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Sethos.png" },
      ],
    };
    const currentCharacter = useMemo(() => region.characters[currentIndex], [currentIndex]);
    const nextCharacter = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % region.characters.length);
    }, []);
    const prevCharacter = useCallback(() => {
      setCurrentIndex((prev) => (prev - 1 + region.characters.length) % region.characters.length);
    }, []);
    return (
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4 text-green-700 font-[GenshinImpact]">{region.name}</h1>
        <div className="flex flex-col items-center">
          <img
            src={currentCharacter.image}
            alt={currentCharacter.name}
            className="w-3/5 h-auto max-w-full object-contain rounded-lg shadow-md"
          />
        </div>
        <div className="flex items-center space-x-6 mb-6"> 
          <div className="relative">
            <button
              className="bg-green-700 text-white mt-2 px-4 py-2 rounded shadow-md hover:bg-green-800 font-[GenshinImpact]"
              onClick={prevCharacter}
            >
              Prev
            </button>
          </div>
          <div className="relative">
          <p className="text-green-700 text-2xl mt-2 font-bold font-[GenshinImpact]">
            {currentCharacter.name}
          </p>
          </div>
          <div className="relative">
            <button
              className="bg-green-700 text-white mt-2 px-4 py-2 rounded shadow-md hover:bg-green-800 font-[GenshinImpact]"
              onClick={nextCharacter}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );    
};
