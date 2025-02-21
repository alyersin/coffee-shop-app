import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Mongoose', sans-serif",
    body: "Arial, sans-serif",
  },
  breakpoints: {
    sm: "30em", // 480px
    md: "62em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "2xl": "96em", // 1536px
  },
  styles: {
    global: {
      "html, body": {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100%",
        overflowX: "hidden",
        margin: "0",
        padding: "0",
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        textDecoration: "none",
        _hover: {
          textDecoration: "none",
        },
      },
    },
    Input: {
      baseStyle: {
        border: "1px solid", // ✅ Ensure border is always visible
        borderColor: "gray.300", // ✅ Light gray border
        _focus: {
          borderColor: "blue.500", // ✅ Blue border on focus
          boxShadow: "0 0 0 2px blue.200", // ✅ Subtle focus ring
        },
      },
      variants: {
        outline: {
          field: {
            border: "1px solid",
            borderColor: "gray.400",
            _focus: {
              borderColor: "blue.500",
              boxShadow: "0 0 0 2px blue.300",
            },
          },
        },
        filled: {
          field: {
            border: "1px solid",
            borderColor: "gray.400",
            backgroundColor: "gray.100",
            _focus: {
              borderColor: "blue.500",
              boxShadow: "0 0 0 2px blue.300",
            },
          },
        },
      },
      defaultProps: {
        variant: "outline", // ✅ Make "outline" the default variant
      },
    },
  },
});

export default theme;
