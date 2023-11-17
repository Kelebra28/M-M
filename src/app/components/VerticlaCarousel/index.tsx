// components/VerticalCarousel.tsx
'use client';

import { useState, useEffect } from 'react';
import styles from './VerticalCarousel.module.scss';

const VerticalCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const showSlides = (index: number) => {
    const carousel = document.querySelector(`.${styles.carousel}`) as HTMLElement;
    const dots = document.querySelectorAll(`.${styles.dot}`);
  
    if (!carousel) return;
  
    if (index > carousel.children.length) {
      setSlideIndex(1);
    } else if (index < 1) {
      setSlideIndex(carousel.children.length);
    } else {
      setSlideIndex(index);
    }
  
    carousel.style.transform = `translateY(-${(index - 1) * 100}%)`;
  
    dots.forEach((dot, i) => {
      dot.classList.remove(styles.active);
      if (i + 1 === index) {
        dot.classList.add(styles.active);
      }
    });
  };

  const currentSlide = (index: number) => {
    showSlides(index);
  };

  const plusSlides = (n: number) => {
    showSlides(slideIndex + n);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <div className={styles.carouselItem}>
          <img src="/carousel/Maquina1.svg" alt="Maquina1 1" />
        </div>
        <div className={styles.carouselItem}>
          <img src="/carousel/Maquina2.svg" alt="Maquina1 2" />
        </div>
        <div className={styles.carouselItem}>
          <img src="/carousel/Maquina3.svg" alt="Maquina1 3" />
        </div>
      </div>
      <div className={styles.dotsContainer}>
        <span className={`${styles.dot} ${slideIndex === 1 && styles.active}`} onClick={() => currentSlide(1)}></span>
        <span className={`${styles.dot} ${slideIndex === 2 && styles.active}`} onClick={() => currentSlide(2)}></span>
        <span className={`${styles.dot} ${slideIndex === 3 && styles.active}`} onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default VerticalCarousel;
