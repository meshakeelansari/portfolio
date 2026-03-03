import { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "lenis";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
    <div
        className={`scroll-stack-card relative w-full h-80 my-8  rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] ${itemClassName}`}
        style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
            transform: "translate3d(0,0,0)",
            transformOrigin: "top center",
            contain: "layout paint style",
            perspective: "1000px",
        }}
    >
        {children}
    </div>
);

const ScrollStack = ({
    children,
    className = "",
    itemDistance = 100,
    itemScale = 0.03,
    itemStackDistance = 30,
    stackPosition = "20%",
    scaleEndPosition = "10%",
    baseScale = 0.85,
    rotationAmount = 0,
    useWindowScroll = false,
}) => {
    const scrollerRef = useRef(null);
    const cardsRef = useRef([]);
    const smoothScrollY = useRef(0);

    const lerp = (a, b, t) => a + (b - a) * t;
    const calcProgress = (scroll, start, end) =>
        scroll < start ? 0 : scroll > end ? 1 : (scroll - start) / (end - start);

    const parsePct = (v, h) =>
        typeof v === "string" && v.includes("%")
            ? (parseFloat(v) / 100) * h
            : parseFloat(v);

    const getOffset = (el) =>
        useWindowScroll ? el.getBoundingClientRect().top + window.scrollY : el.offsetTop;

    const updateCards = useCallback(
        (scrollY) => {
            const containerHeight = useWindowScroll
                ? window.innerHeight
                : scrollerRef.current.clientHeight;

            const stackPx = parsePct(stackPosition, containerHeight);
            const scaleEndPx = parsePct(scaleEndPosition, containerHeight);
            const endEl = document.querySelector(".scroll-stack-end");
            const endTop = endEl ? getOffset(endEl) : 0;

            cardsRef.current.forEach((card, i) => {
                const top = getOffset(card);
                const triggerStart = top - stackPx - itemStackDistance * i;
                const triggerEnd = top - scaleEndPx;
                const pinStart = top - stackPx - itemStackDistance * i;
                const pinEnd = endTop - containerHeight / 2;

                const progress = calcProgress(scrollY, triggerStart, triggerEnd);
                const targetScale = baseScale + i * itemScale;
                const scale = 1 - progress * (1 - targetScale);
                const rotation = rotationAmount ? i * rotationAmount * progress : 0;

                let translateY = 0;
                const pinned = scrollY >= pinStart && scrollY <= pinEnd;
                if (pinned) translateY = scrollY - top + stackPx + itemStackDistance * i;
                else if (scrollY > pinEnd)
                    translateY = pinEnd - top + stackPx + itemStackDistance * i;

                // 🎯 refined interpolation: slightly faster but stable
                const prevY = card.__lastY ?? translateY;
                translateY = lerp(prevY, translateY, 0.35);
                card.__lastY = translateY;

                // fractional pixel rounding (0.5 px)
                const round = (v) => Math.round(v * 2) / 2;
                const tY = round(translateY);
                const s = Math.round(scale * 1000) / 1000;
                const r = Math.round(rotation * 10) / 10;

                card.style.transform = `translate3d(0, ${tY}px, 0) scale(${s}) rotate(${r}deg)`;
            });
        },
        [useWindowScroll, itemStackDistance, stackPosition, scaleEndPosition, baseScale, rotationAmount]
    );

    useLayoutEffect(() => {
        const cards = Array.from(
            useWindowScroll
                ? document.querySelectorAll(".scroll-stack-card")
                : scrollerRef.current.querySelectorAll(".scroll-stack-card")
        );
        cardsRef.current = cards;

        const raf = () => {
            const currentY = useWindowScroll
                ? window.scrollY
                : scrollerRef.current.scrollTop;

            // ⚡️ faster reaction (was 0.2 before)
            smoothScrollY.current = lerp(smoothScrollY.current, currentY, 0.35);

            updateCards(smoothScrollY.current);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        smoothScrollY.current = useWindowScroll
            ? window.scrollY
            : scrollerRef.current.scrollTop;
    }, [updateCards, useWindowScroll]);

    const containerStyle = useWindowScroll
        ? { overscrollBehavior: "contain", transform: "translateZ(0)" }
        : {
            overflowY: "auto",
            overscrollBehavior: "contain",
            transform: "translateZ(0)",
        };

    return (
        <div
            ref={scrollerRef}
            className={`relative w-full ${!useWindowScroll ? "h-full overflow-y-auto" : ""
                } ${className}`}
            style={containerStyle}
        >
            <div className="scroll-stack-inner pt-[5vh] lg:px-32 md:px-20 sm:px-4  pb-[20rem] min-h-screen">
                {children}
                <div className="scroll-stack-end h-px w-full" />
            </div>
        </div>
    );
};

export default ScrollStack;
