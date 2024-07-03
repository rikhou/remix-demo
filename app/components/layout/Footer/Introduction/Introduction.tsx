import { ATypography } from "mui";
import { Box, CardMedia } from "@mui/material";
import Link from "mui/Link";
import type { Introduction as IntroductionType } from "redux/reducers/sharedSlice";

interface IntroductionProps {
  introductionData?: IntroductionType;
}

function Introduction({ introductionData }: IntroductionProps) {
  const { explore, mapUrl, parkDesc } = introductionData || {};
  const mapAltText = "map";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        py: "1.5rem",
        alignItems: { xs: "left", md: "center" },
        flexDirection: { xs: "column", md: "row" },
      }}
      component="section"
      data-ref="footer-introduction"
    >
      <Box
        sx={{
          pr: "1.125rem",
          pb: { xs: 2, md: 0 },
        }}
        data-ref="footer-introduction-image"
      >
        <CardMedia
          component="img"
          sx={{ objectFit: "contain", width: "11.625rem", height: "9.125rem" }}
          src={mapUrl}
          alt={mapAltText}
        />
      </Box>
      <Box data-ref="footer-introduction-content">
        <ATypography variant="bodySmall" color="grey.900" sx={{ mb: 2 }}>
          {parkDesc}
        </ATypography>
        <Link
          href={explore?.path}
          sx={{
            textDecoration: "none",
            color: "primary.800",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <ATypography variant="bodySmall" component="span">
            {explore?.label}
          </ATypography>
        </Link>
      </Box>
    </Box>
  );
}

export default Introduction;
