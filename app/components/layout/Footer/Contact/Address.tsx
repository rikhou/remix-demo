import { Grid, CardMedia } from "@mui/material";
import { ATypography, AIcon } from "mui";
import { Address as AddressType } from "redux/reducers/sharedSlice";

interface AddressProps {
  address: AddressType;
}
const Address = ({ address }: AddressProps) => {
  const addressAltText = "address";

  return (
    <Grid
      md={4}
      sm={12}
      item
      container
      alignItems="flex-start"
      wrap="nowrap"
      data-ref="footer-contact-address"
      sx={{
        pb: { xs: "1.5rem", md: 0 },
      }}
    >
      {address.icon ? (
        <CardMedia
          component="img"
          sx={{ objectFit: "contain", height: "2.1875rem", width: "2.375rem" }}
          src={address.icon}
          alt={addressAltText}
        />
      ) : (
        <AIcon icon="Business" fontSize="large" color="primary" />
      )}

      <ATypography
        sx={{ ml: { xs: "1.125rem", md: 1 } }}
        mr={2}
        variant="bodySmall"
        color="grey.900"
      >
        {address.text}
      </ATypography>
    </Grid>
  );
};

export default Address;
