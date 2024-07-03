import { Container, Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer/Footer";

const drawerContainerID = "drawerContainer";

interface LayoutProps {
  children?: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <Container
      className="rootContainer"
      disableGutters
      maxWidth={false}
      sx={{
        bgcolor: "background.paper",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box id={drawerContainerID} sx={{ position: "relative" }}>
        <Box component="main" sx={{ flex: 1 }} data-ref="main">
          {children}
        </Box>
        <Footer />
      </Box>
    </Container>
  );
};

export default Layout;
