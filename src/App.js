import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import WorkSpace from "./Pages/WorkSpace";
import Client from "./Pages/Client";
import Profile from "./Pages/Profile";
import Root from "./Components/Root";
import Account from "./Pages/Account";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "account",
          element: <Account />,
          children: [
            {
              path: "workspace",
              element: <WorkSpace />,
            },
            {
              path: "client",
              element: <Client />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
