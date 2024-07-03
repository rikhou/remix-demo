import { Divider, Box, Paper } from "@mui/material";
import ATypography from "mui/ATypography";
import { visuallyHidden } from "@mui/utils";
import { useSelector } from "react-redux";
import selectors from "redux/selectors/shared";
import HeaderFooterContainer from "components/shared/HeaderFooterContainer";
import Links from "./Links/Links";
import Introduction from "./Introduction/Introduction";
import Contact from "./Contact/Contact";

const Footer = () => {
  const footerData = useSelector(selectors.getFooterData);
  const { introduction, contacts, copyRight = "" } = footerData || {};
  return (
    <Box
      sx={{
        backgroundColor: "footer.bg",
        borderTop: "1px solid",
        borderTopColor: "grey.300",
        mt: { xs: "1.5rem", md: "3.5rem" },
      }}
      component="footer"
      role="contentinfo"
      data-ref="footer"
    >
      <HeaderFooterContainer sx={{ py: "1.5rem" }}>
        <ATypography sx={visuallyHidden} variant="h2" component="h2">
          Footer Content
        </ATypography>
        <Links footerData={footerData} />
        <Divider />
        <Introduction introductionData={introduction} />
        <Divider />
        {contacts && (
          <>
            <Contact contactData={contacts} />
            <Divider />
          </>
        )}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            flexDirection: { xs: "column-reverse", md: "row" },
            pt: "1.5rem",
          }}
          component="section"
        >
          <ATypography
            variant="bodySmall"
            data-ref="footer-copyright"
            color="grey.900"
            dangerouslySetInnerHTML={{ __html: copyRight }}
            component="span"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          />
        </Box>
      </HeaderFooterContainer>
      <Paper
        data-ref="bottom-nav-portal"
        id="bottom-nav-portal"
        sx={{
          position: "fixed",
          zIndex: 2,
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: 0,
          // workaround bottom gap issue
          paddingBottom: "0.25rem",
          marginBottom: "-0.25rem",
          boxShadow: "0px 0px 10px rgb(0 0 0 / 15%)",
        }}
      />
    </Box>
  );
};

export default Footer;
