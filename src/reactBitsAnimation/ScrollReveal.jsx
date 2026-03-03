import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
    children,
    scrollContainerRef,
    enableBlur = true,
    baseOpacity = 0.1,
    baseRotation = 3,
    blurStrength = 4,
    containerClassName = '',
    textClassName = '',
    rotationEnd = 'bottom bottom',
    letterAnimationEnd = 'bottom bottom',
}) => {
    const containerRef = useRef(null);

    // Split text into letters
    const splitText = useMemo(() => {
        const text = typeof children === 'string' ? children : '';
        return text.split('').map((char, index) => {
            if (char === ' ') return <span key={index}> </span>;
            return (
                <span className="inline-block letter" key={index}>
                    {char}
                </span>
            );
        });
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller =
            scrollContainerRef && scrollContainerRef.current
                ? scrollContainerRef.current
                : window;

        // Optional container rotation
        gsap.fromTo(
            el,
            { transformOrigin: '0% 50%', rotate: baseRotation },
            {
                ease: 'none',
                rotate: 0,
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: 'top bottom',
                    end: rotationEnd,
                    scrub: true,
                },
            }
        );

        const letterElements = el.querySelectorAll('.letter');

        // Fade-in letters
        gsap.fromTo(
            letterElements,
            { opacity: baseOpacity, willChange: 'opacity' },
            {
                ease: 'power1.out',
                opacity: 1,
                stagger: 0.2, // slow per-letter animation
                scrollTrigger: {
                    trigger: el,
                    scroller,
                    start: 'top bottom-=20%',
                    end: letterAnimationEnd,
                    scrub: 2, // smooth scroll-based animation
                },
            }
        );

        // Optional blur
        if (enableBlur) {
            gsap.fromTo(
                letterElements,
                { filter: `blur(${blurStrength}px)` },
                {
                    ease: 'power1.out',
                    filter: 'blur(0px)',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: 'top bottom-=20%',
                        end: letterAnimationEnd,
                        scrub: 2,
                    },
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [
        scrollContainerRef,
        enableBlur,
        baseRotation,
        baseOpacity,
        rotationEnd,
        letterAnimationEnd,
        blurStrength,
    ]);

    return (
        <h2 ref={containerRef} className={`${containerClassName}`}>
            <p className={`${textClassName}`}>{splitText}</p>
        </h2>
    );
};

export default ScrollReveal;
