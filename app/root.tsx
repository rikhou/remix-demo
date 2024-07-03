import { Outlet, useRouteError, isRouteErrorResponse } from "@remix-run/react";
import Document from "./entryCommon/Document";
import { useEffect, useState } from "react";
import { store } from "redux/store";
import getMainConfig from "services/mainConfig";
import Layout from "entryCommon/Layout";

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await getMainConfig(store);
      setDataLoaded(true);
    }
    if (!dataLoaded) {
      fetchData();
    }
  }, [dataLoaded, store]);
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    let message;
    switch (error.status) {
      case 401:
        message = (
          <p>
            Oops! Looks like you tried to visit a page that you do not have
            access to.
          </p>
        );
        break;
      case 404:
        message = (
          <p>Oops! Looks like you tried to visit a page that does not exist.</p>
        );
        break;

      default:
        throw new Error(error.data || error.statusText);
    }

    return (
      <Document title={`${error.status} ${error.statusText}`}>
        {/* <Layout> */}
        <h1>
          {error.status}: {error.statusText}
        </h1>
        {message}
        {/* </Layout> */}
      </Document>
    );
  }

  if (error instanceof Error) {
    console.error(error);
    return (
      <Document title="Error!">
        {/* <Layout> */}
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
        {/* </Layout> */}
      </Document>
    );
  }

  return <h1>Unknown Error</h1>;
}
