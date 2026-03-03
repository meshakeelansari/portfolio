import React, { useState, useEffect, useRef } from "react";
import SHCircularLogo from "../images/SHCircularLogo.png";
import MaterialUISwitch from "../utilities/MaterialUISwitch";
import { useTheme } from "../context/useTheme";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const sections = ["Home", "About", "Projects", "Skills", "Contact"];
// const sections = ["Home", "About", "Projects", "Experience", "Skills", "Contact"];

const Navbar = () => {

    const { darkMode, setDarkMode } = useTheme();
    const [active, setActive] = useState("Home");
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRefs = useRef({});

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            const nowDesktop = window.innerWidth >= 768;
            setIsDesktop(nowDesktop);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const handleThemeChange = (e) => {
        setDarkMode(e.target.checked);
    };

    // 🟡 Scroll Detection
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            const offsets = sections.map((id) => {
                const el = document.getElementById(id.toLowerCase());
                if (!el) return null;
                return { id, offset: el.offsetTop - window.innerHeight / 3 };
            }).filter(Boolean);

            const current =
                offsets.reverse().find((sec) => scrollY >= sec.offset)?.id || "Home";

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 🟠 Indicator Smooth Transition
    useEffect(() => {
        const currentEl = navRefs.current[active];
        if (currentEl) {
            setIndicatorStyle({
                width: currentEl.offsetWidth + "px",
                left: currentEl.offsetLeft + "px",
            });
        }
    }, [active, isDesktop]);


    // 🟢 Smooth Scroll on Click
    const handleClick = (id) => {
        const section = document.getElementById(id.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false); // 🔹 close menu when a link is clicked (mobile)
    };

    const handleClickLogo = (sectionName) => {
        const section = document.getElementById(sectionName.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false); // 🔹 close menu when a link is clicked (mobile)
    };

    return (
        <div
            className="w-full h-16 poppinsFont flex  items-center justify-between px-4 fixed top-0 left-0 backdrop-blur-sm "
            style={{ position: "fixed", zIndex: 50 }}
        >
            {/* Logo */}
            <div className="h-12 w-12 overflow-hidden rounded-full cursor-pointer  transition-transform duration-300 rotate-0 hover:rotate-360"
                onClick={() => handleClickLogo("Home")}>
                <img src={SHCircularLogo} alt="myLogo" className="h-full w-full object-cover" />
            </div>

            {/* Navbar Buttons */}
            <div className="relative hidden md:flex space-x-1 items-center bg-white text-black text-sm px-2 py-1 rounded-full shadow-md border border-gray-300  dark:bg-gray-900 dark:text-white ">
                {/* Sliding indicator */}
                <span
                    className="absolute h-[74%] bg-[#FBA418] rounded-full transition-all duration-500 ease-in-out"
                    style={{
                        ...indicatorStyle,
                    }}
                ></span>

                {sections.map((item) => (
                    <div
                        key={item}
                        ref={(el) => (navRefs.current[item] = el)}
                        className={`px-5 py-2.5 rounded-full cursor-pointer transition-all duration-300 relative ${active === item ? "text-white " : "hover:text-[#FBA418] hover:-translate-y-1.5"
                            }`}
                        onClick={() => handleClick(item)}
                    >
                        {item}
                    </div>
                ))}
            </div>


            {/* 🔹 Mobile Menu (Animated Slide Down) */}
            <div
                className={`absolute top-16 left-0 w-full bg-[radial-gradient(circle_farthest-corner_at_-4.1%_49.8%,_rgba(247,150,150,0.9)_0%,_rgba(255,190,120,0.9)_20.8%,_rgba(180,255,160,0.9)_43.8%,_rgba(170,250,255,0.9)_65.2%,_rgba(165,163,255,0.9)_84.3%,_rgba(255,165,245,0.9)_100.2%)]  dark:bg-gray-400 text-center overflow-hidden transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col items-center py-3 space-y-2">
                    {sections.map((item) => (
                        <div
                            key={item}
                            className={`w-full py-2 text-lg font-medium transition-all duration-300 cursor-pointer ${active === item ? "text-[#FBA418]" : "text-gray-700 dark:text-gray-300"
                                } hover:text-[#FBA418]`}
                            onClick={() => handleClick(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>



            <div className="flex gap-4 items-center">
                {/* Theme Switch */}
                <div className="flex items-center md:gap-2 gap-1">
                    <MaterialUISwitch checked={darkMode} sx={{ m: -1 }} onChange={handleThemeChange} />
                    <span className="text-sm">{darkMode ? "Light" : "Dark"}</span>
                </div>

                <div className="flex md:hidden h-12 w-12 rounded-full  justify-center items-center cursor-pointer bg-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className="border-[3.5px] border-[#FBA418] rounded-full p-1.5  transition-transform duration-300 rotate-0 hover:rotate-180">
                        {isMenuOpen ?
                            <RxCross2 className="size-6 text-white" />
                            :
                            <RiBarChartHorizontalLine className="size-6 text-white" />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
