import * as React from "react";
// import Container from "@mui/material/Container";
// import { Provider } from "react-redux";
// import { store } from "redux/store";
import MyLayout from "components/layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <Provider store={store}>
    <MyLayout>{children}</MyLayout>
    // </Provider>
  );
}
