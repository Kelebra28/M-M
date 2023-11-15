import React from "react";
import Image from "next/image";

import './Carousel.module.css'

const Carousel: React.FC = () => {
    return (
        <div id="indicators-carousel" className="relative w-full" data-carousel="static">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {/* Item 1 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                    <img
                        src="/carousel-1.svg"
                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        alt="..."
                    />
                </div>

            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="true"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"
                ></button>
                {/* Add buttons for other slides */}
            </div>
            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
            >
                {/* Add previous button content */}
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
            >
                {/* Add next button content */}
            </button>
        </div>
    );
};

export default Carousel;