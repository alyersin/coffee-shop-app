"use client";

import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Motion Box for animations
const MotionBox = motion(Box);

export default function Carousel({ slides, autoPlay = true, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!autoPlay) return;

    const slideInterval = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(slideInterval);
  }, [currentIndex, autoPlay, interval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Handle drag/swipe gestures
  const handleDragEnd = (event, info) => {
    const { offset, velocity } = info;

    // If swiped left (next slide)
    if (offset.x < -50 || velocity.x < -300) {
      nextSlide();
    }
    // If swiped right (previous slide)
    else if (offset.x > 50 || velocity.x > 300) {
      prevSlide();
    }
  };

  return (
    <Box
      position="relative"
      width="100%"
      maxWidth="600px"
      mx="auto"
      overflow="hidden"
    >
      {/* Draggable Container */}
      <MotionBox
        ref={carouselRef}
        display="flex"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2} // Smooth dragging
        onDragEnd={handleDragEnd} // Handle swipe direction
        cursor="grab"
        _active={{ cursor: "grabbing" }}
        width="100%"
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            flex="0 0 100%"
            display={index === currentIndex ? "block" : "none"}
            width="100%"
          >
            <Image
              src={slide}
              alt={`Slide ${index}`}
              width="100%"
              borderRadius="lg"
            />
          </Box>
        ))}
      </MotionBox>

      {/* Navigation Buttons */}
      <Button
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={prevSlide}
        zIndex="10"
      >
        ❮
      </Button>
      <Button
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={nextSlide}
        zIndex="10"
      >
        ❯
      </Button>

      {/* Indicator Dots */}
      <Flex justify="center" mt={2}>
        {slides.map((_, index) => (
          <Box
            key={index}
            w="10px"
            h="10px"
            mx={1}
            borderRadius="full"
            bg={currentIndex === index ? "blue.500" : "gray.300"}
            cursor="pointer"
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Flex>
    </Box>
  );
}
