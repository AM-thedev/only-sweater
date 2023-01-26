import React, { ReactNode, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { theme } from '../../../utils';
import { Box, Dot, FlexBox, Image } from '../../atoms';

const renderDotsItem = (props: { isActive: boolean }) => {
  const { isActive } = props;

  return isActive ? 
    <Dot color={theme.colors.gray['500']} size="0.5rem" marginRight={"0.25rem"} />: 
    <Dot color={theme.colors.gray['400']} size="0.5rem" marginRight={"0.25rem"} />;
};

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const slideItems = (items: Array<ReactNode>, setSlideIndex: { (value: React.SetStateAction<number>): void; (arg0: number): void; } ) => {
  return items.map((item, i) => (
    <Box className="slide" onClick={() => (setSlideIndex(i))}>
        {item}
    </Box>
  ));
};

interface InfoProps {
  items: Array<ReactNode>;
}

export const Carousel: React.FC<InfoProps> = ({
  items
}: InfoProps) => {

  const [slideIndex, setSlideIndex] = useState(0);
  const [slides] = useState(slideItems(items, setSlideIndex));

  const slideNext = () => {
    if (slideIndex < slides.length - 1) {
        setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0)
    }
  };

  const slidePrev = () => {
      if (slideIndex > 0) {
          setSlideIndex(slideIndex - 1);
      } else {
        setSlideIndex(slides.length - 1)
      }
  };

  return (
    <FlexBox flexDirection="row" >
      <Box className="btn-prev" onClick={slidePrev} marginRight="0.5rem" >
        <Image src="/assets/arrow-right.svg" style={{transform: "scaleX(-1)", position:"relative", top:"8vw"}} />
      </Box>

      <Box minWidth="52vw" >
        <AliceCarousel 
          items={items}
          renderDotsItem={renderDotsItem}
          responsive={responsive}
          activeIndex={slideIndex}
          disableButtonsControls
        />
      </Box>

      <Box className="btn-next" onClick={slideNext} marginLeft="0.5rem" >
        <Image src="/assets/arrow-right.svg" style={{position:"relative", top:"8vw"}} />
      </Box>
    </FlexBox>
    
  );
}