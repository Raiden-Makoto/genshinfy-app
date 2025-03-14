import React from "react";

const Footer = () => {
    return (
        <footer className="text-purple-300 text-bottom py-6 font-[GenshinImpact]">
            &copy; {new Date().getFullYear()} Genshinfy.App. All rights reserved. Not affiliated with HoYoVerse.
        </footer>
    );
};

export default Footer;