import { Grid, CardMedia } from "@mui/material";
import { ATypography } from "mui";
import Link from "mui/Link";
import { Government as GovernmentType } from "redux/reducers/sharedSlice";

interface GovernmentProps {
  data: GovernmentType;
}
const Government = ({ data }: GovernmentProps) => {
  const governmentAltText = "government";
  return (
    <Grid
      md={4}
      sm={12}
      item
      container
      alignItems="flex-start"
      wrap="nowrap"
      data-ref="footer-contact-government"
    >
      <CardMedia
        component="img"
        sx={{ objectFit: "contain", height: "2.875rem", width: "2.875rem" }}
        src={data.logo}
        alt={governmentAltText}
      />
      <Link
        sx={{ ml: 1, textDecoration: "none" }}
        href={data.link}
        color="grey.900"
      >
        <ATypography color="grey.900" variant="bodySmall">
          {data.text}
        </ATypography>
      </Link>
    </Grid>
  );
};

export default Government;
