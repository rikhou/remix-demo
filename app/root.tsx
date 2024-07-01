import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Container, Box } from "@mui/material";
import { LinksFunction } from "@remix-run/node";
import { getMuiLinks } from "./base/getMuiLinks";
import { MuiMeta } from "./base/MuiMeta";
import { MuiDocument } from "./base/MuiDocument";

export const links: LinksFunction = () => [...getMuiLinks()];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <MuiMeta />
        <Links />
      </head>
      <body>
        <Container
          className="rootContainer"
          disableGutters
          maxWidth={false}
          sx={{
            bgcolor: "background.paper",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* <Header /> */}
          {/* {isDesktopView && <NavigationMenu />} */}
          {children}
        </Container>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <MuiDocument>
        <Outlet />
      </MuiDocument>
    </>
  );
}
