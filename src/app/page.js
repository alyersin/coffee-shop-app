import { Box, Heading } from "@chakra-ui/react";
import Carousel from "@/components/Layout/Carousel";

export default function Home() {
  const slides = [
    "/assets/1.jpg", // Remove "../../public"
    "/assets/2.jpg",
    "/assets/3.png",
  ];

  return (
    <Box height="100vh">
      <Carousel slides={slides} autoPlay={true} interval={9000} />;
    </Box>
  );
}
