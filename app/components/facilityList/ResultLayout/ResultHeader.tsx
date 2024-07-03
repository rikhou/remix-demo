import { Breadcrumbs } from "@mui/material";
import { useT, T } from "i18n";
import ATypography from "mui/ATypography";
import { Link as RemixLink } from "@remix-run/react";
import { Link } from "@mui/material";

interface ResultHeaderProps {
  totalRecords?: number;
}
const ResultHeader = ({ totalRecords }: ResultHeaderProps) => {
  const breadcrumbsAriaLabel = useT({ k: "Common.Breadcrumbs_aria_label" });
  return (
    <>
      <Breadcrumbs
        sx={{
          color: "grey.600",
          "& .MuiBreadcrumbs-ol": {
            alignItems: "end",
          },
        }}
        separator={"›"}
        aria-label={breadcrumbsAriaLabel}
      >
        <Link underline="hover" color="grey.600" to="/" component={RemixLink}>
          <ATypography variant="bodySmall">
            <T k="FacilityList.home" />
          </ATypography>
        </Link>
        <ATypography color="textPrimary" variant="bodySmall">
          <T k="FacilityList.search_results" />
        </ATypography>
      </Breadcrumbs>
      <ATypography
        sx={{ mb: 1 }}
        variant="bodySmall"
        component="h2"
        color="grey.900"
      >
        <T
          k="FacilityList.showing_results_length"
          variables={{ resultLength: totalRecords }}
        />
      </ATypography>
    </>
  );
};
export default ResultHeader;
