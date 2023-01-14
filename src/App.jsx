import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Head from "./components/Head/Head";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";

const Home = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading....</h1>}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/complain" element={<h1>complain</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
