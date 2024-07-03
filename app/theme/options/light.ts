import { ThemeOptions } from "@mui/material";
import baseThemeOptions from "./base";
import highlight from "./colors/highlight";

const lightThemeOptions: ThemeOptions = {
  ...baseThemeOptions,
  palette: {
    ...baseThemeOptions.palette,

    footer: {
      bg: "#F2F3F5",
      bg1: "#F8F8F8",
    },
    facility: {
      infoBackground: "#FAFAFA",
      businessesInfoBackground: "#F2F2F2",
      nearByInfoTextColor: highlight[600],
      tabSelectedBackground: "#C0D5F133",
    },
    campsiteDetail: {
      loopIconColor: "#B71C1C",
      maxPeopleIconColor: "#512DA8",
    },
    cart: {
      priceBackground: "#FAFAFA",
      orderNumberBG: "#EBF9FB",
    },
  },
};

export default lightThemeOptions;
