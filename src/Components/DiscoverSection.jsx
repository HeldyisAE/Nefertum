import { useState } from "react";
import "./DiscoverSection.css";
import ParfumsBackground1 from "../assets/ParfumsBackground1.png";

function DiscoverSection() {
    const [hovered, setHovered] = useState(false);

    return (
        <section className="discover-section">
            <div className="discover-bg">
                <img src={ParfumsBackground1} alt="" className="discover-bg__img" />
                <div className="discover-bg__vignette" />
                <div className="discover-bg__gradient" />
            </div>

            <div className="discover-content">
                <div className="discover-meta">
                    <span className="discover-line" />
                    <span className="discover-eyebrow">Personalized Journey</span>
                    <span className="discover-line" />
                </div>

                <h2 className="discover-title">
                    Your Scent<br />
                    <em>Awaits</em>
                </h2>

                <p className="discover-body">
                    Every fragrance tells a story. Answer a few questions about
                    the moments, textures, and moods that move you — and we'll
                    reveal the scents that were made for your skin.
                </p>

                <div className="discover-cta">
                    <button
                        className={`discover-btn ${hovered ? "discover-btn--hovered" : ""}`}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <span className="discover-btn__text">Discover Your Scent</span>
                        <span className="discover-btn__arrow">→</span>
                        <span className="discover-btn__fill" />
                    </button>

                    <p className="discover-hint">2 minutes · 8 questions · no account needed</p>
                </div>
            </div>

            {/* Partículas decorativas */}
            <div className="discover-particles">
                {[...Array(6)].map((_, i) => (
                    <span key={i} className={`discover-particle discover-particle--${i + 1}`} />
                ))}
            </div>
        </section>
    );
}

export default DiscoverSection;