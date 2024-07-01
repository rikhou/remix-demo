import * as React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link as RemixLink } from "@remix-run/react";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import { Typography, Link } from "@mui/material";

export const meta: MetaFunction = () => [
  { title: "Remix Starter" },
  { name: "description", content: "Welcome to remix!" },
];

export default function Index() {
  return (
    <React.Fragment>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Material UI Remix in TypeScript example
      </Typography>
      <Link to="/about" color="secondary" component={RemixLink}>
        Go to the about page
      </Link>
    </React.Fragment>
  );
}
