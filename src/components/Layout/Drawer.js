import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Button,
  Box,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

// Mock data for coffee brands
const cafeaBoabeBrands = [
  { name: "Brand 1", link: "/cafea/brand1" },
  { name: "Brand 2", link: "/cafea/brand2" },
  { name: "Brand 3", link: "/cafea/brand3" },
  { name: "Brand 4", link: "/cafea/brand4" },
];

const cafeaCapsuleBrands = [
  { name: "Capsule Brand 1", link: "/capsule/brand1" },
  { name: "Capsule Brand 2", link: "/capsule/brand2" },
  { name: "Capsule Brand 3", link: "/capsule/brand3" },
  { name: "Capsule Brand 4", link: "/capsule/brand4" },
];

export default function MobilePopover() {
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button variant="ghost">
          <HamburgerIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent w="100vw" maxW="100vw" left="0" borderRadius="0" p={4}>
        <PopoverArrow />
        <PopoverBody>
          <Accordion allowMultiple>
            {/* CAFEA */}
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  CAFEA
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Accordion allowMultiple>
                  {/* Cafea Boabe */}
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Cafea Boabe
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {cafeaBoabeBrands.map((brand) => (
                        <Link
                          key={brand.name}
                          display="block"
                          href={brand.link}
                        >
                          {brand.name}
                        </Link>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                  {/* Cafea Capsule */}
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Cafea Capsule
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {cafeaCapsuleBrands.map((brand) => (
                        <Link
                          key={brand.name}
                          display="block"
                          href={brand.link}
                        >
                          {brand.name}
                        </Link>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                  {/* Cafea Macinata */}
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Cafea Macinata
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {cafeaCapsuleBrands.map((brand) => (
                        <Link
                          key={brand.name}
                          display="block"
                          href={brand.link}
                        >
                          {brand.name}
                        </Link>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>

                  {/* Cafea Decofeinizata */}
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Cafea Decofeinizata
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {cafeaCapsuleBrands.map((brand) => (
                        <Link
                          key={brand.name}
                          display="block"
                          href={brand.link}
                        >
                          {brand.name}
                        </Link>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                {/* Cafea instanta */}

                <Link display="block" href="/cafea/decofeinizata">
                  Cafea Decofeinizata
                </Link>
              </AccordionPanel>
            </AccordionItem>

            {/* CEAI */}
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  CEAI
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Link display="block" href="/ceai/verde">
                  Ceai Verde
                </Link>
                <Link display="block" href="/ceai/negru">
                  Ceai Negru
                </Link>
              </AccordionPanel>
            </AccordionItem>

            {/* SERVICES */}
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Services
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Link display="block" href="/services/service1">
                  Service 1
                </Link>
                <Link display="block" href="/services/service2">
                  Service 2
                </Link>
              </AccordionPanel>
            </AccordionItem>

            {/* CONTACT */}
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Contact
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Link display="block" href="/contact">
                  Contact Us
                </Link>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
