import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import { useTheme } from '../context/useTheme';
import TextType from '../reactBitsAnimation/TextType';
import TiltedCard from '../reactBitsAnimation/TiltedCard';
import Ballpit from '../reactBitsAnimation/Ballpit';
import ScrollReveal from '../reactBitsAnimation/ScrollReveal';
import CircularText from '../reactBitsAnimation/CircularText';
import ScrollFloat from '../reactBitsAnimation/ScrollFloat';
import SpotlightCard from '../reactBitsAnimation/SpotlightCard';
import SplashCursor from '../reactBitsAnimation/SplashCursor';
import BlobCursor from '../reactBitsAnimation/BlobCursor';
// import ScrollStack, { ScrollStackItem } from '../reactBitsAnimation/ScrollStack2';
import { GoArrowUpRight } from "react-icons/go";
import DataEntry from '../images/DataEntry.png'
import Expense from '../images/Expense.png'
import HotelBooking from '../images/HotelBooking.png'
import LMS from '../images/LMS.png'
import ScrollStack, { ScrollStackItem } from '../reactBitsAnimation/ScrollStack';
import PixelTransition from '../reactBitsAnimation/PixelTransition';
import ChromaGrid from '../reactBitsAnimation/ChromaGrid';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import LogoLoop from '../reactBitsAnimation/LogoLoop';

import { LuMail, LuPhoneCall } from 'react-icons/lu'
import { SlLocationPin } from 'react-icons/sl'
import { TbWorldPin } from 'react-icons/tb'
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

import footerImage from '../images/footerImage.avif'
import whatsappLogo from '../images/whatsappLogo.png'
import facebookLogo from '../images/facebookLogo.png'
import instagramLogo from '../images/instagramLogo.png'
import emailLogo from '../images/emailLogo.png'
import SHCircularLogo from '../images/SHCircularLogo.png'


const Layout = () => {

    const { darkMode } = useTheme();
    const [textIs, setTextIs] = useState("* EXPLORE ABOUT ME * WHO I AM * WHAT I DO ")
    const [projectTitle, setProjectTitle] = useState("Projects That Define My Code")
    const [size, setSize] = useState(220);


    // Alternative with image sources
    const imageLogos = [
        { src: "/HtmlLogo.png", alt: "HTML", href: "https://company1.com" },
        { src: "/CssLogo.png", alt: "CSS", href: "https://company2.com" },
        { src: "/JsLogo.png", alt: "JavaScript", href: "https://company3.com" },
        { src: "/ReactLogo.png", alt: "React", href: "https://company3.com" },
        { src: "/TailwindLogo.png", alt: "Tailwind", href: "https://company3.com" },
        { src: "/BootstrapLogo.png", alt: "Bootstrap", href: "https://company3.com" },
        { src: "/MuiLogo.png", alt: "MUI", href: "https://company3.com" },
    ];
    const imageLogos2 = [
        { src: "/DotNetLogo.png", alt: "Dot Net", href: "https://company1.com" },
        { src: "/MsSqlLogo.png", alt: "MS SQL", href: "https://company2.com" },
        { src: "/PhpLogo.png", alt: "PHP", href: "https://company3.com" },
        { src: "/MySqlLogo.png", alt: "MySQL", href: "https://company3.com" },
        { src: "/GitBashLogo.png", alt: "GitBash", href: "https://company3.com" },
        { src: "/PostmanLogo.png", alt: "Postman", href: "https://company3.com" },
        { src: "/VsCodeLogo.png", alt: "VS Code", href: "https://company3.com" },
        { src: "/VsStudioLogo.png", alt: "VS Studio", href: "https://company3.com" },
    ];

    const items = [
        {
            image: '/muiLogo.png',
            title: 'Alex Rivera',
            subtitle: 'Full Stack Developer',
            handle: '@alexrivera',
            borderColor: '#4F46E5',
            gradient: 'linear-gradient(145deg,#4F46E5,#000)',
            url: 'https://github.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=11',
            title: 'Jordan Chen',
            subtitle: 'DevOps Engineer',
            handle: '@jordanchen',
            borderColor: '#10B981',
            gradient: 'linear-gradient(210deg,#10B981,#000)',
            url: 'https://linkedin.com/in/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=3',
            title: 'Morgan Blake',
            subtitle: 'UI/UX Designer',
            handle: '@morganblake',
            borderColor: '#F59E0B',
            gradient: 'linear-gradient(165deg,#F59E0B,#000)',
            url: 'https://dribbble.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=16',
            title: 'Casey Park',
            subtitle: 'Data Scientist',
            handle: '@caseypark',
            borderColor: '#EF4444',
            gradient: 'linear-gradient(195deg,#EF4444,#000)',
            url: 'https://kaggle.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=25',
            title: 'Sam Kim',
            subtitle: 'Mobile Developer',
            handle: '@thesamkim',
            borderColor: '#8B5CF6',
            gradient: 'linear-gradient(225deg,#8B5CF6,#000)',
            url: 'https://github.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=60',
            title: 'Tyler Rodriguez',
            subtitle: 'Cloud Architect',
            handle: '@tylerrod',
            borderColor: '#06B6D4',
            gradient: 'linear-gradient(135deg,#06B6D4,#000)',
            url: 'https://aws.amazon.com/'
        }
    ];

    const handleConnect = (sectionName) => {
        console.log("Let's Connect Button Clicked for section:", sectionName)
        const section = document.getElementById(sectionName.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    const handleViewMyWork = (sectionName) => {
        console.log("View My Work Button Clicked for section:", sectionName)
        const section = document.getElementById(sectionName.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setSize(window.innerWidth < 768 ? 180 : 220);
            }
            else {
                setSize(window.innerWidth < 640 ? 115 : 180);
                setTextIs("* ABOUT ME * WHO I AM * WHAT I DO ")
                setProjectTitle("Code-Defining Projects")
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    return (
        <div className={`w-full relative  poppinsFont ${darkMode ? 'bg-gradient-to-b from-black via-black to-gray-800 text-white' : 'bg-white text-black'}`} >

            <Navbar />


            <SplashCursor />

            {/* <div className='absolute top-0 left-0 w-full h-full'>
                <BlobCursor
                    blobType="circle"
                    fillColor="#F88F5D"
                    trailCount={3}
                    sizes={[60, 125, 75]}
                    innerSizes={[20, 35, 25]}
                    innerColor="rgba(255, 248, 230, 0.85)"
                    opacities={[0.5, 0.5, 0.5]}
                    shadowColor="rgba(247, 127, 127, 0.6)"
                    shadowBlur={5}
                    shadowOffsetX={10}
                    shadowOffsetY={10}
                    filterStdDeviation={30}
                    useFilter={true}
                    fastDuration={0.1}
                    slowDuration={0.5}
                    zIndex={2}
                />
            </div> */}


            <Section id="home" title="Home">
                <div className='pt-16 pb-4 w-full h-fit' style={{ position: 'relative', overflow: 'hidden' }}>

                    {/* <div className='absolute top-0 left-0 w-full h-full'>
                        <Ballpit
                            count={1}
                            colors={['#5227FF', '#FF9FFC', '#F9B7FF', '#FFC3E1']}
                            gravity={0.7}
                            friction={0.8}
                            wallBounce={0.95}
                            followCursor={true}
                        />
                    </div> */}

                    <div className='w-full h-full flex justify-center'>
                        <div className='mt-4 w-full flex flex-col items-center gap-2.5'>
                            <div className='sm:flex flex-none relative z-40'>
                                <div className="sm:text-5xl text-4xl font-semibold balthazarFont">Hi, I'm&nbsp;</div>

                                <TextType
                                    text={["Software Developer", "Full Stack Engineer", "MERN Stack Developer", "Backend Developer", "Tech Enthusiast"]}
                                    typingSpeed={100}
                                    pauseDuration={2000}
                                    showCursor={true}
                                    cursorCharacter="|"
                                    textColors={darkMode ? ['#FFA07A', '#FFD700', '#7DF9FF', '#FFB6C1', '#ADD8E6'] : ['#FF7F50', '#FF8C00', '#00BFFF', '#FF69B4', '#1E90FF']}

                                    className="sm:text-5xl text-4xl font-semibold balthazarFont"
                                />
                            </div>


                            <div className='relative z-40 mt-4 flex justify-center'>
                                <div className='w-fit p-1.5 rounded-2xl' style={{
                                    background: "linear-gradient(111.6deg, rgba(114,167,232,1) 9.4%, rgba(253,129,82,1) 43.9%, rgba(253,129,82,1) 54.8%, rgba(249,202,86,1) 86.3%)",
                                }}>
                                    <TiltedCard
                                        imageSrc="/ShakeelImage.png"
                                        altText="Shakeel Ansari - Profile Photo"
                                        captionText="Shakeel Ansari"
                                        containerHeight="350px"
                                        containerWidth="300px"
                                        imageHeight="350px"
                                        imageWidth="300px"
                                        rotateAmplitude={15}
                                        scaleOnHover={1.1}
                                        showMobileWarning={false}
                                        showTooltip={true}
                                        displayOverlayContent={true}
                                        overlayContent={
                                            <div className='rounded-2xl opacity-30 h-[350px] w-[300px] bg-black/50 hover:bg-[radial-gradient(circle_farthest-corner_at_-4.1%_49.8%,_rgba(247,127,127,1)_0%,_rgba(255,175,90,1)_20.8%,_rgba(151,255,114,1)_43.8%,_rgba(149,251,255,1)_65.2%,_rgba(147,145,255,1)_84.3%,_rgba(255,147,248,1)_100.2%)] ' ></div>
                                        }
                                    />

                                    <div className='mt-4 text-white text-center'>Building Logic Into Life</div>
                                </div>
                            </div>

                            <div className='relative z-40 mt-4 w-full px-6 2xl:text-4xl sm:text-3xl text-2xl flex justify-center text-center'>

                                <div className='lg:w-3/4 md:w-4/5 w-full'>
                                    <ScrollReveal
                                        baseOpacity={0}
                                        enableBlur={true}
                                        baseRotation={0}
                                        blurStrength={5}
                                    >
                                        Developing reliable and high-performing web solutions with clean architecture and robust functionality.
                                    </ScrollReveal>
                                </div>
                            </div>

                            <div className='relative z-40 mt-4 w-full px-6 flex sm:justify-center justify-between sm:gap-40 '>

                                <button className="relative sm:px-8 px-4 py-4 cursor-pointer border rounded-full overflow-hidden group font-medium" onClick={() => handleConnect("Contact")}>
                                    <span className="relative z-10">Let's Connect</span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 
                                    transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0">
                                    </span>
                                </button>

                                <button className="relative sm:px-8 px-4 py-4 cursor-pointer border rounded-full overflow-hidden group font-medium" onClick={() => handleViewMyWork("Projects")}>
                                    <span className="relative z-10">View My Work</span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 
                                    transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0">
                                    </span>
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </Section>

            <Section id="about" title="About">
                <div className='pt-16 pb-4 px-6 w-full h-fit' >
                    <div className='w-full h-full pt-4'>
                        <div className='w-full'>
                            <div className='w-full text-center 2xl:text-7xl md:text-6xl sm:text-5xl text-4xl font-semibold balthazarFont'>
                                <ScrollFloat
                                    animationDuration={1}
                                    ease='back.inOut(2)'
                                    scrollStart='center bottom+=50%'
                                    scrollEnd='bottom bottom-=40%'
                                    stagger={0.2}
                                >
                                    Explore About Me
                                </ScrollFloat>
                            </div>

                            <div className='relative w-full lg:h-[1700px] md:h-[1600px] sm:h-[1500] h-[1200px] mt-12 flex justify-center'>

                                <div className='sticky top-20 rounded-full h-fit w-fit'>
                                    <CircularText
                                        // text="* EXPLORE ABOUT ME * WHO I AM * WHAT I DO&nbsp;"
                                        text={textIs}
                                        onHover="speedUp"
                                        spinDuration={20}
                                        className="custom-class"
                                    />

                                    <div className='absolute top-0 h-full w-full rounded-full flex justify-center items-center p-16 sm:p-[70px]'>

                                        <PixelTransition
                                            firstContent={
                                                <img
                                                    src="/ShakeelImage.png"
                                                    alt="default pixel transition content, a cat!"
                                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "100%" }}
                                                />
                                            }
                                            secondContent={
                                                <div
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        display: "grid",
                                                        placeItems: "center",
                                                        backgroundColor: "#111",
                                                        borderRadius: "100%"
                                                    }}
                                                >
                                                    <div className='sm:inline hidden text-center font-semibold md:text-5xl text-4xl'>
                                                        <p>Shakeel</p>
                                                        <p>Ansari</p>
                                                    </div>

                                                    <p className='inline sm:hidden text-center font-semibold md:text-5xl text-4xl'>
                                                        SHA
                                                    </p>
                                                </div>
                                            }
                                            gridSize={12}
                                            pixelColor='#ffffff'
                                            animationStepDuration={0.4}
                                            className="custom-pixel-card rounded-full"
                                        />

                                        {/* <TiltedCard
                                            imageSrc="/ShakeelImage2.png"
                                            altText="Shakeel Ansari - Profile Photo"
                                            captionText=""
                                            // containerHeight="220px"
                                            // containerWidth="220px"
                                            // imageHeight="220px"
                                            // imageWidth="220px"
                                            containerHeight={`${size}px`}
                                            containerWidth={`${size}px`}
                                            imageHeight={`${size}px`}
                                            imageWidth={`${size}px`}
                                            rotateAmplitude={15}
                                            scaleOnHover={1.1}
                                            showMobileWarning={false}
                                            showTooltip={false}
                                            displayOverlayContent={false}
                                            className="rounded-full"
                                        /> */}
                                    </div>
                                </div>

                                <div className='absolute bottom-8 w-full'>
                                    <div className='flex justify-end md:mb-16 mb-12 md:pr-14 sm:pr-6'>
                                        <div className='lg:w-2/5 md:w-3/5 sm:w-4/5 w-full'>
                                            <SpotlightCard className="custom-spotlight-card sm:text-lg text-base font-light text-white transition-transform duration-300 md:rotate-6 hover:rotate-0" spotlightColor="rgba(251, 164, 24, 0.25)">
                                                I’m Shakeel Ansari, a Full Stack Software Developer passionate about building scalable and high-performance web solutions that simplify real-world problems.
                                            </SpotlightCard>
                                        </div>
                                    </div>

                                    <div className='flex justify-start md:mb-16 mb-12 md:pl-14 sm:pl-6'>
                                        <div className='lg:w-2/5 md:w-3/5 sm:w-4/5 w-full'>
                                            <SpotlightCard className="custom-spotlight-card sm:text-lg text-base font-light text-white transition-transform duration-300 md:-rotate-6 hover:rotate-0" spotlightColor="rgba(251, 164, 24, 0.25)">
                                                Built end-to-end software solutions including a Data Entry Manager, Expense Tracker, Hotel Booking System, and Letter Management System - focusing on performance and scalability.
                                            </SpotlightCard>
                                        </div>
                                    </div>

                                    <div className='flex justify-end md:mb-16 mb-12 md:pr-14 sm:pr-6'>
                                        <div className='lg:w-2/5 md:w-3/5 sm:w-4/5 w-full'>
                                            <SpotlightCard className="custom-spotlight-card sm:text-lg text-base font-light text-white transition-transform duration-300 md:rotate-6 hover:rotate-0" spotlightColor="rgba(251, 164, 24, 0.25)">
                                                I have done B.Tech in Computer Science and Engineering - which strengthened my technical foundation and fueled my passion for programming & problem-solving.
                                            </SpotlightCard>
                                        </div>
                                    </div>

                                    <div className='flex justify-start md:mb-16 mb-12 md:pl-14 sm:pl-6'>
                                        <div className='lg:w-2/5 md:w-3/5 sm:w-4/5 w-full'>
                                            <SpotlightCard className="custom-spotlight-card sm:text-lg text-base font-light text-white transition-transform duration-300 md:-rotate-6 hover:rotate-0" spotlightColor="rgba(251, 164, 24, 0.25)">
                                                Core Strengths: Full Stack Development, strong problem-solving, clean and maintainable code, and a focus on reliable performance.
                                            </SpotlightCard>
                                        </div>
                                    </div>

                                    <div className='flex justify-end mb-10 lg:pr-24 sm:pr-6'>
                                        <button className="relative sm:px-8 px-4 py-4 cursor-pointer border rounded-full overflow-hidden group font-medium">
                                            <span className="relative z-10">Explore My Resume</span>
                                            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 
                                           transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0">
                                            </span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </Section>

            <Section id="projects" title="Projects">
                <div className='pt-16 pb-4 px-6 w-full h-fit' >
                    <div className='w-full h-full pt-4'>
                        <div className='w-full'>
                            <div className='w-full text-center 2xl:text-7xl md:text-6xl sm:text-5xl text-4xl font-semibold balthazarFont'>
                                <ScrollFloat
                                    animationDuration={1}
                                    ease='back.inOut(2)'
                                    scrollStart='center bottom+=50%'
                                    scrollEnd='bottom bottom-=40%'
                                    stagger={0.2}
                                >
                                    {projectTitle}
                                </ScrollFloat>

                                <div className='mt-4 2xl:text-3xl sm:text-2xl text-xl poppinsFont'>Each project reflects my passion for building reliable and scalable web solutions.</div>
                            </div>

                            <div className='w-full flex justify-center h-[1700px] [@media(min-width:500px)]:h-fit '>

                                <ScrollStack useWindowScroll={true}>
                                    <ScrollStackItem
                                        itemClassName={`w-fit h-fit border-2 hover:border-4 border-[#FBA418] rounded-2xl  relative  ${darkMode ? "bg-black" : "bg-white"} `}
                                    >
                                        <div className='w-fit h-fit  rounded-[38px] hover:rounded-[36px] overflow-hidden'>
                                            <img src={DataEntry} alt="" className='w-fit h-fit object-contain' />
                                        </div>

                                        <div className={`absolute top-3 right-3 cursor-pointer rounded-full p-1  hover:bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 transition-transform duration-300  ${darkMode ? "bg-white/70" : "bg-black/70"} `}>
                                            <GoArrowUpRight className='size-8 text-white' />
                                        </div>

                                        <div className='px-4 py-2 w-full flex justify-between'>
                                            <div className=''>
                                                <div className='font-semibold mb-1'>Data Entry Manager</div>
                                                <div>Web-based System to Manage and Track Data Efficiently</div>
                                            </div>
                                            <div className='font-semibold'>2025</div>
                                        </div>
                                    </ScrollStackItem>

                                    <ScrollStackItem
                                        itemClassName={`w-fit h-fit border-2 hover:border-4 border-[#FBA418] rounded-2xl  relative  ${darkMode ? "bg-black" : "bg-white"} `}
                                    >
                                        <div className='w-fit h-fit  rounded-[38px] hover:rounded-[36px] overflow-hidden'>
                                            <img src={Expense} alt="" className='w-fit h-fit object-contain' />
                                        </div>

                                        <div className={`absolute top-3 right-3 cursor-pointer rounded-full p-1  hover:bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 transition-transform duration-300  ${darkMode ? "bg-white/70" : "bg-black/70"} `}>
                                            <GoArrowUpRight className='size-8 text-white' />
                                        </div>

                                        <div className='px-4 py-2 w-full flex justify-between'>
                                            <div className=''>
                                                <div className='font-semibold mb-1'>Expense Tracker</div>
                                                <div>Smart app to record, categorize, and analyze expenses</div>
                                            </div>
                                            <div className='font-semibold'>2025</div>
                                        </div>
                                    </ScrollStackItem>

                                    <ScrollStackItem
                                        itemClassName={`w-fit h-fit border-2 hover:border-4 border-[#FBA418] rounded-2xl  relative  ${darkMode ? "bg-black" : "bg-white"} `}
                                    >
                                        <div className='w-fit h-fit  rounded-[38px] hover:rounded-[36px] overflow-hidden'>
                                            <img src={LMS} alt="" className='w-fit h-fit object-contain' />
                                        </div>

                                        <div className={`absolute top-3 right-3 cursor-pointer rounded-full p-1  hover:bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 transition-transform duration-300  ${darkMode ? "bg-white/70" : "bg-black/70"} `}>
                                            <GoArrowUpRight className='size-8 text-white' />
                                        </div>

                                        <div className='px-4 py-2 w-full flex justify-between'>
                                            <div className=''>
                                                <div className='font-semibold mb-1'>Letter Management System</div>
                                                <div>Digital solution to handle official correspondence efficiently</div>
                                            </div>
                                            <div className='font-semibold'>2025</div>
                                        </div>
                                    </ScrollStackItem>

                                    <ScrollStackItem
                                        itemClassName={`w-fit h-fit border-2 hover:border-4 border-[#FBA418] rounded-2xl  relative  ${darkMode ? "bg-black" : "bg-white"} `}
                                    >
                                        <div className='w-fit h-fit  rounded-[38px] hover:rounded-[36px] overflow-hidden'>
                                            <img src={HotelBooking} alt="" className='w-fit h-fit object-contain' />
                                        </div>

                                        <div className={`absolute top-3 right-3 cursor-pointer rounded-full p-1  hover:bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 transition-transform duration-300  ${darkMode ? "bg-white/70" : "bg-black/70"} `}>
                                            <GoArrowUpRight className='size-8 text-white' />
                                        </div>

                                        <div className='px-4 py-2 w-full flex justify-between'>
                                            <div className=''>
                                                <div className='font-semibold mb-1'>Hotel Booking System</div>
                                                <div>Platform for room listings, real-time availability, and reservation</div>
                                            </div>
                                            <div className='font-semibold'>2025</div>
                                        </div>
                                    </ScrollStackItem>
                                </ScrollStack>

                            </div>

                        </div>
                    </div>
                </div>
            </Section>

            {/* <Section id="experience" title="Experience">
                <div className='pt-16 pb-4 px-6 w-full h-fit' >
                    <div className='w-full h-full pt-4'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, necessitatibus.
                    </div>
                </div>
            </Section> */}

            <Section id="skills" title="Skills">
                <div className='pt-16 pb-4  w-full h-fit' >
                    <div className='w-full h-full pt-4'>
                        <div className='w-full'>
                            <div className='px-6 w-full text-center 2xl:text-7xl md:text-6xl sm:text-5xl text-4xl font-semibold balthazarFont'>
                                <ScrollFloat
                                    animationDuration={1}
                                    ease='back.inOut(2)'
                                    scrollStart='center bottom+=50%'
                                    scrollEnd='bottom bottom-=40%'
                                    stagger={0.2}
                                >
                                    Tech Stack I Work With
                                </ScrollFloat>

                                <div className='mt-4 2xl:text-3xl sm:text-2xl text-xl poppinsFont'>Equipped with a versatile Full-Stack skill set to build reliable, scalable, and high-performing web solutions.</div>
                            </div>


                            <div className='mt-8'>
                                <div style={{ height: '130px', position: 'relative', overflow: 'hidden' }} className=''>
                                    <LogoLoop
                                        logos={imageLogos}
                                        speed={120}
                                        direction="left"
                                        logoHeight={100}
                                        gap={40}
                                        pauseOnHover
                                        scaleOnHover
                                        fadeOut
                                        // fadeOutColor="#ffffff"
                                        // fadeOutColor={darkMode ? "#ffffff" : "#000000"}
                                        fadeOutColor={darkMode ? "#000000" : "#ffffff"}
                                        ariaLabel="Technology partners"
                                    />
                                </div>

                                <div style={{ height: '130px', position: 'relative', overflow: 'hidden' }} className=''>
                                    <LogoLoop
                                        logos={imageLogos2}
                                        speed={120}
                                        direction="right"
                                        logoHeight={100}
                                        gap={40}
                                        pauseOnHover
                                        scaleOnHover
                                        fadeOut
                                        // fadeOutColor={darkMode ? "#ffffff" : "#000000"}
                                        fadeOutColor={darkMode ? "#000000" : "#ffffff"}
                                        ariaLabel="Technology partners"
                                    />
                                </div>
                            </div>


                            <div className='mt-8 grid md:grid-cols-2 lg:gap-8 gap-6 lg:px-40 md:px-12 px-6'>

                                <div className='md:h-72 h-fit w-full bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 p-1.5 rounded-2xl overflow-hidden  hover:scale-[1.02] transition-all duration-300 group cursor-pointer relative'
                                >
                                    <div className={`h-full ${darkMode ? "bg-gray-900" : "bg-white"} rounded-xl `}>

                                        <div className='h-full w-full lg:p-6 p-4 flex items-center'>
                                            <div>
                                                <div className='lg:text-2xl text-xl cinzelFont'>💻 Frontend Development</div>
                                                <div className='mt-4'>
                                                    <span className='font-semibold'>Tech Stack: </span>
                                                    <span>HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, Material UI
                                                    </span>
                                                </div>
                                                <div className='mt-2'>
                                                    <span className='font-semibold'>Description: </span>
                                                    <span>I craft responsive and user-friendly interfaces using modern frameworks and libraries, ensuring clean design and smooth user experience.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? "from-white/100 to-white/5" : "from-black/100 to-black/5"}  translate-y-full group-hover:translate-y-0 transition-transform duration-400  `}></div>

                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                            <div className='h-full w-full flex flex-col justify-between'>
                                                <div className='h-1/2 relative'>
                                                    <div className='absolute top-6 -right-8 bg-red-500 text-xs text-white font-bold px-10 py-1 transform rotate-45'>
                                                        FRONTEND
                                                    </div>
                                                </div>

                                                <div className='h-1/2 text-white text-xs flex items-end p-4'>
                                                    <div className='w-full flex justify-center'>
                                                        <div className={` ${darkMode ? "bg-black/90 text-white " : "bg-white/90 text-black "}  px-2 py-0.5 w-fit rounded-full text-[10px] `}>Building responsive, interactive, and modern user interfaces with React.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='md:h-72 h-fit w-full bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 p-1.5 rounded-2xl overflow-hidden  hover:scale-[1.02] transition-all duration-300 group cursor-pointer relative'
                                >
                                    <div className={`h-full ${darkMode ? "bg-gray-900" : "bg-white"} rounded-xl `}>

                                        <div className='h-full w-full lg:p-6 p-4 flex items-center'>
                                            <div>
                                                <div className='lg:text-2xl text-xl cinzelFont'>⚙️ Backend Development (APIs)</div>
                                                <div className='mt-4'>
                                                    <span className='font-semibold'>Tech Stack: </span>
                                                    <span>.NET Web API, PHP, REST APIs
                                                    </span>
                                                </div>
                                                <div className='mt-2'>
                                                    <span className='font-semibold'>Description: </span>
                                                    <span>I build secure and scalable RESTful APIs, focusing on seamless data communication between frontend and backend with strong architectural practices.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? "from-white/100 to-white/5" : "from-black/100 to-black/5"}  translate-y-full group-hover:translate-y-0 transition-transform duration-400  `}></div>

                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                            <div className='h-full w-full flex flex-col justify-between'>
                                                <div className='h-1/2 relative'>
                                                    <div className='absolute top-6 -right-8 bg-red-500 text-xs text-white font-bold px-10 py-1 transform rotate-45'>
                                                        BACKEND
                                                    </div>
                                                </div>

                                                <div className='h-1/2 text-white text-xs flex items-end p-4'>
                                                    <div className='w-full flex justify-center'>
                                                        <div className={` ${darkMode ? "bg-black/90 text-white " : "bg-white/90 text-black "}  px-2 py-0.5 w-fit rounded-full text-[10px] `}>Developing secure, scalable, and high-performance server-side APIs.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='md:h-72 h-fit w-full bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 p-1.5 rounded-2xl overflow-hidden  hover:scale-[1.02] transition-all duration-300 group cursor-pointer relative'
                                >
                                    <div className={`h-full ${darkMode ? "bg-gray-900" : "bg-white"} rounded-xl `}>

                                        <div className='h-full w-full lg:p-6 p-4 flex items-center'>
                                            <div>
                                                <div className='lg:text-2xl text-xl cinzelFont'>🗄️ Database Management</div>
                                                <div className='mt-4'>
                                                    <span className='font-semibold'>Tech Stack: </span>
                                                    <span>MS SQL Server, MySQL
                                                    </span>
                                                </div>
                                                <div className='mt-2'>
                                                    <span className='font-semibold'>Description: </span>
                                                    <span>Skilled in designing, structuring, and optimizing databases for performance, data integrity, and scalability across applications.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? "from-white/100 to-white/5" : "from-black/100 to-black/5"}  translate-y-full group-hover:translate-y-0 transition-transform duration-400  `}></div>

                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                            <div className='h-full w-full flex flex-col justify-between'>
                                                <div className='h-1/2 relative'>
                                                    <div className='absolute top-6 -right-8 bg-red-500 text-xs text-white font-bold px-10 py-1 transform rotate-45'>
                                                        DATABASE
                                                    </div>
                                                </div>

                                                <div className='h-1/2 text-white text-xs flex items-end p-4'>
                                                    <div className='w-full flex justify-center'>
                                                        <div className={` ${darkMode ? "bg-black/90 text-white " : "bg-white/90 text-black "}  px-2 py-0.5 w-fit rounded-full text-[10px] `}>Managing structured, optimized, and reliable data storage solutions.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='md:h-72 h-fit w-full bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 p-1.5 rounded-2xl overflow-hidden  hover:scale-[1.02] transition-all duration-300 group cursor-pointer relative'
                                >
                                    <div className={`h-full ${darkMode ? "bg-gray-900" : "bg-white"} rounded-xl `}>

                                        <div className='h-full w-full lg:p-6 p-4 flex items-center'>
                                            <div>
                                                <div className='lg:text-2xl text-xl cinzelFont'>🧰 Tools & Technologies</div>
                                                <div className='mt-4'>
                                                    <span className='font-semibold'>Tech Stack: </span>
                                                    <span>Git & GitHub, Postman, VS Code, Visual Studio
                                                    </span>
                                                </div>
                                                <div className='mt-2'>
                                                    <span className='font-semibold'>Description: </span>
                                                    <span>I use efficient tools for version control, testing, and development to ensure quality workflow and smooth deployment.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? "from-white/100 to-white/5" : "from-black/100 to-black/5"}  translate-y-full group-hover:translate-y-0 transition-transform duration-400  `}></div>

                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                            <div className='h-full w-full flex flex-col justify-between'>
                                                <div className='h-1/2 relative'>
                                                    <div className='absolute top-6 -right-8 bg-red-500 text-xs text-white font-bold px-10 py-1 transform rotate-45'>
                                                        TOOLS
                                                    </div>
                                                </div>

                                                <div className='h-1/2 text-white text-xs flex items-end p-4'>
                                                    <div className='w-full flex justify-center'>
                                                        <div className={` ${darkMode ? "bg-black/90 text-white " : "bg-white/90 text-black "}  px-2 py-0.5 w-fit rounded-full text-[10px] `}>Streamlining development and version control with powerful tools.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </Section>

            {/* <Section id="contact" title="Contact" bg="bg-gradient-to-b from-green-100 to-pink-100"> */}
            <Section id="contact" title="Contact">
                <div className='pt-16   w-full h-fit' >
                    <div className='w-full h-full pt-4'>
                        <div className='w-full px-6'>
                            <div className='w-full text-center 2xl:text-7xl md:text-6xl sm:text-5xl text-4xl font-semibold balthazarFont'>
                                <ScrollFloat
                                    animationDuration={1}
                                    ease='back.inOut(2)'
                                    scrollStart='center bottom+=50%'
                                    scrollEnd='bottom bottom-=40%'
                                    stagger={0.2}
                                >
                                    Let’s Build Something Together
                                </ScrollFloat>

                                <div className='mt-4 2xl:text-3xl sm:text-2xl text-xl poppinsFont'>I’m always open to discuss new projects, ideas, or opportunities. Feel free to reach out - I’d love to collaborate and bring ideas to life.
                                </div>
                            </div>

                            <div className='mt-8 sm:px-12  w-full flex lg:flex-row flex-col lg:items-center lg:gap-8 gap-8 '>
                                <div className='md:w-1/2'>
                                    <div className='text-lg font-semibold'>Have an idea or project ? Let’s turn it into reality.</div>

                                    <div className=''>
                                        <div className='w-full sm:flex gap-2 justify-between mt-6'>
                                            <div className='w-1/3 font-semibold flex gap-2'>
                                                <LuMail className='mt-0.5 size-5' />
                                                <div>Email</div>
                                            </div>
                                            <div className='w-2/3 sm:ml-0 ml-6'>me.sakeelansari313@gmail.com</div>
                                        </div>

                                        <div className='mt-4 w-full sm:flex gap-2 justify-between'>
                                            <div className='w-1/3 font-semibold flex gap-2'>
                                                <SlLocationPin className='mt-0.5 size-5' />
                                                <div>Address</div>
                                            </div>
                                            <div className='w-2/3 sm:ml-0 ml-6'>Birgunj 23, Parsa, Nepal</div>
                                        </div>

                                        <div className='w-full sm:flex gap-2 justify-between mt-4'>
                                            <div className='w-1/3 font-semibold flex gap-2'>
                                                <CiLinkedin className='mt-0.5 size-5' />
                                                <div>Linkedin</div>
                                            </div>
                                            <div className='w-2/3 sm:ml-0 ml-6'>linkedin.com/in/meshakeelansari</div>
                                        </div>

                                        <div className='w-full sm:flex gap-2 justify-between mt-4'>
                                            <div className='w-1/3 font-semibold flex gap-2'>
                                                <FiGithub className='mt-0.5 size-5' />
                                                <div>GitHub</div>
                                            </div>
                                            <div className='w-2/3 sm:ml-0 ml-6'>github.com/meshakeelansari</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='lg:w-1/2 lg:p-6 p-4 flex flex-col gap-2.5 border rounded-2xl'>
                                    <div>
                                        <div className='font-semibold'>Full Name</div>
                                        <div>
                                            <input type="text" placeholder='Enter your full name' className='mt-1 px-3 py-1.5 w-full border border-gray-400 rounded-md focus:outline-none focus:border-blue-600 focus:ring-0  hover:border-black' />
                                        </div>
                                    </div>

                                    <div>
                                        <div className='font-semibold'>Email</div>
                                        <div>
                                            <input type="email" placeholder='Enter your email address' autoComplete='true' className='mt-1 px-3 py-1.5 w-full border border-gray-400 rounded-md focus:outline-none focus:border-blue-600 focus:ring-0  hover:border-black' />
                                        </div>
                                    </div>

                                    <div>
                                        <div className='font-semibold'>Message</div>
                                        <div>
                                            <textarea name="" id="" placeholder='Share your project or idea...' className='mt-1 px-3 py-1.5 w-full border border-gray-400 rounded-md focus:outline-none focus:border-blue-600 focus:ring-0  hover:border-black' ></textarea>
                                        </div>
                                    </div>

                                    <div>
                                        <button className="relative mt-2 px-3 py-1.5 w-full cursor-pointer border border-gray-400 hover:border-black rounded-md overflow-hidden group " onClick={handleConnect}>
                                            <span className="relative z-10 font-semibold">Send</span>
                                            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 
                                    transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0">
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='mt-16 relative'>
                            <img src={footerImage} alt="Footer" className='lg:h-120 h-96 w-full' />

                            <div className='absolute lg:bottom-4 bottom-2 left-0 w-full sm:px-6 px-2'>
                                <div className='text-white flex justify-between items-center gap-4'>
                                    <div className=''>
                                        <div className='flex items-center gap-2'>
                                            <img src={SHCircularLogo} alt="" className='md:h-16 sm:h-12 h-10  rounded-full' />
                                            <div>
                                                <div className='balthazarFont md:text-2xl text-xl'>Shakeel Ansari</div>
                                                <div className='md:text-sm text-xs -mt-1'>Software Developer</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <div className='md:text-2xl sm:text-xl font-semibold balthazarFont'>Let’s Connect</div>
                                        <div className='text-sm mt-2 flex flex-col gap-2'>
                                            <a href='https://wa.me/+917765856374' target="_blank" rel="noopener noreferrer"
                                                className='flex gap-4'>
                                                <img src={whatsappLogo} alt="" className='size-6 hover:scale-110 cursor-pointer' />
                                                <p className='hover:scale-110 cursor-pointer'>WhatsApp</p>
                                            </a>

                                            <a href='https://www.facebook.com/me.shakeelansari' target="_blank" rel="noopener noreferrer"
                                                className='flex gap-4'>
                                                <img src={facebookLogo} alt="" className='size-6 hover:scale-110 cursor-pointer' />
                                                <p className='hover:scale-110 cursor-pointer'>Facebook</p>
                                            </a>

                                            <a href='https://www.instagram.com/me.shakeelansari' target="_blank" rel="noopener noreferrer"
                                                className='flex gap-4'>
                                                <img src={instagramLogo} alt="" className='size-6 hover:scale-110 cursor-pointer' />
                                                <p className='hover:scale-110 cursor-pointer'>Instagram</p>
                                            </a>

                                            <a href="mailto:me.shansari313@gmail.com" target="_blank" rel="noopener noreferrer"
                                                className='flex gap-4'>
                                                <img src={emailLogo} alt="" className='size-6 hover:scale-110 cursor-pointer' />
                                                <p className='hover:scale-110 cursor-pointer'>Email</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className='text-white sm:text-xs text-[10px] lg:mt-8 mt-4 mb-4 flex justify-center'>
                                    <div>© 2025 Shakeel Ansari. All Rights Reserved.</div>
                                </div>

                            </div>

                            {/* <div className='lg:h-4 md:h-8 h-24 bg-gradient-to-r from-black via-[#91361d] to-black'></div> */}

                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Layout
