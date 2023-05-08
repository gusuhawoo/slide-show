import { useState } from 'react';
import Contents from '../contentsPage/Contents';
import Hexagon from '../hexagon/Hexagon';
import ImagePage from '../imagePage';
import { ReturnButton, NextButton } from '../buttons/Button';

export default function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesNumber = 3;

  const handleReturn = (): void => {
    if (currentSlide === 0) {
      setCurrentSlide(0); // Min page 指定
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = (): void => {
    if (currentSlide >= slidesNumber) {
      setCurrentSlide(3); // Max page 指定
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <section>
      {currentSlide === 0 && (
        <Hexagon title="PRESENTATION" subtitle="Presentation sub title" />
      )}
      {currentSlide === 1 && <Contents />}
      {currentSlide === 2 && <ImagePage />}
      {currentSlide === 3 && (
        <Hexagon
          title="End"
          subtitle="https://github.com/gusuhawoo/slide-show"
        />
      )}
      {currentSlide !== 0 && <ReturnButton onClick={handleReturn} />}
      {currentSlide !== 3 && <NextButton onClick={handleNext} />}
    </section>
  );
}
