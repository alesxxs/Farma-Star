import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const items = [

  {
    src: 'https://sanpablo-site.s3.amazonaws.com/homepage/img/trade/2021/1Q-Ene/slider-liomont-ene-1q-d-v1.jpg',
    
  },
  {
    src: 'https://sanpablo-site.s3.amazonaws.com/homepage/img/trade/2021/1Q-Ene/slider-bayer-ene-1q-d-v1.jpg',
   
  },
  {
    src: 'https://assets1.farmaciasanpablo.com.mx/landings/HardSell/OfertasEnero2021/slider/1s-slider/02-slider-sem1-d-v1.jpg',
    
  },
  {
    src: 'https://assets1.farmaciasanpablo.com.mx/banners/slider/slider-01-apego-1qEne21-d-v3@2x.jpg',
    
  },
  {
    src: 'https://assets1.farmaciasanpablo.com.mx/banners/slider/slider-04-1qEne-d-v1.jpg',
   
  },
  {
    src: 'https://sanpablo-site.s3.amazonaws.com/homepage/img/trade/2021/1Q-Ene/slider-litalmex-ene-1q-d-v2.jpg'
    
  }

  
];

const App = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%"/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default App;