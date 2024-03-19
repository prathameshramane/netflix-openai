import { RouterProvider } from "react-router-dom";

import router from "./router.configs";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grow">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
