import React, { useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchValue);
  };

  return (
    <Box px={4} width="100%">
      <InputGroup width="100%">
        <Input
          placeholder="Cauta un produs"
          flex="1"
          pr="3rem"
          borderRadius="18px"
          border="1px solid"
          borderColor="gray.400"
          _hover={{ borderColor: "gray.600" }}
          _focus={{
            borderColor: "blue.500",
            boxShadow: "0 0 0 2px rgba(59,130,246,0.5)",
          }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <InputRightElement>
          <IconButton
            icon={<FaSearch />}
            variant="ghost"
            aria-label="Cautare"
            bg="transparent"
            borderRadius="50%"
            _hover={{ bg: "transparent" }}
            _focus={{ bg: "transparent", boxShadow: "none" }}
            _active={{ bg: "transparent" }}
            onClick={handleSearch}
          />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
