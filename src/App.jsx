import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Head from "./components/Head/Head";
import Footer from "./components/Footer/Footer";
const About = lazy(() => import("./pages/About/About"));
import Home from "./pages/Home/Home";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        <Route path="/complain" element={<h1>complain</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
