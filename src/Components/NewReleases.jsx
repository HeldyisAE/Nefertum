import { useState, useEffect } from "react";
import "./NewReleases.css";
import Parfum1 from '../assets/Parfum_1.jpg';
import Parfum2 from '../assets/Parfum_2.png';
import Parfum3 from '../assets/Parfum_3.png';

const images = [Parfum1, Parfum2, Parfum3];

function NewReleases() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent((prev) => {
          console.log("cambiando a:", (prev + 1) % images.length);
          return (prev + 1) % images.length;
        });
      }, 7000);
      return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero-container">
            <div className="hero-left">
                <span className="hero-tag">Latest Fragrances</span>
                <h1 className="hero-title">New Releases</h1>
                <p className="hero-description">
                    Explore the newest additions in modern perfumery,
                    from niche masterpieces to designer launches
                </p>
            </div>

            <div className="hero-right">
                <div className="hero-slider">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            className={`hero-image ${i === current ? "active" : ""}`}
                            alt={`Fragrance ${i + 1}`}
                        />
                    ))}

                    <div className="hero-dots">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                className={`hero-dot ${i === current ? "active" : ""}`}
                                onClick={() => setCurrent(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewReleases;