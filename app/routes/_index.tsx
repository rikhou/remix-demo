import * as React from "react";
import { Box } from "@mui/material";
import type { MetaFunction } from "@remix-run/node";
import { Link as RemixLink } from "@remix-run/react";
import { Typography, Link } from "@mui/material";
import { mainSpacingXStyle } from "components/shared/mainStyles";

export const meta: MetaFunction = () => [
  { title: "Remix Starter" },
  { name: "description", content: "Welcome to remix!" },
];

export default function Index() {
  return (
    <Box
      sx={{
        minHeight: "10rem",
        mb: { xs: 0, md: 2 },
        px: { ...mainSpacingXStyle, md: "0.7rem" },
        py: "2rem",
      }}
    >
      <Box>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Home Page
        </Typography>
        <Link to="/list" color="secondary" component={RemixLink}>
          Go to the list page
        </Link>
      </Box>
    </Box>
  );
}
