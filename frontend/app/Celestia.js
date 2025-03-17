import { useState, useMemo, useCallback } from "react";

export default function Celestia () { 
  const [currentIndex, setCurrentIndex] = useState(0);
  const region = {
      name: 'Beyond Teyvat',
      characters: [
        { name: 'Aether', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Aether.png" },
        { name: 'Lumine', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Lumine.png" },
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
        <h1 className="text-3xl font-bold mb-4 text-blue-200 font-[GenshinImpact]">{region.name}</h1>
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
              className="bg-white text-black mt-2 px-4 py-2 rounded shadow-md hover:bg-gray-200 font-[GenshinImpact]"
              onClick={prevCharacter}
            >
              Prev
            </button>
          </div>
          <div className="relative">
          <p className="text-black text-2xl mt-2 font-bold font-[GenshinImpact]">
            {currentCharacter.name}
          </p>
          </div>
          <div className="relative">
            <button
              className="bg-white text-black mt-2 px-4 py-2 rounded shadow-md hover:bg-gray-200 font-[GenshinImpact]"
              onClick={nextCharacter}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );    
};
