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
import coffeeData from "../../app/data/coffeeTypes.json";
import teaData from "../../app/data/teaTypes.json";

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
                  {/* CAFEA BOABE */}
                  <AccordionItem>
                    <AccordionButton
                      as={Link}
                      href="/cafea/boabe"
                      display="block"
                      textAlign="left"
                    >
                      Cafea Boabe
                    </AccordionButton>
                  </AccordionItem>
                  {/* CAFEA CAPSULE */}
                  <AccordionItem>
                    <AccordionButton
                      as={Link}
                      href="/cafea/capsule"
                      display="block"
                      textAlign="left"
                    >
                      Cafea Capsule
                    </AccordionButton>
                  </AccordionItem>
                  {/* CAFEA MACINATA */}
                  <AccordionItem>
                    <AccordionButton
                      as={Link}
                      href="/cafea/macinata"
                      display="block"
                      textAlign="left"
                    >
                      Cafea Macinata
                    </AccordionButton>
                  </AccordionItem>
                  {/* CAFEA DECOFEINIZATA */}
                  <AccordionItem borderBottom="none">
                    <AccordionButton
                      as={Link}
                      href="/cafea/decofeinizata"
                      display="block"
                      textAlign="left"
                    >
                      Cafea Decofeinizata
                    </AccordionButton>
                  </AccordionItem>
                </Accordion>
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
                <Accordion allowMultiple>
                  {/* CEAI CAPSULE */}
                  <AccordionItem borderBottom="none">
                    <AccordionButton
                      as={Link}
                      href="/ceai/capsule"
                      display="block"
                      textAlign="left"
                    >
                      Ceai Capsule
                    </AccordionButton>
                  </AccordionItem>
                  {/* CEAI INFUZABIL */}
                  <AccordionItem borderBottom="none">
                    <AccordionButton
                      as={Link}
                      href="/ceai/infuzabil"
                      display="block"
                      textAlign="left"
                    >
                      Ceai Infuzabil
                    </AccordionButton>
                  </AccordionItem>
                  {/* CEAI INSTANT */}
                  <AccordionItem borderBottom="none">
                    <AccordionButton
                      as={Link}
                      href="/ceai/instant"
                      display="block"
                      textAlign="left"
                    >
                      Ceai Instant
                    </AccordionButton>
                  </AccordionItem>
                </Accordion>
              </AccordionPanel>
            </AccordionItem>

            {/* ACCESORII */}
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  ACCESORII
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
