"use client"

import CarouselStack from "../CarouselStack";

export default function CarouselPage(){
    return (
        <div className="container">
        <h1>View Characters by Region</h1>
        <CarouselStack />
        <style jsx>{`
            .container {
            display: flex;
            flex-direction: column;
            align-items: center; /* Centers content horizontally */
            justify-content: center; /* Centers content vertically */
            height: 100vh; /* Full height of the viewport */
            text-align: center;
            padding: 20px;
            }
    
            h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            }
        `}</style>
        </div>
    );
}