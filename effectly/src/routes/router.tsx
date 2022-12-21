import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignIn />
  },
]);

export default router;