import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  useSystemColorMode: true,
};

const colors = {
  dark: {
    primary: "#0A0B0D",
    secondary: "#213140",
    ternary: "#4A738C",
  },
  light: {
    primary: "#C2D7F2",
    secondary: "#8C8C8C",
    ternary: "#BF7B75",
  },
};

const theme = extendTheme({ config, colors });

export default theme;
