import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./component/Header";
import { Body } from "./component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { useOnlineStatus } from "./utils/useOnlineStatus";
// import { About } from "./component/About";
// import { Contact } from "./component/Contact";
import { Shimmer } from "./component/Shimmer";
import { Productinfo } from "./component/Productinfo";
import { lazy, Suspense } from "react";
import { Error } from "./component/Error";
import { Footer } from "./component/Footer";
const About = lazy(() => import("./component/About"));
const Contact = lazy(() => import("./component/Contact"));

let Applayot = () => {
  const statusOnline = useOnlineStatus();
  if (statusOnline === false) {
    return (
      <>
        <h1>You are offline please check you network</h1>
      </>
    );
  }

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayot></Applayot>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Body></Body> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer></Shimmer>}>
            <About></About>
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer></Shimmer>}>
            <Contact></Contact>
          </Suspense>
        ),
      },
      { path: "/products/:resid", element: <Productinfo></Productinfo> },
    ],
  },
]);

let root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
