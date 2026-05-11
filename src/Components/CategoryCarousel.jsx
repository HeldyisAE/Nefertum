import { useState, useEffect, useRef } from "react";
import "./CategoryCarousel.css";

import Versace      from "../assets/Versace.png";
import BottleParfum from "../assets/BottleParfum.png";
import Iris         from "../assets/Iris.png";
import Ambar        from "../assets/Ambar.png";
import Estaciones   from "../assets/Estaciones.png";
import Luna         from "../assets/Luna.png";
import Vino         from "../assets/Vino.png";
import Androgino    from "../assets/Androgino.png";
import Aura         from "../assets/Aura.png";
import LuxuryHotel  from "../assets/LuxuryHotel.png";

const categories = [
    { id: 1,  name: "Houses & Brands",       sub: "Maisons du parfum",     img: Versace,      bg: "radial-gradient(ellipse at 60% 40%, #adadad9f 0%, #0c0b0b 100%)", accent: "#C9A84C" },
    { id: 2,  name: "Designer · Niche · Indie", sub: "Spectrum of creation", img: BottleParfum, bg: "radial-gradient(ellipse at 40% 60%, #0e0e18 0%, #0a0a0a 100%)", accent: "#8B9EC4" },
    { id: 3,  name: "Notes",                 sub: "The raw ingredients",    img: Iris,         bg: "radial-gradient(ellipse at 50% 30%, #12100e 0%, #0b0b0b 100%)", accent: "#B89FC8" },
    { id: 4,  name: "Accords",               sub: "Harmony in molecules",   img: Ambar,        bg: "radial-gradient(ellipse at 70% 50%, #1a0f00 0%, #0d0b09 100%)", accent: "#D4893A" },
    { id: 5,  name: "Seasons",               sub: "Fragrance through time", img: Estaciones,   bg: "radial-gradient(ellipse at 30% 70%, #0a120e 0%, #090d0b 100%)", accent: "#6BAF8A" },
    { id: 6,  name: "Time of Day",           sub: "Dawn to dusk",           img: Luna,         bg: "radial-gradient(ellipse at 50% 20%, #0a0b18 0%, #08080f 100%)", accent: "#7B8FBF" },
    { id: 7,  name: "Occasion",              sub: "Every moment matters",   img: Vino,         bg: "radial-gradient(ellipse at 60% 60%, #180a0a 0%, #0f0909 100%)", accent: "#B85C6E" },
    { id: 8,  name: "Gender",                sub: "Beyond boundaries",      img: Androgino,    bg: "radial-gradient(ellipse at 40% 40%, #474337 0%, #0a0a0a 100%)", accent: "#C4A882" },
    { id: 9,  name: "Performance",           sub: "Lasting impressions",    img: Aura,         bg: "radial-gradient(ellipse at 50% 50%, #000000 0%, #000000 100%)", accent: "#5BA3BF" },
    { id: 10, name: "Mood",                  sub: "Feel, don't just smell", img: LuxuryHotel,  bg: "radial-gradient(ellipse at 30% 60%, #120e0a 0%, #0d0b09 100%)", accent: "#C49A5A" },
];

const VISIBLE = 5;
const CENTER  = Math.floor(VISIBLE / 2); // índice 2

function CategoryCarousel() {
    const [current, setCurrent]   = useState(0);
    const [paused,  setPaused]    = useState(false);
    const [animDir, setAnimDir]   = useState(null); // 'left' | 'right'
    const timerRef = useRef(null);
    const total    = categories.length;

    const mod = (n) => ((n % total) + total) % total;

    const advance = (dir) => {
        setAnimDir(dir);
        setCurrent(prev => mod(prev + (dir === "right" ? 1 : -1)));
    };

    // Autoplay
    useEffect(() => {
        if (paused) return;
        timerRef.current = setInterval(() => advance("right"), 3000);
        return () => clearInterval(timerRef.current);
    }, [paused, current]);

    // Índices visibles
    const visibleIndices = Array.from({ length: VISIBLE }, (_, i) =>
        mod(current + i - CENTER)
    );

    // Posición relativa al centro (-2 … +2)
    const getPos = (i) => i - CENTER;

    return (
        <section
            className="carousel-section"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="carousel-header">
                <span className="carousel-eyebrow">Explore by</span>
                <h2 className="carousel-title">Categories</h2>
            </div>

            <div className="carousel-stage">
                {/* Flecha izquierda */}
                <button className="carousel-arrow carousel-arrow--left" onClick={() => advance("left")}>‹</button>

                {/* Cartas */}
                <div className="carousel-cards">
                    {visibleIndices.map((catIdx, slotIdx) => {
                        const cat = categories[catIdx];
                        const pos = getPos(slotIdx);
                        const isCenter = pos === 0;

                        return (
                            <div
                                key={cat.id}  /* ← estable, no cambia entre renders */
                                className={`carousel-card ${isCenter ? "carousel-card--active" : ""}`}
                                data-pos={pos}
                                style={{
                                    background: cat.bg,
                                    "--accent": cat.accent,
                            }}
                            >
                                <div className="carousel-card__img-wrap">
                                    <img src={cat.img} alt={cat.name} className="carousel-card__img" draggable={false} />
                                    <div className="carousel-card__img-glow" />
                                </div>
                                <div className="carousel-card__overlay" />
                                <div className="carousel-card__body">
                                    <span className="carousel-card__sub">{cat.sub}</span>
                                    <h3 className="carousel-card__name">{cat.name}</h3>
                                    {isCenter && <span className="carousel-card__arrow">→</span>}
                                </div>
                                <div className="carousel-card__border" />
                            </div>
                        );
                    })}
                </div>

                {/* Flecha derecha */}
                <button className="carousel-arrow carousel-arrow--right" onClick={() => advance("right")}>›</button>
            </div>

            {/* Dots */}
            <div className="carousel-dots">
                {categories.map((_, i) => (
                    <button
                        key={i}
                        className={`carousel-dot ${i === current ? "carousel-dot--active" : ""}`}
                        onClick={() => { setAnimDir(i > current ? "right" : "left"); setCurrent(i); }}
                    />
                ))}
            </div>
        </section>
    );
}

export default CategoryCarousel;