import { useState } from "react";
import "./CollageNotes.css";

import Bergamote from "../assets/Bergamote.png";
import Jasmine from "../assets/Jasmine.png";
import Lavande from "../assets/Lavande.png";
import Pachuli from "../assets/Pachuli.png";
import Lotus from "../assets/Lotus.png";
import Sandalwood from "../assets/Sandalwood.png";

const notes = [
    {
        id: 1,
        name: "Bergamote",
        family: "Citrus",
        mood: "Fresh · Bright · Uplifting",
        description: "A radiant citrus opening that sparks clarity and light.",
        img: Bergamote,
        top: "8%", left: "10%", rotate: "-4deg",
        accent: "#D4A843",
    },
    {
        id: 2,
        name: "Jasmine",
        family: "Floral",
        mood: "Sensual · Warm · Feminine",
        description: "The queen of flowers — intoxicating and eternally elegant.",
        img: Jasmine,
        top: "4%", left: "43%", rotate: "3deg",
        accent: "#C8B89A",
    },
    {
        id: 3,
        name: "Lavande",
        family: "Aromatic",
        mood: "Calm · Herbal · Pure",
        description: "Provençal fields captured in a single breath.",
        img: Lavande,
        top: "6%", left: "76%", rotate: "-2deg",
        accent: "#9B8EC4",
    },
    {
        id: 4,
        name: "Patchouli",
        family: "Earthy",
        mood: "Deep · Smoky · Grounding",
        description: "Raw earth and dark woods — the soul of oriental perfumery.",
        img: Pachuli,
        top: "55%", left: "12%", rotate: "5deg",
        accent: "#8B6F47",
    },
    {
        id: 5,
        name: "Lotus",
        family: "Aquatic",
        mood: "Delicate · Serene · Ethereal",
        description: "Rising from still waters, pure and weightless.",
        img: Lotus,
        top: "53%", left: "42%", rotate: "-3deg",
        accent: "#A8C5B8",
    },
    {
        id: 6,
        name: "Sandalwood",
        family: "Woody",
        mood: "Creamy · Warm · Timeless",
        description: "Velvety warmth that lingers like a whispered secret.",
        img: Sandalwood,
        top: "55%", left: "74%", rotate: "2deg",
        accent: "#C4956A",
    },
];

function CollageNotes() {
    const [active, setActive] = useState(null);

    return (
        <section className="collage-section">
            <div className="collage-header">
                <span className="collage-eyebrow">Olfactory Palette</span>
                <h2 className="collage-title">Notes & Accords</h2>
            </div>

            <div className="collage-field">
                {notes.map((note) => (
                    <div
                        key={note.id}
                        className={`collage-card ${active === note.id ? "collage-card--active" : ""}`}
                        style={{
                            top: note.top,
                            left: note.left,
                            "--rotate": note.rotate,
                            "--accent": note.accent,
                        }}
                        onMouseEnter={() => setActive(note.id)}
                        onMouseLeave={() => setActive(null)}
                    >
                        <div className="collage-card__img-wrap">
                            <img src={note.img} alt={note.name} className="collage-card__img" />
                            <div className="collage-card__shimmer" />
                        </div>

                        <div className="collage-card__body">
                            <span className="collage-card__family">{note.family}</span>
                            <h3 className="collage-card__name">{note.name}</h3>
                            <p className="collage-card__mood">{note.mood}</p>
                            <p className="collage-card__desc">{note.description}</p>
                        </div>

                        <div className="collage-card__pin" />
                    </div>
                ))}

                {/* líneas decorativas de fondo */}
                <svg className="collage-lines" viewBox="0 0 1200 600" preserveAspectRatio="none">
                    <line x1="150" y1="80" x2="420" y2="120" stroke="rgba(89, 117, 84, 0.5)" strokeWidth="1" />
                    <line x1="420" y1="120" x2="740" y2="90" stroke="rgba(89, 117, 84, 0.5)" strokeWidth="1" />
                    <line x1="740" y1="90" x2="980" y2="110" stroke="rgba(89, 117, 84, 0.5)" strokeWidth="1" />
                    <line x1="220" y1="380" x2="530" y2="420" stroke="rgba(89, 117, 84, 0.5)" strokeWidth="1" />
                    <line x1="530" y1="420" x2="900" y2="390" stroke="rgba(89, 117, 84, 0.5)" strokeWidth="1" />
                </svg>
            </div>
        </section>
    );
}

export default CollageNotes;