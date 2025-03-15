import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const CarouselStack = () => {
    const regions = [
        {
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
        },
        {
            name: 'Liyue', 
            characters: [
                { name: 'Baizhu', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Baizhu.png" },
                { name: 'Beidou', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Beidou.png" },
                { name: 'Chongyun', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Chongyun.png" },
                { name: 'Gaming', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Gaming.png" },
                { name: 'Ganyu', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Ganyu.png" },
                { name: 'Hu Tao', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Hutao.png" },
                { name: 'Keqing', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Keqing.png" },
                { name: 'Ningguang', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Ningguang.png" },
                { name: 'Qiqi', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Qiqi.png" },
                { name: 'Shenhe', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Shenhe.png" },
                { name: 'Xiangling', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Xiangling.png" },
                { name: 'Xianyun', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Xianyun.png" },
                { name: 'Xiao', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Xiao.png" },
                { name: 'Xingqiu', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Xingqiu.png" },
                { name: 'Xinyan', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Xinya.png" },
                { name: 'Yanfei', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Yanfei.png" },
                { name: 'Yaoyao', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Yaoyao.png" },
                { name: 'Yunjin', image: "https://raw.githubusercontent.com/Raiden-Makoto/genshinfy-app/851c2470ba1573027f3f2599becf0c1dfb140c4a/backend/model/GenshinCharacters/Yunjin.png" },
            ],
        },
    ];

    return (
        <div className="page-container">
          {regions.map((region, index) => (
            <div key={index} className="carousel-section">
              <h1 className="region-title">{region.name}</h1>
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 3000 }}
                loop={true}
                centeredSlides={true} // Ensures the active slide is centered
              >
                {region.characters.map((character, idx) => (
                  <SwiperSlide key={idx} className="character-slide">
                    <img
                      src={character.image}
                      alt={`${character.name}`}
                      className="character-image"
                    />
                    <p className="character-name">{character.name}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
          <style jsx>{`
            .page-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 20px;
            }
    
            .carousel-section {
              width: 100%;
              max-width: 600px; /* Adjust max width for better centering */
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              margin-bottom: 40px;
            }
    
            .region-title {
              font-size: 24px;
              margin-bottom: 10px;
            }
    
            .character-slide {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
    
            .character-image {
              display: block;
              margin: 0 auto;
              max-width: 100%;
              height: auto;
              border-radius: 10px;
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            }
    
            .character-name {
              margin-top: 10px;
              font-size: 18px;
              font-weight: bold;
            }
          `}</style>
        </div>
    );
};

export default CarouselStack;