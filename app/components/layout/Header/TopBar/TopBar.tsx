import { Box, Button } from "@mui/material";
import ATypography from "mui/ATypography";
import { useSelector } from "react-redux";
import selectors from "redux/selectors/shared";
import HeaderFooterContainer from "components/shared/HeaderFooterContainer";

const TopBar = () => {
  const defaultSwitchSiteLabel = "Go Back to Old Website";
  const switchSiteLabel =
    useSelector(selectors.getHeaderSwitchSiteLabel) || defaultSwitchSiteLabel;

  return (
    <HeaderFooterContainer>
      <Box sx={{ display: "flex", py: 1, justifyContent: "flex-start" }}>
        <Button
          variant="contained"
          color="primary"
          data-ref="switch-old-website"
          href="/rdSwitch.do?returnToOldSiteFlag=true"
          sx={{ whiteSpace: "nowrap", height: "2.25rem" }}
        >
          <ATypography variant="bodySmall">{switchSiteLabel}</ATypography>
        </Button>
      </Box>
    </HeaderFooterContainer>
  );
};

export default TopBar;
