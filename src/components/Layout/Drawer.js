import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
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
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button variant="ghost">
          <HamburgerIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent w="100vw" maxW="100vw" left="0" borderRadius="0" p={4}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Navigation</PopoverHeader>
        <PopoverBody>
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Home
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Link display="block" href="/home/sub1" mb={2}>
                  Subpage 1
                </Link>
                <Link display="block" href="/home/sub2">
                  Subpage 2
                </Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  About
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Link display="block" href="/about/team" mb={2}>
                  Our Team
                </Link>
                <Link display="block" href="/about/company">
                  Company Info
                </Link>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Services
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Link display="block" href="/services/service1" mb={2}>
                  Service 1
                </Link>
                <Link display="block" href="/services/service2">
                  Service 2
                </Link>
              </AccordionPanel>
            </AccordionItem>

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
