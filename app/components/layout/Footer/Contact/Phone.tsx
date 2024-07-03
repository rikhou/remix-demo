import { Grid, Box, CardMedia } from "@mui/material";
import { ATypography, AIcon } from "mui";
import { Phones as PhonesType } from "redux/reducers/sharedSlice";

interface PhonesProps {
  phones: PhonesType;
}
const Phone = ({ phones }: PhonesProps) => {
  const phoneAltText = "phone";

  return (
    <Grid
      md={4}
      sm={12}
      item
      container
      alignItems="flex-start"
      wrap="nowrap"
      data-ref="footer-contact-phone"
      sx={{ pb: { xs: "1.5rem", md: 0 } }}
    >
      {phones.icon ? (
        <CardMedia
          component="img"
          sx={{ objectFit: "contain", height: "2.1875rem", width: "2.1875rem" }}
          src={phones.icon}
          alt={phoneAltText}
        />
      ) : (
        <AIcon icon="PhoneInTalkOutlined" fontSize="large" color="primary" />
      )}

      <Box sx={{ ml: { xs: "1.1875rem", md: 1 } }}>
        {phones.text.map((item) => (
          <ATypography variant="bodySmall" key={item.name} color="grey.900">
            {`${item.name}: `}
            {item.value}
          </ATypography>
        ))}
      </Box>
    </Grid>
  );
};

export default Phone;
