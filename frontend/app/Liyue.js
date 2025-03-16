import { useState, useMemo, useCallback } from "react";

export default function Liyue () { 
  const [currentIndex, setCurrentIndex] = useState(0);
  const region = {
      name: 'Liyue',
      characters: [
        { name: 'Baizhu', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Baizhu.png" },
        { name: 'Keqing', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Keqing.png" },
        { name: 'Ganyu', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Ganyu.png" },
        { name: 'Hutao', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Hutao.png" },
        { name: 'Qiqi', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Qiqi.png" },
        { name: 'Zhongli', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Zhongli.png" },
        { name: 'Xingqiu', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Xingqiu.png" },
        { name: 'Xiangling', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Xiangling.png" },
        { name: 'Beidou', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Beidou.png" },
        { name: 'Chongyun', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Chongyun.png" },
        { name: 'Gaming', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Gaming.png" },
        { name: 'Shenhe', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Shenhe.png" },
        { name: 'Ningguang', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Ningguang.png" },
        { name: 'Xinyan', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Xinya.png" },
        { name: 'Yaoyao', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Yaoyao.png" },
        { name: 'Yanfei', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Yanfei.png" },
        { name: 'Xiao', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Xiao.png" },
        { name: 'Yunjin', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Yunjin.png" },
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
        <h1 className="text-3xl font-bold mb-4 text-yellow-300 font-[GenshinImpact]">{region.name}</h1>
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
              className="bg-purple-500 text-white mt-2 px-4 py-2 rounded shadow-md hover:bg-purple-600 font-[GenshinImpact]"
              onClick={prevCharacter}
            >
              Prev
            </button>
          </div>
          <div className="relative">
          <p className="text-yellow-300 text-2xl mt-2 font-bold font-[GenshinImpact]">
            {currentCharacter.name}
          </p>
          </div>
          <div className="relative">
            <button
              className="bg-purple-500 text-white mt-2 px-4 py-2 rounded shadow-md hover:bg-purple-600 font-[GenshinImpact]"
              onClick={nextCharacter}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );    
};
