import React from "react";

const Footer = () => {
    return (
        <footer className="text-center text-purple-300 text-bottom py-6 font-[GenshinImpact]">
            &copy; {new Date().getFullYear()} Genshinfy.App. All rights reserved. <br /> Images sourced from HoYoverse Universe Index. <br /> Not affiliated with HoYoVerse.
        </footer>
    );
};

export default Footer;