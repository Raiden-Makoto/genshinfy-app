"use client"
import { useState, useMemo, useCallback } from "react";

export default function Mondstadt () { 
  const [currentIndex, setCurrentIndex] = useState(0);
  const region = {
      name: 'Mondstadt',
      characters: [
        { name: 'Albedo', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Albedo.png" },
        { name: 'Amber', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Amber.png" },
        { name: 'Barbara', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Barbara.png" },
        { name: 'Bennett', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Bennett.png" },
        { name: 'Diluc', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Diluc.png" },
        { name: 'Diona', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Diona.png" },
        { name: 'Eula', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Eula.png" },
        { name: 'Fischl', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Fischl.png" },
        { name: 'Jean', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Jean.png" },
        { name: 'Kaeya', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Kaeya.png" },
        { name: 'Klee', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Klee.png" },
        { name: 'Lisa', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Lisa.png" },
        { name: 'Mika', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Mika.png" },
        { name: 'Mona', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Mona.png" },
        { name: 'Noelle', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Noelle.png" },
        { name: 'Razor', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Razor.png" },
        { name: 'Rosaria', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Rosaria.png" },
        { name: 'Sucrose', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Sucrose.png" },
        { name: 'Venti', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Venti.png" },
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
        <h1 className="text-3xl font-bold mb-4 text-green-400 font-[GenshinImpact]">{region.name}</h1>
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
              className="bg-green-400 text-black mt-2 px-4 py-2 rounded shadow-md hover:bg-green-600 font-[GenshinImpact]"
              onClick={prevCharacter}
            >
              Prev
            </button>
          </div>
          <div className="relative">
          <p className="text-green-400 text-2xl mt-2 font-bold font-[GenshinImpact]">
            {currentCharacter.name}
          </p>
          </div>
          <div className="relative">
            <button
              className="bg-green-400 text-black mt-2 px-4 py-2 rounded shadow-md hover:bg-green-600 font-[GenshinImpact]"
              onClick={nextCharacter}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );    
};
