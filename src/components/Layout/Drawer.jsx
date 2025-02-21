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

export default function MobilePopover() {
  return (
    <Popover placement="bottom-start" offset={[0, 10]}>
      <PopoverTrigger>
        <Button variant="ghost" bg="transparent" _hover={{ bg: "transparent" }}>
          <HamburgerIcon boxSize={8} />
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
                <Accordion allowMultiple>
                  <AccordionItem borderBottom="none">
                    <AccordionButton
                      as={Link}
                      href="/accesorii"
                      display="block"
                      textAlign="left"
                    >
                      Lapte
                    </AccordionButton>
                  </AccordionItem>
                  <AccordionItem borderBottom="none">
                    <AccordionButton
                      as={Link}
                      href="/accesorii"
                      display="block"
                      textAlign="left"
                    >
                      Zahar, indulcitori
                    </AccordionButton>
                  </AccordionItem>
                  <AccordionItem borderBottom="none">
                    <AccordionButton
                      as={Link}
                      href="/accesorii"
                      display="block"
                      textAlign="left"
                    >
                      Pahare, Capace, Palete
                    </AccordionButton>
                  </AccordionItem>{" "}
                  <AccordionItem borderBottom="none">
                    <AccordionButton
                      as={Link}
                      href="/accesorii"
                      display="block"
                      textAlign="left"
                    >
                      Cesti, Farfurii, Altele
                    </AccordionButton>
                  </AccordionItem>
                </Accordion>
              </AccordionPanel>
            </AccordionItem>

            {/* ESPRESSOARE SI CAFETIERE */}
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  ESPRESSOARE SI CAFETIERE
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <Accordion allowMultiple>
                  {/* ESPRESSOARE */}
                  <AccordionItem>
                    <AccordionButton
                      as={Link}
                      href="/espressoare"
                      display="block"
                      textAlign="left"
                    >
                      Aparate cafea boabe
                    </AccordionButton>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton
                      as={Link}
                      href="/cafetiere"
                      display="block"
                      textAlign="left"
                    >
                      Aparate cafea capsule
                    </AccordionButton>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton
                      as={Link}
                      href="/cafetiere"
                      display="block"
                      textAlign="left"
                    >
                      Aparate cafea macinata
                    </AccordionButton>
                  </AccordionItem>
                  <AccordionItem borderBottom="none">
                    <AccordionButton
                      as={Link}
                      href="/cafetiere"
                      display="block"
                      textAlign="left"
                    >
                      Aparate cafea macinata
                    </AccordionButton>
                  </AccordionItem>
                </Accordion>
              </AccordionPanel>
            </AccordionItem>

            {/* PROMOTII */}
            <AccordionItem>
              <AccordionButton
                as={Link}
                href="/promotii"
                display="block"
                textAlign="left"
              >
                PROMOTII
              </AccordionButton>
            </AccordionItem>
          </Accordion>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
