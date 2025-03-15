"use client"

import CarouselStack from "../CarouselStack";
import Link from "next/link";

export default function CarouselPage(){
    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-4 bg-black-100">
        <div className="absolute top-4 right-4">
        <Link href="/">
            <button className="bg-purple-500 text-white px-4 py-2 rounded shadow-md hover:bg-purple-600 font-[GenshinImpact]">
            Back to Home
            </button>
        </Link>
        </div>
        <h1 className="text-5xl font-bold mt-4 mb-4 text-purple-500 font-[GenshinImpact]">View Characters by Region</h1>
        <CarouselStack />
        </div>
    );
}