import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import App from "./App";
import GptSearchPage from "./pages/GptSearch/GptSearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/gpt-search",
        element: <GptSearchPage />,
      },
    ],
  },
]);

export default router;
