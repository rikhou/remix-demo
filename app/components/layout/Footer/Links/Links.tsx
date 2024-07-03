import { Grid, CardMedia, Link } from "@mui/material";
// import Link from "mui/Link";
import { Footer } from "redux/reducers/sharedSlice";
import AccordionContent from "./AccordionContent";
import LinkContainer from "./LinkContainer";

interface LinksProps {
  footerData?: Footer;
}
const Links = ({ footerData }: LinksProps) => {
  const logoPath = footerData?.logo;
  const logoAltText = "footer logo";
  const { information, customerLinks, logoLink } = footerData || {};

  return (
    <Grid
      sx={{ justifyContent: "space-between" }}
      container
      component="section"
    >
      <Grid item md={2} xs={12}>
        <Link
          data-ref="footer-contract-logo"
          href={logoLink}
          sx={{
            display: "flex",
            alignItems: "left",
            flex: { xs: 1, md: "unset" },
            justifyContent: "flex-start",
            height: "6.6875rem",
            width: "6.25rem",
            mb: { xs: 4, md: "3.125rem" },
          }}
        >
          <CardMedia
            component="img"
            sx={{ objectFit: "contain" }}
            src={logoPath}
            alt={logoAltText}
          />
        </Link>
      </Grid>
      <Grid item md={4} xs={12} data-ref="footer-information">
        <AccordionContent title={information?.title}>
          <LinkContainer linkData={information?.links} />
        </AccordionContent>
      </Grid>
      <Grid
        item
        md={4}
        xs={12}
        data-ref="footer-customer"
        sx={{ pt: { xs: 3, md: 0 }, mb: "-0.0625rem" }}
      >
        <AccordionContent title={customerLinks?.title}>
          <LinkContainer linkData={customerLinks?.links} />
        </AccordionContent>
      </Grid>
    </Grid>
  );
};

export default Links;
