"use client"

import Mondstadt from "../Mondstadt";
import Liyue from "../Liyue";
import Inazuma from "../Inazuma";
import Sumeru from "../Sumeru";
import Fontaine from "../Fontaine";
import Natlan from "../Natlan";
import Snezhnaya from "../Snezhnaya";
import Celestia from "../Celestia";

import Footer from "../footer";
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
        <h1 className="text-5xl font-bold mt-4 mb-4 text-white font-[GenshinImpact]">View Characters by Region</h1>
        <main className="flex-grow flex flex-col items-center justify-starts text-center px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Mondstadt />
            <Liyue />
            <Inazuma />
            <Sumeru />
            <Natlan />
            <Fontaine />
            <Snezhnaya />
            <Celestia />
        </div>
        < Footer />
        </main>
        </div>
    );
}