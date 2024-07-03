import { AppBar, Paper, Box } from "@mui/material";
import TopBar from "./TopBar/TopBar";

export const headerID = "header";

const Header = () => {
  return (
    <>
      <AppBar id={headerID} enableColorOnDark position="static" color="default">
        <TopBar />
      </AppBar>
      <Paper
        data-ref="header-nav-portal"
        id="header-nav-portal"
        sx={{
          display: "flex",
          alignItems: "center",
          position: "fixed",
          top: 0,
          borderRadius: 0,
          backgroundColor: "common.white",
          boxShadow: "0 5px 10px rgb(0 0 0 / 15%)",
          width: "100% ",
          zIndex: 2,
          marginTop: 0,
        }}
      />
    </>
  );
};

export default Header;
